/* ============================================
   🌻 GAME ENGINES
   One unique game per day of Valentine's Week
   ============================================ */

const Games = {

    // ===== DAY 1: ROSE DAY — Catch Falling Roses =====
    roseCatch: {
        init(container, onComplete) {
            this.score = 0;
            this.goal = 12;
            this.active = true;
            this.container = container;
            this.onComplete = onComplete;
            this.spawnInterval = null;

            container.innerHTML = `
                <div class="game-score">🌹 <span id="roseScore">0</span> / ${this.goal}</div>
                <p class="game-instruction">Catch the falling roses! Click them before they fall! 🌹</p>
                <div class="rose-game-area" id="roseArea">
                    <div class="rose-basket">🧺</div>
                </div>
            `;

            this.area = document.getElementById('roseArea');
            this.scoreEl = document.getElementById('roseScore');
            this.startSpawning();
        },

        startSpawning() {
            const spawn = () => {
                if (!this.active) return;
                this.spawnRose();
                const delay = Math.max(400, 1200 - this.score * 50);
                this.spawnInterval = setTimeout(spawn, delay);
            };
            spawn();
        },

        spawnRose() {
            const rose = document.createElement('div');
            rose.className = 'falling-rose';
            const items = ['🌹', '🌹', '🌹', '🌷', '🌺', '🥚', '💋', '🌻'];
            rose.textContent = items[Math.floor(Math.random() * items.length)];
            const isRose = true; // all items count
            rose.dataset.isRose = isRose;

            const left = 10 + Math.random() * 80;
            rose.style.left = left + '%';
            const duration = 2.5 + Math.random() * 2;
            rose.style.animationDuration = duration + 's';
            rose.style.animationDelay = '0s';

            rose.addEventListener('click', (e) => {
                if (rose.classList.contains('caught')) return;
                rose.classList.add('caught');

                this.score++;
                this.scoreEl.textContent = this.score;
                createFireworks(e.clientX, e.clientY, 8);

                if (this.score >= this.goal) {
                    this.active = false;
                    clearTimeout(this.spawnInterval);
                    setTimeout(() => this.onComplete(), 600);
                }
            });

            this.area.appendChild(rose);
            setTimeout(() => {
                if (rose.parentNode) rose.remove();
            }, duration * 1000 + 500);
        },

        destroy() {
            this.active = false;
            clearTimeout(this.spawnInterval);
        }
    },

    // ===== DAY 2: PROPOSE DAY — Love Letter Word Puzzle =====
    wordPuzzle: {
        init(container, onComplete) {
            this.onComplete = onComplete;
            const sentence = ["Somya,", "I'm", "obsessed", "with", "you", "my", "cute", "little", "sunflower"];
            this.correctOrder = [...sentence];
            this.currentIndex = 0;
            this.slots = [];

            const shuffled = [...sentence].sort(() => Math.random() - 0.5);

            container.innerHTML = `
                <p class="game-instruction">Arrange the words to complete the love letter 💌</p>
                <div class="puzzle-container">
                    <div class="puzzle-sentence" id="puzzleSentence">
                        ${sentence.map((_, i) => `<div class="puzzle-word-slot" data-index="${i}"></div>`).join('')}
                    </div>
                    <div class="puzzle-words" id="puzzleWords">
                        ${shuffled.map(w => `<button class="puzzle-word-btn" data-word="${w}">${w}</button>`).join('')}
                    </div>
                    <button class="puzzle-reset" id="puzzleReset">🔄 Start Over</button>
                </div>
            `;

            this.slotsContainer = document.getElementById('puzzleSentence');
            this.slots = this.slotsContainer.querySelectorAll('.puzzle-word-slot');
            const wordBtns = document.querySelectorAll('.puzzle-word-btn');

            wordBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if (btn.classList.contains('used')) return;
                    const word = btn.dataset.word;

                    if (word === this.correctOrder[this.currentIndex]) {
                        btn.classList.add('used');
                        this.slots[this.currentIndex].textContent = word;
                        this.slots[this.currentIndex].classList.add('filled');
                        this.currentIndex++;

                        if (this.currentIndex >= this.correctOrder.length) {
                            createConfetti(30);
                            setTimeout(() => this.onComplete(), 1000);
                        }
                    } else {
                        btn.classList.add('wrong');
                        setTimeout(() => btn.classList.remove('wrong'), 500);
                    }
                });
            });

            document.getElementById('puzzleReset').addEventListener('click', () => {
                this.currentIndex = 0;
                this.slots.forEach(s => { s.textContent = ''; s.classList.remove('filled'); });
                wordBtns.forEach(b => { b.classList.remove('used', 'wrong'); });
            });
        },
        destroy() {}
    },

    // ===== DAY 3: CHOCOLATE DAY — Memory Match =====
    memoryMatch: {
        init(container, onComplete) {
            this.onComplete = onComplete;
            this.flippedCards = [];
            this.matchedPairs = 0;
            this.totalPairs = 6;
            this.locked = false;

            const emojis = ['🍫', '🥚', '💋', '🌻', '🍰', '🧁'];
            let cards = [...emojis, ...emojis];
            cards = cards.sort(() => Math.random() - 0.5);

            container.innerHTML = `
                <div class="game-score">Matches: <span id="matchScore">0</span> / ${this.totalPairs}</div>
                <p class="game-instruction">Find all the matching pairs! Kinder Joys & lip balms included 😏</p>
                <div class="memory-grid">
                    ${cards.map((emoji, i) => `
                        <div class="memory-card" data-emoji="${emoji}" data-index="${i}">
                            <div class="memory-card-face memory-card-front"></div>
                            <div class="memory-card-face memory-card-back">${emoji}</div>
                        </div>
                    `).join('')}
                </div>
            `;

            this.scoreEl = document.getElementById('matchScore');
            document.querySelectorAll('.memory-card').forEach(card => {
                card.addEventListener('click', () => this.flipCard(card));
            });
        },

        flipCard(card) {
            if (this.locked || card.classList.contains('flipped') || card.classList.contains('matched')) return;

            card.classList.add('flipped');
            this.flippedCards.push(card);

            if (this.flippedCards.length === 2) {
                this.locked = true;
                const [a, b] = this.flippedCards;

                if (a.dataset.emoji === b.dataset.emoji) {
                    a.classList.add('matched');
                    b.classList.add('matched');
                    this.matchedPairs++;
                    this.scoreEl.textContent = this.matchedPairs;
                    this.flippedCards = [];
                    this.locked = false;

                    const rect = a.getBoundingClientRect();
                    createFireworks(rect.left + rect.width / 2, rect.top + rect.height / 2, 6);

                    if (this.matchedPairs >= this.totalPairs) {
                        createConfetti(40);
                        setTimeout(() => this.onComplete(), 800);
                    }
                } else {
                    setTimeout(() => {
                        a.classList.remove('flipped');
                        b.classList.remove('flipped');
                        this.flippedCards = [];
                        this.locked = false;
                    }, 800);
                }
            }
        },
        destroy() {}
    },

    // ===== DAY 4: TEDDY DAY — Build a Teddy =====
    buildTeddy: {
        init(container, onComplete) {
            this.onComplete = onComplete;
            this.partsPlaced = 0;

            const parts = [
                { name: 'Body', emoji: '🟤', style: 'left:50%;top:55%;transform:translate(-50%,-50%);font-size:5rem;' },
                { name: 'Head', emoji: '🧸', style: 'left:50%;top:22%;transform:translate(-50%,-50%);font-size:4rem;' },
                { name: 'Left Ear', emoji: '🔵', style: 'left:28%;top:10%;transform:translate(-50%,-50%);font-size:1.5rem;filter:hue-rotate(180deg) brightness(1.5);' },
                { name: 'Right Ear', emoji: '🔵', style: 'left:72%;top:10%;transform:translate(-50%,-50%);font-size:1.5rem;filter:hue-rotate(180deg) brightness(1.5);' },
                { name: 'Heart', emoji: '❤️', style: 'left:50%;top:55%;transform:translate(-50%,-50%);font-size:2rem;z-index:5;' },
                { name: 'Bow', emoji: '🎀', style: 'left:50%;top:38%;transform:translate(-50%,-50%);font-size:1.8rem;z-index:5;' },
                { name: 'Kinder Joy', emoji: '🥚', style: 'left:30%;top:70%;transform:translate(-50%,-50%);font-size:1.5rem;z-index:5;' },
                { name: 'Lip Balm', emoji: '💋', style: 'left:70%;top:70%;transform:translate(-50%,-50%);font-size:1.5rem;z-index:5;' },
            ];

            const shuffledParts = [...parts].sort(() => Math.random() - 0.5);

            container.innerHTML = `
                <div class="game-score">Parts: <span id="teddyScore">0</span> / ${parts.length}</div>
                <p class="game-instruction">Build a teddy bear for Somya! Tap the parts in any order 🧸</p>
                <div class="teddy-builder">
                    <div class="teddy-canvas" id="teddyCanvas">
                        ${parts.map((p, i) => `
                            <div class="teddy-part" id="teddyPart${i}" style="${p.style}">${p.emoji}</div>
                        `).join('')}
                    </div>
                    <div class="teddy-parts-tray">
                        ${shuffledParts.map((p, i) => {
                            const origIndex = parts.findIndex(op => op.name === p.name);
                            return `<button class="teddy-part-btn" data-part="${origIndex}">
                                <span>${p.emoji}</span> ${p.name}
                            </button>`;
                        }).join('')}
                    </div>
                </div>
            `;

            this.scoreEl = document.getElementById('teddyScore');
            this.totalParts = parts.length;

            document.querySelectorAll('.teddy-part-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    if (btn.classList.contains('used')) return;
                    btn.classList.add('used');
                    const partIndex = btn.dataset.part;
                    const part = document.getElementById(`teddyPart${partIndex}`);
                    part.classList.add('placed');
                    this.partsPlaced++;
                    this.scoreEl.textContent = this.partsPlaced;

                    if (this.partsPlaced >= this.totalParts) {
                        createConfetti(40);
                        createHeartBurst(window.innerWidth / 2, window.innerHeight / 2, 10);
                        setTimeout(() => this.onComplete(), 1000);
                    }
                });
            });
        },
        destroy() {}
    },

    // ===== DAY 5: PROMISE DAY — Pop Promise Bubbles =====
    promiseBubbles: {
        init(container, onComplete) {
            this.onComplete = onComplete;
            this.popped = 0;
            this.promiseOverlay = null;

            const promises = [
                "I promise to always keep Kinder Joys stocked for you 🥚",
                "I promise to kiss the lip balm right off your lips 💋",
                "I promise to close this distance, whatever it takes 🌍",
                "I promise late-night calls... even the naughty ones 📱🔥",
                "I promise to go down on you until you forget your name 👅",
                "I promise to make you scream so loud neighbors complain 🔥",
                "I promise to let you suck me the way you love to 🥵",
                "I promise my hoodie, my body, my everything is yours 😈",
                "I promise 3 days in bed when we finally meet 🛏️",
                "I promise to worship every inch of your body 💋🔥"
            ];

            this.total = promises.length;

            container.innerHTML = `
                <div class="game-score">Promises: <span id="promiseScore">0</span> / ${this.total}</div>
                <p class="game-instruction">Pop the bubbles to reveal my promises to you 💫</p>
                <div class="bubbles-area" id="bubblesArea">
                    ${promises.map((p, i) => {
                        const x = 10 + Math.random() * 70;
                        const y = 10 + Math.random() * 70;
                        const delay = i * 0.3;
                        return `<div class="promise-bubble" data-promise="${p}" 
                            style="left:${x}%;top:${y}%;animation-delay:${delay}s;">
                            ✨
                        </div>`;
                    }).join('')}
                </div>
            `;

            this.scoreEl = document.getElementById('promiseScore');

            document.querySelectorAll('.promise-bubble').forEach(bubble => {
                bubble.addEventListener('click', () => {
                    if (bubble.classList.contains('popped')) return;
                    bubble.classList.add('popped');

                    const promise = bubble.dataset.promise;
                    this.showPromise(promise);
                    this.popped++;
                    this.scoreEl.textContent = this.popped;
                });
            });
        },

        showPromise(text) {
            if (this.promiseOverlay) this.promiseOverlay.remove();
            const overlay = document.createElement('div');
            overlay.className = 'promise-reveal';
            overlay.innerHTML = `
                <p>"${text}"</p>
                <button onclick="this.parentElement.remove()">
                    ${this.popped + 1 >= this.total ? '💖 See Your Message' : '✨ Continue'}
                </button>
            `;
            document.body.appendChild(overlay);
            this.promiseOverlay = overlay;

            overlay.querySelector('button').addEventListener('click', () => {
                overlay.remove();
                if (this.popped >= this.total) {
                    setTimeout(() => this.onComplete(), 300);
                }
            });
        },
        destroy() {
            if (this.promiseOverlay) this.promiseOverlay.remove();
        }
    },

    // ===== DAY 6: HUG DAY — Drag Together =====
    hugDrag: {
        init(container, onComplete) {
            this.onComplete = onComplete;
            this.hugged = false;

            container.innerHTML = `
                <p class="game-instruction">We're miles apart... drag us together! Close the distance! 🤗</p>
                <div class="hug-area" id="hugArea">
                    <div class="hug-zone" id="hugZone">
                        <span style="opacity:0.3;font-size:1.5rem">💕</span>
                    </div>
                    <div class="hug-character you-char" id="hugYou">🧑</div>
                    <div class="hug-character her-char" id="hugHer">👩</div>
                    <div class="hug-result" id="hugResult">🫂💕🔥</div>
                </div>
            `;

            const area = document.getElementById('hugArea');
            const you = document.getElementById('hugYou');
            const her = document.getElementById('hugHer');
            const zone = document.getElementById('hugZone');
            const result = document.getElementById('hugResult');

            let dragging = null;
            let offsetX, offsetY;
            let youInZone = false, herInZone = false;

            const startDrag = (e, el) => {
                if (this.hugged) return;
                dragging = el;
                const rect = el.getBoundingClientRect();
                const areaRect = area.getBoundingClientRect();
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                offsetX = clientX - rect.left;
                offsetY = clientY - rect.top;
                el.style.zIndex = '15';
                el.style.transition = 'none';
            };

            const moveDrag = (e) => {
                if (!dragging || this.hugged) return;
                e.preventDefault();
                const areaRect = area.getBoundingClientRect();
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                const x = clientX - areaRect.left - offsetX;
                const y = clientY - areaRect.top - offsetY;
                dragging.style.left = x + 'px';
                dragging.style.top = y + 'px';
                dragging.style.transform = 'none';
                dragging.style.right = 'auto';

                checkZone();
            };

            const endDrag = () => {
                if (dragging) {
                    dragging.style.zIndex = '10';
                }
                dragging = null;
            };

            const checkZone = () => {
                const zoneRect = zone.getBoundingClientRect();
                const youRect = you.getBoundingClientRect();
                const herRect = her.getBoundingClientRect();

                const youCenter = { x: youRect.left + youRect.width / 2, y: youRect.top + youRect.height / 2 };
                const herCenter = { x: herRect.left + herRect.width / 2, y: herRect.top + herRect.height / 2 };
                const zoneCenter = { x: zoneRect.left + zoneRect.width / 2, y: zoneRect.top + zoneRect.height / 2 };

                const youDist = Math.sqrt((youCenter.x - zoneCenter.x) ** 2 + (youCenter.y - zoneCenter.y) ** 2);
                const herDist = Math.sqrt((herCenter.x - zoneCenter.x) ** 2 + (herCenter.y - zoneCenter.y) ** 2);

                if (youDist < 80 && herDist < 80 && !this.hugged) {
                    this.hugged = true;
                    you.style.display = 'none';
                    her.style.display = 'none';
                    zone.style.display = 'none';
                    result.classList.add('show');
                    createHeartBurst(zoneCenter.x, zoneCenter.y, 20);
                    createConfetti(30);
                    setTimeout(() => this.onComplete(), 1500);
                }
            };

            // Mouse events
            you.addEventListener('mousedown', (e) => startDrag(e, you));
            her.addEventListener('mousedown', (e) => startDrag(e, her));
            document.addEventListener('mousemove', moveDrag);
            document.addEventListener('mouseup', endDrag);

            // Touch events
            you.addEventListener('touchstart', (e) => startDrag(e, you), { passive: false });
            her.addEventListener('touchstart', (e) => startDrag(e, her), { passive: false });
            document.addEventListener('touchmove', moveDrag, { passive: false });
            document.addEventListener('touchend', endDrag);

            this._cleanup = () => {
                document.removeEventListener('mousemove', moveDrag);
                document.removeEventListener('mouseup', endDrag);
                document.removeEventListener('touchmove', moveDrag);
                document.removeEventListener('touchend', endDrag);
            };
        },
        destroy() {
            if (this._cleanup) this._cleanup();
        }
    },

    // ===== DAY 7: KISS DAY — Send Flying Kisses =====
    flyingKisses: {
        init(container, onComplete) {
            this.onComplete = onComplete;
            this.score = 0;
            this.goal = 10;
            this.active = true;
            this.spawnInterval = null;

            container.innerHTML = `
                <div class="game-score">💋 <span id="kissScore">0</span> / ${this.goal}</div>
                <p class="game-instruction">Show me where you want kisses... catch them all 😏💋</p>
                <div class="kiss-game-area" id="kissArea">
                    <div class="kiss-sender">🥰</div>
                </div>
            `;

            this.area = document.getElementById('kissArea');
            this.scoreEl = document.getElementById('kissScore');
            this.startSpawning();
        },

        startSpawning() {
            const spawn = () => {
                if (!this.active) return;
                this.spawnTarget();
                this.spawnInterval = setTimeout(spawn, 800 + Math.random() * 600);
            };
            spawn();
        },

        spawnTarget() {
            const target = document.createElement('div');
            target.className = 'kiss-target';
            const hearts = ['💋', '👄', '💕', '🔥', '😘', '😈', '💋', '👅'];
            target.textContent = hearts[Math.floor(Math.random() * hearts.length)];

            const left = 10 + Math.random() * 75;
            const top = 10 + Math.random() * 60;
            target.style.left = left + '%';
            target.style.top = top + '%';
            target.style.animationDelay = Math.random() * 2 + 's';

            target.addEventListener('click', (e) => {
                if (target.classList.contains('kissed')) return;
                target.classList.add('kissed');
                this.score++;
                this.scoreEl.textContent = this.score;

                // Flying kiss effect
                const kiss = document.createElement('div');
                kiss.className = 'flying-kiss';
                kiss.textContent = '💋';
                kiss.style.left = e.clientX - this.area.getBoundingClientRect().left + 'px';
                kiss.style.top = e.clientY - this.area.getBoundingClientRect().top + 'px';
                this.area.appendChild(kiss);
                setTimeout(() => kiss.remove(), 1000);

                createFireworks(e.clientX, e.clientY, 5);

                if (this.score >= this.goal) {
                    this.active = false;
                    clearTimeout(this.spawnInterval);
                    createConfetti(50);
                    setTimeout(() => this.onComplete(), 800);
                }
            });

            this.area.appendChild(target);
            setTimeout(() => {
                if (target.parentNode && !target.classList.contains('kissed')) {
                    target.remove();
                }
            }, 4000);
        },
        destroy() {
            this.active = false;
            clearTimeout(this.spawnInterval);
        }
    },

    // ===== DAY 8: VALENTINE'S DAY — Unwrap the Gift =====
    valentineFinale: {
        init(container, onComplete) {
            this.onComplete = onComplete;
            this.taps = 0;
            this.goal = 20;

            container.innerHTML = `
                <div class="finale-area">
                    <p class="game-instruction">Unwrap your Valentine's gift! Keep tapping! 🎁</p>
                    <div class="finale-gift" id="finaleGift">🎁</div>
                    <div class="finale-progress">
                        <div class="finale-progress-bar" id="finaleBar"></div>
                    </div>
                    <p class="finale-tap-count">Tap <span id="finaleTaps">${this.goal}</span> more times!</p>
                </div>
            `;

            const gift = document.getElementById('finaleGift');
            const bar = document.getElementById('finaleBar');
            const tapsEl = document.getElementById('finaleTaps');

            gift.addEventListener('click', (e) => {
                this.taps++;
                const remaining = Math.max(0, this.goal - this.taps);
                tapsEl.textContent = remaining;
                bar.style.width = (this.taps / this.goal * 100) + '%';

                createFireworks(e.clientX, e.clientY, 4);

                // Change gift appearance as unwrapping
                if (this.taps > this.goal * 0.25) gift.textContent = '🎁✨';
                if (this.taps > this.goal * 0.5) gift.textContent = '🥚💋✨';
                if (this.taps > this.goal * 0.75) gift.textContent = '💝🔥✨✨';

                if (this.taps >= this.goal) {
                    gift.textContent = '💖🌻💖';
                    gift.style.animation = 'none';
                    gift.style.cursor = 'default';

                    // Epic finale
                    createConfetti(100);
                    setTimeout(() => createHeartBurst(window.innerWidth / 2, window.innerHeight / 2, 25), 200);
                    setTimeout(() => createConfetti(60), 500);
                    setTimeout(() => createFireworks(window.innerWidth / 2, window.innerHeight / 3, 40), 300);
                    setTimeout(() => this.onComplete(), 1500);
                }
            });
        },
        destroy() {}
    }
};
