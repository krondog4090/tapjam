import React, {  } from 'react';
import { StyleSheet, View, Dimensions, Text, AsyncStorage } from 'react-native';
import * as firebase from 'firebase';
import { Font } from 'expo';

import Ball from './components/Ball';
import Hoop from './components/Hoop';
import Net from './components/Net';
import Floor from './components/Floor';
import Score from './Score';
import Vector from './utils/Vector';


// function helpers
// import { randomFunction } from './FunctionHelpers';
// import { highScoreFunction } from './FunctionHelpers';


// lifecycle restarts here
const gravity = 0.6; 
const radius = 48; 
const rotationFactor = 10;

// components sizes and positions
const FLOOR_HEIGHT = 48;
const FLOOR_Y = 11;
const HOOP_Y = Dimensions.get('window').height - 235;
const SCOREBOARD_HEIGHT = Dimensions.get('window').height - 480;
const NET_HEIGHT = 2;
const NET_WIDTH = 76;
const NET_Y = Dimensions.get('window').height - 226;
const NET_X = (Dimensions.get('window').width / 2) - (NET_WIDTH / 2);
const NET_LEFT_BORDER_X = NET_X + NET_HEIGHT / 2;
const NET_LEFT_BORDER_Y = NET_Y;
const NET_RIGHT_BORDER_X = NET_X + NET_WIDTH - NET_HEIGHT / 2;
const NET_RIGHT_BORDER_Y = NET_LEFT_BORDER_Y;

// ball lifecycle
const LC_WAITING = 0;
const LC_STARTING = 1;
const LC_FALLING = 2;
const LC_BOUNCING = 3;
const LC_RESTARTING = 4;
const LC_RESTARTING_FALLING = 5;

// firebase shit
// const database = firebase.database();
// const ref = database.ref('scores/dallas');



export default class Court extends React.Component {
  static navigationOptions = {
    header: null,
  };
    constructor(props) {
      super(props);

      this.interval = null;
      this.state = {
        fontLoaded: false,
        x: Dimensions.get('window').width / 2 - radius,
        y: FLOOR_Y,
        vx: 0,
        vy: 0,
        rotate: 0,
        scale: 1,
        lifecycle: LC_WAITING,
        scored: null,
        score: 0,
        highScore: '',
        totalPoints: '',
        teamScore: 0
      };
    }

    //PROPS
    //Font
    //Color
    //Title

  
    componentDidMount() {
      Font.loadAsync({
        'font': this.props.navigation.state.params.font,
      }).then(() => {
        this.setState({
          fontLoaded: true
        });
      });
      this.interval = setInterval(this.update.bind(this), 1000 / 60);
    }
  
