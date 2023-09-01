const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const numParticles = 100;

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 10 + 5;
    this.speedX = (Math.random() - 0.5) * 5;
    this.speedY = (Math.random() - 0.5) * 5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off the walls
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
