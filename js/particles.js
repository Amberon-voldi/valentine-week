/* ============================================
   🌻 Particle System
   Ambient floating particles & effects
   ============================================ */

class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    setTheme(theme) {
        this.particles = [];
        this.theme = theme;
        const count = theme === 'finale' ? 80 : 40;
        for (let i = 0; i < count; i++) {
            this.particles.push(this.createParticle(theme));
        }
    }

    createParticle(theme) {
        const colors = {
            landing: ['#fdd835', '#fff8e1', '#f9a825', '#f48fb1'],
            rose: ['#e74c6f', '#f48fb1', '#fce4ec', '#ff80ab'],
            propose: ['#ce93d8', '#f48fb1', '#e1bee7', '#f8bbd0'],
            chocolate: ['#8d6e63', '#a1887f', '#d7ccc8', '#bcaaa4'],
            teddy: ['#c8a26e', '#d7b98e', '#f0d9b5', '#e6c9a0'],
            promise: ['#64b5f6', '#90caf9', '#bbdefb', '#42a5f5'],
            hug: ['#ff8a65', '#ffab91', '#ffccbc', '#ff7043'],
            kiss: ['#e53935', '#ef5350', '#ef9a9a', '#e57373'],
            finale: ['#fdd835', '#e74c6f', '#ce93d8', '#64b5f6', '#ff8a65', '#ff80ab'],
            hub: ['#fdd835', '#ce93d8', '#64b5f6', '#f48fb1']
        };

        const themeColors = colors[theme] || colors.landing;
        const color = themeColors[Math.floor(Math.random() * themeColors.length)];

        return {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            color: color,
            opacity: Math.random() * 0.5 + 0.1,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.02 + 0.01
        };
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.pulse += p.pulseSpeed;

            if (p.x < -10) p.x = this.canvas.width + 10;
            if (p.x > this.canvas.width + 10) p.x = -10;
            if (p.y < -10) p.y = this.canvas.height + 10;
            if (p.y > this.canvas.height + 10) p.y = -10;

            const currentOpacity = p.opacity + Math.sin(p.pulse) * 0.2;
            const currentSize = p.size + Math.sin(p.pulse) * 0.5;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, Math.max(0.5, currentSize), 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = Math.max(0, Math.min(1, currentOpacity));
            this.ctx.fill();

            // Glow effect
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, currentSize * 3, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = Math.max(0, currentOpacity * 0.1);
            this.ctx.fill();
        });

        this.ctx.globalAlpha = 1;

        // Draw connections for nearby particles
        if (this.theme === 'finale' || this.theme === 'landing') {
            this.ctx.globalAlpha = 0.05;
            for (let i = 0; i < this.particles.length; i++) {
                for (let j = i + 1; j < this.particles.length; j++) {
                    const dx = this.particles[i].x - this.particles[j].x;
                    const dy = this.particles[i].y - this.particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                        this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                        this.ctx.strokeStyle = this.particles[i].color;
                        this.ctx.lineWidth = 0.5;
                        this.ctx.stroke();
                    }
                }
            }
            this.ctx.globalAlpha = 1;
        }

        requestAnimationFrame(() => this.animate());
    }
}

// Effects helper
function createFireworks(x, y, count = 30) {
    const colors = ['#fdd835', '#e74c6f', '#ce93d8', '#64b5f6', '#ff8a65', '#ff80ab', '#fff'];
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework';
        const angle = (i / count) * Math.PI * 2;
        const velocity = 50 + Math.random() * 100;
        const fx = Math.cos(angle) * velocity;
        const fy = Math.sin(angle) * velocity;
        particle.style.cssText = `
            left: ${x}px; top: ${y}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            --fx: ${fx}px; --fy: ${fy}px;
            animation-duration: ${0.5 + Math.random() * 0.8}s;
        `;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1500);
    }
}

function createConfetti(count = 50) {
    const colors = ['#fdd835', '#e74c6f', '#ce93d8', '#64b5f6', '#ff8a65', '#4caf50', '#fff'];
    const shapes = ['square', 'circle'];
    for (let i = 0; i < count; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const left = Math.random() * 100;
        const duration = 2 + Math.random() * 3;
        const delay = Math.random() * 1;
        piece.style.cssText = `
            left: ${left}%;
            background: ${color};
            border-radius: ${shape === 'circle' ? '50%' : '2px'};
            width: ${6 + Math.random() * 8}px;
            height: ${6 + Math.random() * 8}px;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
        `;
        document.body.appendChild(piece);
        setTimeout(() => piece.remove(), (duration + delay) * 1000 + 500);
    }
}

function createHeartBurst(x, y, count = 15) {
    const hearts = ['❤️', '💕', '💖', '💛', '🌻', '✨'];
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'burst-heart';
        const angle = (i / count) * Math.PI * 2;
        const velocity = 80 + Math.random() * 120;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity - 50;
        heart.style.cssText = `
            left: ${x}px; top: ${y}px;
            --tx: ${tx}px; --ty: ${ty}px;
            font-size: ${1.2 + Math.random() * 1.5}rem;
            animation-duration: ${1.5 + Math.random() * 1.5}s;
        `;
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3500);
    }
}