    componentWillUnmount() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }

    async componentWillMount() {
      // highScoreFunction();
      const highScore = await AsyncStorage.getItem('highScore');
      if (highScore) {
        console.log('best score = ', (highScore));
        this.setState({
          highScore: highScore
        });
      } else {
        await AsyncStorage.setItem('highScore', '0')
        this.setState({
          highScore: Number(highScore)
        });
      }
      
      const totalPoints = await AsyncStorage.getItem('totalPoints');
      if (totalPoints) {
        console.log('total points = ', (totalPoints));
        this.setState({
          totalPoints: totalPoints
        });
      } else {
        await AsyncStorage.setItem('totalPoints', '0')
        this.setState({
          totalPoints: Number(totalPoints)
        });
      }
    }

    onStart(angle) {
      if (this.state.lifecycle === LC_WAITING) {
        this.setState({
          vx: angle * 0.2,
          vy: -16,
          lifecycle: LC_STARTING,
        });
      }
    }
  
    randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    circlesColliding(circle1, circle2) {
      const dx = circle1.x - circle2.x;
      const dy = circle1.y - circle2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
  
      if (distance < circle1.radius + circle2.radius) {
        return true;
      }
      return false;
    }
  
    updateCollisionVelocity(nextState, ball, netBorder) {
      const xDistance = (netBorder.x - ball.x);
      const yDistance = (netBorder.y - ball.y);
      let normalVector = new Vector(xDistance, yDistance);
      normalVector = normalVector.normalise();
  
      const tangentVector = new Vector((normalVector.getY() * -1), normalVector.getX());
  
      // create ball scalar normal direction.
      const ballScalarNormal = normalVector.dot(ball.velocity);
      const netScalarNormal = normalVector.dot(netBorder.velocity);
  
      // create scalar velocity in the tagential direction.
      const ballScalarTangential = tangentVector.dot(ball.velocity);
  
      const ballScalarNormalAfter = (ballScalarNormal * (ball.mass - netBorder.mass) +
       2 * netBorder.mass * netScalarNormal) / (ball.mass + netBorder.mass);
  
      const ballScalarNormalAfterVector = normalVector.multiply(ballScalarNormalAfter);
      const ballScalarNormalVector = (tangentVector.multiply(ballScalarTangential));
  
      const nextVelocity = ballScalarNormalVector.add(ballScalarNormalAfterVector);
  
      if (ball.y < NET_Y + NET_HEIGHT / 2) {
        nextState.vx = nextVelocity.x;
      } else {
        nextState.vx = -nextVelocity.x;
      }
  
      nextState.vy = nextVelocity.y;
      nextState.x = this.state.x + nextState.vx;
      nextState.y = this.state.y - nextState.vy;
    }
  
    handleCollision(nextState) {
      if (nextState.lifecycle !== LC_FALLING && nextState.lifecycle !== LC_BOUNCING) return;
  
      const _self = this;
  
      const ball = {
        x: nextState.x + radius,
        y: nextState.y + radius,
        radius: radius * nextState.scale,
        velocity: {
          getX() {
            return _self.state.vx;
          },
          getY() {
            return _self.state.vy;
          },
        },
        mass: 2,
      };
      const netLeftBorder = {
        x: NET_LEFT_BORDER_X,
        y: NET_LEFT_BORDER_Y,
        radius: NET_HEIGHT / 2,
        velocity: {
          getX() {
            return 0;
          },
          getY() {
            return 0;
          },
        },
        mass: 10,
      };
      const netRightBorder = {
        x: NET_RIGHT_BORDER_X,
        y: NET_RIGHT_BORDER_Y,
        radius: NET_HEIGHT / 2,
        velocity: {
          getX() {
            return 0;
        },
          getY() {
            return 0;
          },
        },
        mass: 10,
      };
  

      const isLeftCollision = this.circlesColliding(ball, netLeftBorder);
      if (isLeftCollision) {
        nextState.lifecycle = LC_BOUNCING;
        this.updateCollisionVelocity(nextState, ball, netLeftBorder);
      } else {
        const isRightCollision = this.circlesColliding(ball, netRightBorder);
        if (isRightCollision) {
          nextState.lifecycle = LC_BOUNCING;
          this.updateCollisionVelocity(nextState, ball, netRightBorder);
        }
      }
    }
  
    updateVelocity(nextState) {
      nextState.vx = this.state.vx;
      if (nextState.lifecycle === LC_STARTING && nextState.y < NET_Y - 200) {
        nextState.vy = this.state.vy;
      } else {
        nextState.vy = this.state.vy + gravity;
      }
    }

    updatePosition(nextState) {
      nextState.x = this.state.x + nextState.vx;
      nextState.y = this.state.y - nextState.vy;
  
      if (nextState.lifecycle === LC_STARTING && nextState.y < this.state.y) {
        nextState.lifecycle = LC_FALLING;
      }
      if (nextState.lifecycle === LC_RESTARTING && nextState.y < this.state.y) {
        nextState.lifecycle = LC_RESTARTING_FALLING;
      }
      if (this.state.scored === null) {
        if (this.state.y + radius > NET_Y + NET_HEIGHT / 2 && nextState.y + radius < NET_Y + NET_HEIGHT / 2) {
          if (nextState.x + radius > NET_LEFT_BORDER_X && nextState.x + radius < NET_RIGHT_BORDER_X) {
            nextState.scored = true;

            this.setState({
              score: nextState.score += 1,
              totalPoints: nextState.totalPoints += 1,
              teamScore: nextState.teamScore += 1
            });
          } else {
            nextState.scored = false;
          }
        }
      }
    }

    updateScale(nextState) {
      if (nextState.lifecycle === LC_BOUNCING || nextState.lifecycle === LC_RESTARTING || nextState.lifecycle === LC_RESTARTING_FALLING) return;
  
      let scale = this.state.scale;
      if (scale > 0.4 && this.state.y > FLOOR_HEIGHT) {
        scale -= 0.01;
      }
      nextState.scale = scale;
    }
  
    updateRotate(nextState) {
      nextState.rotate = this.state.rotate + (nextState.vx * rotationFactor);
    }
  
    handleRestart(nextState) {
      if (nextState.lifecycle === LC_RESTARTING_FALLING && nextState.y <= FLOOR_Y) {
        // in front of the Floor
        nextState.y = FLOOR_Y;
        nextState.vx = 0;
        nextState.vy = 0;
        nextState.rotate = 0;
        nextState.scale = 1;
        nextState.lifecycle = LC_WAITING;
        nextState.scored = null;
      }

      const outOfScreen = (nextState.x > Dimensions.get('window').width + 100 || nextState.x < 0 - (radius * 2) - 100);
  
      if (
        (outOfScreen === true)
        || ((nextState.lifecycle === LC_FALLING || nextState.lifecycle === LC_BOUNCING) && (nextState.y + (radius * nextState.scale * 2) < FLOOR_Y + radius * -2))
      ) {
        if (outOfScreen && nextState.scored === null) {
          nextState.scored = false;
        }

        // will be thrown to the front of the floor
        nextState.y = FLOOR_Y;
  
        if (nextState.scored === true) {
          nextState.x = this.randomIntFromInterval(4, Dimensions.get('window').width - (radius * 2) - 4);
        } else {
          // nextState.x = Dimensions.get('window').width / 2 - radius; //
          nextState.x = this.randomIntFromInterval(4, Dimensions.get('window').width - (radius * 2) - 4);
          nextState.score = 0;
        }
  
        // nextState.x = Dimensions.get('window').width / 2 - radius; //
        nextState.vy = -8;
        nextState.vx = 0;
        nextState.scale = 1;
        nextState.rotate = 0;
        nextState.lifecycle = LC_RESTARTING;
      }
    }
  
    update() {
      // console.log('props', (this.state));
      if(this.state.score > this.state.highScore) {
        this.setState({
          highScore: Number(this.state.score),
        });
        AsyncStorage.setItem('highScore', `${this.state.score}`);
      }

      if(this.state.totalPoints === this.state.totalPoints) {
        this.setState({
          totalPoints: Number(this.state.totalPoints)
        });
        AsyncStorage.setItem('totalPoints', `${this.state.totalPoints}`);
      }

      if (this.state.lifecycle === LC_WAITING) return;
      let nextState = null;
      nextState = Object.assign({}, this.state);
      this.updateVelocity(nextState);
      this.updatePosition(nextState);
      this.updateScale(nextState);
      this.updateRotate(nextState);
      this.handleCollision(nextState);
      this.handleRestart(nextState);
      this.setState(nextState);
    }
      
    renderNet(render) {
      if (render === true) {
        return (
          <Net y={NET_Y} x={NET_X} height={NET_HEIGHT} width={NET_WIDTH} />
        );
      }
      return null;
    }
  
    renderFloor(render) {
      if (this.state.lifecycle === LC_RESTARTING || this.state.lifecycle === LC_RESTARTING_FALLING) {
        render = !render;
      }
  
      if (render === true) {
        return (
          <Floor height={FLOOR_HEIGHT} />
        );
      }
      return null;
    }
  
    render() {
      const { fontLoaded } = this.state;
      return (
        <View style={[styles.container, { backgroundColor: this.props.navigation.state.params.color }]}>
        <Text style={[styles.teamName, fontLoaded && { fontFamily: 'font', color: this.props.navigation.state.params.teamNameColor }]}>{this.props.navigation.state.params.title}</Text>
          <Score 
            // y={FLOOR_HEIGHT * 7}
            font={this.props.navigation.state.params.font}
            colors={this.props.navigation.state.params.score}
            y={SCOREBOARD_HEIGHT} 
            teamScore={this.state.teamScore}
            highScore={this.state.highScore}
            totalPoints={this.state.totalPoints}
            score={this.state.score} 
            scored={this.state.scored}
            />
          <Hoop y={HOOP_Y} />
          {this.renderNet(this.state.lifecycle === LC_STARTING)}
          {this.renderFloor(this.state.vy <= 0)}
          <Ball
            onStart={this.onStart.bind(this)}
            x={this.state.x}
            y={this.state.y}
            radius={radius}
            rotate={this.state.rotate}
            scale={this.state.scale}
          />
          {this.renderNet(this.state.lifecycle !== LC_STARTING)}
          {this.renderFloor(this.state.vy > 0)}
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: "#094B93",
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 60
    },
    backgroundImage: {
      flex: 1,
      width: null,
      height: null
    },
    teamName: {
      fontSize: 64,
    //   color: '#EAEAEA'
    },
    scoreText: {
      fontSize: 25,
      color: '#EAEAEA'
    }
  });
