const canvas = document.getElementById("balls");
// const ctx = canvas.getContext("2d");
const n = 10;

let colors = ["Red", "Orange", "Yellow", "Green","Blue", "Purple"];

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

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  checkCollosion() {
    if (this.x <= 0 || this.x >= this.width) {
      this.xSpeed = -this.xSpeed;
    }
    if (this.y <= 0 || this.y >= this.height) {
      this.ySpeed = -this.ySpeed;
    }
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

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  go() {
    this.clear();
    for (let i = 0; i < n; i++) {
      this.balls[i].draw();
      this.balls[i].move();
      this.balls[i].checkCollosion();
    }
  }

  start() {
    setInterval(this.go.bind(this), 30);
  }
}

const balls = [];
for (let i = 0; i < n; i++) {
  balls[i] = new Ball(canvas);
}

// ball.draw();

const ballsGame = new BallsGame(balls, canvas);
ballsGame.drawBorder();

ballsGame.start();
