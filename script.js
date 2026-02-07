const canvas = document.getElementById("balls");
// const ctx = canvas.getContext("2d");

class Ball {
  constructor(canvas, x = 100, y = 100, radius = 3) {
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.xSpeed = Math.floor(Math.random() * 10);
    this.ySpeed = Math.floor(Math.random() * 10);
    this.color = "blue";
  }

  circle(x, y, radius, color = "black") {
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = color;
    this.ctx.fill();
  }

  draw() {
    this.circle(this.x, this.y, this.radius, this.color);
  }
}

class BallsGame {
  constructor(balls, canvas) {
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.balls = balls;
  }

  drawBorder() {
    this.ctx.strokeStyle = "grey";
    this.ctx.lineWidth = 3;
    this.ctx.strokeRect(0, 0, this.width, this.height);
  }

  go() {
    this.balls.draw();
  }
}

const ball = new Ball(canvas);
// ball.draw();

const ballsGame = new BallsGame(ball, canvas);
ballsGame.drawBorder();

ballsGame.go();
