import React, { PureComponent } from "react";
import Loadable  from "@loadable/component"

var circles;
var lastCircles;
var total;

function Circle(x, y, p5){
  this.x = x; 
  this.y = y;
  this.r = 1;
  this.growing = true;

  this.grow = function(p5) {
    if (this.growing) {
      this.r += 1;
    }
  };

  this.show = function(p5) {
    p5.stroke(0);
    p5.noFill();
    p5.strokeWeight(0.3);
    p5.ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };

  this.edges = function(p5) {
    return (
      this.x + this.r >= p5.width ||
      this.x - this.r <= 0 ||
      this.y + this.r >= p5.height ||
      this.y - this.r <= 0
    );
  };
  }
  
  function lastCirclesGrowing(p5) {
    for (var i = 0; i < lastCircles.length; i++) {
      if (lastCircles[i].growing) return true;
    }
    return false;
  }

  function newCircle(p5) {
    var x = p5.random(p5.width);
    var y = p5.random(p5.height);
    var valid = true;
    for (var i = 0; i < circles.length; i++) {
      var circle = circles[i];
      var d = p5.dist(x, y, circle.x, circle.y);
      if (d < circle.r) {
        valid = false;
        break;
      }
    }
    if (valid) {
      return new Circle(x, y);
    } else {
      return null;
    }
  }

export default class Animation extends PureComponent {
  
  setup = (p5, parent) => {
    console.log(this.props.width, this.props.height);
    p5.createCanvas(this.props.width*0.8, this.props.height*0.8).parent(parent);
    circles = [];
    lastCircles = [];
    total = 2;
  }

  draw = p5 => {
        p5.background(255);
        p5.frameRate(50);
      
        var count = 0;
        var attempts = 0;
      
        if (((lastCircles.length === 0) || !lastCirclesGrowing(p5))) {
          lastCircles = [];
          while (count < total / 2) {
            var newC = newCircle(p5);
            if (newC !== null) {
              circles.push(newC);
              lastCircles.push(newC);
              count++;
            }
      
            attempts++;
            if (attempts > 200) {
                p5.noLoop();
              console.log('finished');
              break;
            }
          }
          total++;
        }
      
        for (var i = 0; i < circles.length; i++) {
          var circle = circles[i];
      
          if (circle.growing) {
            if (circle.edges(p5)) {
              circle.growing = false;
            } else {
              for (var j = 0; j < circles.length; j++) {
                var other = circles[j];
                if (circle !== other) {
                  var d = p5.dist(circle.x, circle.y, other.x, other.y);
                  var distance = circle.r + other.r;
      
                  if (d - 2 < distance) {
                    circle.growing = false;
                    break;
                  }
                }
              }
            }
          }
      
          circle.show(p5);
          circle.grow(p5);
        }
  }

  render() {
    if (typeof window !== 'undefined') {

        const Sketch = Loadable(() => import('react-p5'));
  
        return <Sketch setup={this.setup} draw={this.draw} />
  
      } else { // if window does not exist
  
        return null;
      }
  }
}
