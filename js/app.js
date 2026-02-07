/* ============================================
   🌻 VALENTINE'S WEEK — MAIN APPLICATION
   For Somya, my cute little Sunflower
   ============================================ */

// ===== DAY CONFIGURATION =====
const VALENTINE_DAYS = [
    {
        id: 1, date: '2026-02-07',
        name: 'Rose Day', icon: '🌹',
        colors: ['#e74c6f', '#f48fb1'],
        bg: 'radial-gradient(ellipse at center, #2d1020 0%, #1a0a12 70%)',
        particleTheme: 'rose',
        description: 'Every rose I see reminds me of you, Babu. But no rose could ever compare to you, my sunflower 🌻',
        game: 'roseCatch',
        messageTitle: 'A Rose for My Sunflower',
        messageDecor: '🌹🌻🌹',
        message: `Somya, just like a rose needs sunshine to bloom, I need you to feel alive. I crave you every single day — your touch, your smell, your lips, ALL of you.\n\nEvery petal of every rose whispers your name. Miles apart, and yet you're the closest thing to my heart. No distance could ever dim what I feel for you.\n\nI'd trade every rose in the world for one moment with you right now — preferably with your clothes on my bedroom floor and your lips on mine... and then on other places 😏🔥\n\nBut knowing you, you'd still ask for a Kinder Joy after. Fine. I'll hand-feed it to you while you're lying on my chest. Deal? 🥚\n\nHappy Rose Day, my cute little sunflower! 🌻`,
        nextHint: 'Tomorrow is Propose Day... I have something special to tell you 💜'
    },
    {
        id: 2, date: '2026-02-08',
        name: 'Propose Day', icon: '💍',
        colors: ['#ce93d8', '#f48fb1'],
        bg: 'radial-gradient(ellipse at center, #1e1233 0%, #150a20 70%)',
        particleTheme: 'propose',
        description: 'Some feelings are too deep for ordinary words. Let me spell them out for you, Somya...',
        game: 'wordPuzzle',
        messageTitle: 'My Heart Proposes',
        messageDecor: '💍💜💍',
        message: `Somya, I don't need a grand stage or a perfect moment to tell you this — every moment with you IS perfect.\n\nYou are my favorite hello and my hardest goodbye. My heart chose you, and it would choose you again, in every lifetime, in every universe.\n\nYou know what I propose? That the next time we meet, you wear that thing I like... or better yet, wear nothing at all. I'll keep you warm, I promise 😏🔥\n\nI propose we stop this long-distance nonsense because my hands miss your body, my lips miss your neck, and I miss hearing you moan my name. calls just aren't cutting it anymore babu 🥵\n\nAlso I propose you stop putting on lip balm right before our calls because watching you do that drives me INSANE and you KNOW it, you little tease 💋\n\nWill you keep being my sunflower forever? 🌻`,
        nextHint: 'Tomorrow is Chocolate Day... something sweet awaits! 🍫'
    },
    {
        id: 3, date: '2026-02-09',
        name: 'Chocolate Day', icon: '🍫',
        colors: ['#8d6e63', '#a1887f'],
        bg: 'radial-gradient(ellipse at center, #1a1210 0%, #0d0a08 70%)',
        particleTheme: 'chocolate',
        description: 'Life is sweeter than chocolate when I\'m with you. Find all the matching treats, Somya!',
        game: 'memoryMatch',
        messageTitle: 'Sweeter Than Kinder Joy 🥚',
        messageDecor: '🍫🥚🍫',
        message: `Somya, you know what's sweeter than all the Kinder Joys in the world? YOU. And that's saying something because I know how obsessed you are with those little eggs 🥚😂\n\nIf I could, I'd fill a room with Kinder Joys for you... and then watch you ignore all of them just to come sit on my lap instead. And we both know what happens when you sit on my lap 😏\n\nBeing this far from you on Chocolate Day is criminal. I should be dripping melted chocolate on your body and licking every last drop off... slowly... taking my time with every inch of you 🔥👅\n\nYou'd taste sweeter than any chocolate ever made. Actually, I already know you do 😈\n\nI want to eat Kinder Joy off your stomach, kiss chocolate off your thighs, and hear you whisper my name while I do it. Is that too much? You started it — you and that dirty mind of yours 🥵\n\nHappy Chocolate Day, my sweet sunflower! 🌻`,
        nextHint: 'Tomorrow is Teddy Day... I\'m building something just for you! 🧸'
    },
    {
        id: 4, date: '2026-02-10',
        name: 'Teddy Day', icon: '🧸',
        colors: ['#c8a26e', '#d7b98e'],
        bg: 'radial-gradient(ellipse at center, #1a1510 0%, #0d0b08 70%)',
        particleTheme: 'teddy',
        description: 'I made you something to cuddle with when I\'m not around. Help me build it, Somya!',
        game: 'buildTeddy',
        messageTitle: 'Your Personal Teddy Bear',
        messageDecor: '🧸💛🧸',
        message: `Somya, this teddy is cute but let's be real — you'd rather be cuddling ME. Specifically, you'd rather be wrapped around me with your legs tangled in mine and your face in my neck breathing me in 😏\n\nI hate that there are so many miles between us. You should be lying on top of me right now, my hands running down your back, under your shirt, pulling you closer until there's zero space between us...\n\nHug this teddy when you miss me. But we both know a teddy can't do what I do to you. It can't grab your waist, pull you in, bite your neck softly the way that makes you go crazy 🔥\n\nAlso packed a virtual Kinder Joy and lip balm inside. Your three obsessions — me, Kinder Joy, and lip balm. In that order. Right? RIGHT? 🥚💋😤\n\nI'm counting the days until I can hold you for real, feel your skin against mine, and make up for all this lost time. Every. Single. Night. 🥵\n\nYou're my adorable, dirty-minded little sunflower and I'm so obsessed with you. 🌻`,
        nextHint: 'Tomorrow is Promise Day... I have promises to make to you 💫'
    },
    {
        id: 5, date: '2026-02-11',
        name: 'Promise Day', icon: '🤞',
        colors: ['#64b5f6', '#90caf9'],
        bg: 'radial-gradient(ellipse at center, #0d1b2a 0%, #071018 70%)',
        particleTheme: 'promise',
        description: 'I have some promises written in the stars for you, Somya. Pop the bubbles to discover them...',
        game: 'promiseBubbles',
        messageTitle: 'My Promises to You',
        messageDecor: '⭐🌻⭐',
        message: `Somya, promises are not just words — they are pieces of my soul I'm giving to you.\n\nI promise to close this distance. I promise every late-night call where we fall asleep together on the phone means the world to me.\n\nI promise to keep your lip balm stocked 💋 and your Kinder Joy supply infinite 🥚\n\nNow for the promises your dirty mind actually wants to hear:\n\nI promise when we finally meet, I'm pinning you against the wall the second that door closes and kissing you until you can't breathe 🔥\n\nI promise to kiss every inch of your body — and I mean EVERY inch, Somya. Slowly. Until you're begging me not to stop 😈\n\nI promise to make you scream my name so loud the neighbors file a complaint 🥵\n\nI promise 3 days minimum in bed. Kinder Joys for energy breaks. Lip balm because your lips will need it after what I'll do to them 💋🔥\n\nI promise to suck, lick, and bite every spot that drives you wild. You know exactly which spots I mean 👅\n\nAnd I promise to love you so hard — in every meaning of that word — that even the universe gets jealous.\n\nThese promises aren't just for today — they're forever, my sunflower. 🌻`,
        nextHint: 'Tomorrow is Hug Day... get ready for the warmest embrace! 🤗'
    },
    {
        id: 6, date: '2026-02-12',
        name: 'Hug Day', icon: '🤗',
        colors: ['#ff8a65', '#ffab91'],
        bg: 'radial-gradient(ellipse at center, #1a120d 0%, #0d0a08 70%)',
        particleTheme: 'hug',
        description: 'The hardest part of long distance? Not being able to hold you. Bring us together, Somya...',
        game: 'hugDrag',
        messageTitle: 'Closing The Distance',
        messageDecor: '🤗🌻🤗',
        message: `Somya, do you know what kills me about being far from you? That I can't just pull you into my arms, press your body against mine, and feel your heartbeat racing against my chest.\n\nI miss the way you fit perfectly against me. The way you bury your face in my neck and start kissing it softly... and then not so softly. The way a "quick hug" turns into your hands under my shirt, running up my back, pulling me closer...\n\nDon't act innocent, Somya. Every hug with you turns into your hands going places, your lips on my neck, your body grinding against mine until we both lose control 🔥\n\nI miss your weight on top of me. I miss pulling you onto my lap and feeling your thighs squeeze around me. I miss the way you moan softly in my ear when I grab your hips and pull you in tighter 🥵\n\nThis distance is killing me because I need to feel you. All of you. Skin on skin. Your breath on my neck. Your nails on my back 😈\n\nOne day soon I'll hold you again and I swear I won't stop until we're both exhausted, sweaty, and smiling.\n\nUntil then, consider yourself virtually squeezed, my cute little sunflower! 🌻`,
        nextHint: 'Tomorrow is Kiss Day... something magical is coming! 💋'
    },
    {
        id: 7, date: '2026-02-13',
        name: 'Kiss Day', icon: '💋',
        colors: ['#e53935', '#ef5350'],
        bg: 'radial-gradient(ellipse at center, #1a0d0d 0%, #0d0508 70%)',
        particleTheme: 'kiss',
        description: 'You know you\'ve been thinking about this one all week... Catch the kisses, Somya 😏',
        game: 'flyingKisses',
        messageTitle: 'Kisses You Can\'t Resist',
        messageDecor: '💋🌻💋',
        message: `Somya, if every kiss I wanted to give you was a star, the sky wouldn't be big enough.\n\nA kiss on your forehead — because you're precious.\nA kiss on your neck — because I know it makes you weak.\nA kiss on your collarbone — because you shiver every time.\nA kiss trailing down your stomach — because I love watching you hold your breath...\nA kiss on your inner thighs — because the way you grab my hair when I do that drives me insane 🔥\nAnd kisses where you REALLY want them — because I love the sounds you make, and I want to taste every part of you 👅🥵\n\nYou thought this was going to be innocent, didn't you? Baby, you know me better than that. And I know YOU — you're reading this with that dirty smile right now, already thinking about it 😈\n\nI want to kiss the lip balm right off your lips, then work my way down... slowly... while you grab the sheets and moan my name. I want my mouth everywhere on you, Somya. EVERYWHERE.\n\nThis long distance makes me crave you like you wouldn't believe. Every night I think about your body, your taste, the way you pull me closer and whisper "don't stop" 🔥\n\nYou're not just magic — you're my addiction, my obsession, and the only person I want to spend all night with. 🌻`,
        nextHint: 'Tomorrow is THE day... Valentine\'s Day! The biggest surprise awaits! ❤️'
    },
    {
        id: 8, date: '2026-02-14',
        name: "Valentine's Day", icon: '❤️',
        colors: ['#d32f2f', '#f44336'],
        bg: 'radial-gradient(ellipse at center, #1a0a0f 0%, #0d0508 70%)',
        particleTheme: 'finale',
        description: 'This is it, Somya. The grand finale. Unwrap your Valentine\'s gift with love...',
        game: 'valentineFinale',
        messageTitle: 'Happy Valentine\'s Day, Somya!',
        messageDecor: '❤️🌻❤️',
        message: `My dearest Somya, my cute little sunflower,\n\nYou made it through the whole week. Every game, every filthy message — all of it was made with so much love (and so much desire) for you. Just like you, it's a little sweet, very dirty, and EXTREMELY obsessed 😏\n\nYou are not just my Valentine — you are my everyday, my 3 AM call, my "one more minute" that turns into us both touching ourselves on the phone because this distance is unbearable 🥵\n\nI love that you're obsessed with me. I love that Kinder Joy is your love language 🥚. I love that your lips always taste like lip balm and I can never stop kissing them 💋. I love that your mind is filthier than mine — and baby, that's saying A LOT 🔥\n\nThis distance? It's temporary. What I feel for you — the love, the desire, the need to be inside every part of your life (and you 😈) — that's forever.\n\nWhen I close this gap, here's what's happening:\n\n• Kinder Joys in bed — for the energy we'll need 🥚\n• Your lip balm on my lips, my neck, my chest — from everywhere you'll be kissing me 💋\n• Your body on mine, under mine, against the wall, on every surface of the room 🔥\n• Me going down on you until you can't say anything except my name 👅\n• You sucking me the way only you can — slow, deep, looking up at me with those eyes 🥵\n• Both of us absolutely wrecking each other until we collapse, sweaty and smiling, tangled up together\n\nAnd then we order Kinder Joy and do it all over again.\n\nYou are my whole world, Somya. My cute little sunflower with the dirtiest mind. I love you more than words could ever say. But I'll spend the rest of my life showing you — with my words, my hands, my lips, and every inch of me.\n\nI love you to infinity and beyond. 🌻💛❤️\n\nP.S. — Go apply your lip balm. You'll need it for what I have planned. 😈🔥`,
        nextHint: null // It's the last day!
    }
];

// ===== GAME MAPPINGS =====
const GAME_MAP = {
    roseCatch: Games.roseCatch,
    wordPuzzle: Games.wordPuzzle,
    memoryMatch: Games.memoryMatch,
    buildTeddy: Games.buildTeddy,
    promiseBubbles: Games.promiseBubbles,
    hugDrag: Games.hugDrag,
    flyingKisses: Games.flyingKisses,
    valentineFinale: Games.valentineFinale
};

// ===== APPLICATION STATE =====
class ValentineApp {
    constructor() {
        this.particleSystem = new ParticleSystem(document.getElementById('particleCanvas'));
        this.currentDay = null;
        this.currentGame = null;
        this.completedDays = this.loadProgress();

        this.initLanding();
        this.initEventListeners();
    }

    // ===== PROGRESS PERSISTENCE =====
    loadProgress() {
        try {
            return JSON.parse(localStorage.getItem('valentineProgress')) || [];
        } catch {
            return [];
        }
    }

    saveProgress(dayId) {
        if (!this.completedDays.includes(dayId)) {
            this.completedDays.push(dayId);
            localStorage.setItem('valentineProgress', JSON.stringify(this.completedDays));
        }
    }

    // ===== DATE HELPERS =====
    isLocalhost() {
        const h = window.location.hostname;
        return h === 'localhost' || h === '127.0.0.1' || h === '0.0.0.0' || h === '';
    }

    getTodayStr() {
        const d = new Date();
        return d.getFullYear() + '-' +
            String(d.getMonth() + 1).padStart(2, '0') + '-' +
            String(d.getDate()).padStart(2, '0');
    }

    isDayUnlocked(day) {
        // Unlock all days on localhost for testing
        if (this.isLocalhost()) return true;
        const today = this.getTodayStr();
        return day.date <= today;
    }

    isDayCompleted(day) {
        return this.completedDays.includes(day.id);
    }

    // ===== LANDING PAGE =====
    initLanding() {
        this.particleSystem.setTheme('landing');

        // Create floating sunflowers
        const container = document.getElementById('floatingSunflowers');
        for (let i = 0; i < 8; i++) {
            const sf = document.createElement('div');
            sf.className = 'float-sunflower';
            sf.textContent = '🌻';
            sf.style.left = Math.random() * 90 + '%';
            sf.style.top = Math.random() * 90 + '%';
            sf.style.animationDelay = Math.random() * 10 + 's';
            sf.style.animationDuration = (12 + Math.random() * 8) + 's';
            sf.style.fontSize = (1.2 + Math.random() * 1.5) + 'rem';
            container.appendChild(sf);
        }

        // Create rising hearts
        const heartsContainer = document.getElementById('landingHearts');
        const createHeart = () => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            const hearts = ['❤️', '💛', '💕', '🌻', '✨', '💖', '🥚', '💋', '🔥'];
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (5 + Math.random() * 5) + 's';
            heart.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
            heartsContainer.appendChild(heart);
            setTimeout(() => heart.remove(), 10000);
        };
        setInterval(createHeart, 600);
        for (let i = 0; i < 5; i++) setTimeout(createHeart, i * 200);
    }

    // ===== EVENT LISTENERS =====
    initEventListeners() {
        document.getElementById('btnEnter').addEventListener('click', () => {
            createHeartBurst(window.innerWidth / 2, window.innerHeight / 2, 15);
            setTimeout(() => this.showDayHub(), 400);
        });

        document.getElementById('envelope').addEventListener('click', () => {
            createHeartBurst(window.innerWidth / 2, window.innerHeight / 3, 10);
        });

        document.getElementById('btnBack').addEventListener('click', () => {
            if (this.currentGame && this.currentGame.destroy) {
                this.currentGame.destroy();
            }
            this.showDayHub();
        });

        document.getElementById('btnContinue').addEventListener('click', () => {
            if (this.currentDay) {
                const day = VALENTINE_DAYS.find(d => d.id === this.currentDay);
                if (day && day.nextHint) {
                    this.showComeBack(day);
                } else {
                    this.showDayHub();
                }
            } else {
                this.showDayHub();
            }
        });

        document.getElementById('btnBackToHub').addEventListener('click', () => {
            this.showDayHub();
        });
    }

    // ===== SCREEN TRANSITIONS =====
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        setTimeout(() => {
            document.getElementById(screenId).classList.add('active');
        }, 100);
    }

    // ===== DAY HUB =====
    showDayHub() {
        this.particleSystem.setTheme('hub');
        const container = document.getElementById('daysContainer');
        container.innerHTML = '';

        VALENTINE_DAYS.forEach((day, index) => {
            const unlocked = this.isDayUnlocked(day);
            const completed = this.isDayCompleted(day);

            const card = document.createElement('div');
            card.className = `day-card ${unlocked ? 'unlocked' : 'locked'} ${completed ? 'completed' : ''}`;
            card.style.setProperty('--card-color1', day.colors[0]);
            card.style.setProperty('--card-color2', day.colors[1]);
            card.style.animationDelay = (index * 0.1) + 's';
            card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.08}s both`;

            card.innerHTML = `
                <span class="day-card-icon">${day.icon}</span>
                <div class="day-card-name">${day.name}</div>
                <div class="day-card-date">Feb ${7 + index}</div>
                ${!unlocked ? '<span class="lock-icon">🔒</span>' : ''}
            `;

            if (unlocked) {
                card.addEventListener('click', () => this.openDay(day));
            }

            container.appendChild(card);
        });

        this.showScreen('dayHub');
    }

    // ===== OPEN A DAY =====
    openDay(day) {
        this.currentDay = day.id;
        this.particleSystem.setTheme(day.particleTheme);

        // Set day screen background
        document.getElementById('dayScreen').style.background = day.bg;

        // Set intro content
        document.getElementById('dayIcon').textContent = day.icon;
        document.getElementById('dayTitle').textContent = day.name;
        document.getElementById('dayDescription').textContent = day.description;

        // Reset visibility
        document.getElementById('dayIntro').style.display = 'flex';
        document.getElementById('dayIntro').style.flexDirection = 'column';
        document.getElementById('dayIntro').style.alignItems = 'center';
        document.getElementById('gameArea').style.display = 'none';
        document.getElementById('messageReveal').style.display = 'none';

        // If already completed, allow replaying or viewing message
        if (this.isDayCompleted(day)) {
            document.getElementById('btnPlay').querySelector('span').textContent = 'Play Again 🎮';
        } else {
            document.getElementById('btnPlay').querySelector('span').textContent = 'Play the Game 🎮';
        }

        document.getElementById('btnPlay').onclick = () => this.startGame(day);

        this.showScreen('dayScreen');
    }

    // ===== START GAME =====
    startGame(day) {
        document.getElementById('dayIntro').style.display = 'none';
        document.getElementById('gameArea').style.display = 'flex';
        document.getElementById('messageReveal').style.display = 'none';

        const gameArea = document.getElementById('gameArea');
        gameArea.innerHTML = '';

        const gameEngine = GAME_MAP[day.game];
        if (gameEngine) {
            this.currentGame = gameEngine;
            gameEngine.init(gameArea, () => this.showMessage(day));
        }
    }

    // ===== SHOW MESSAGE =====
    showMessage(day) {
        if (this.currentGame && this.currentGame.destroy) {
            this.currentGame.destroy();
        }

        this.saveProgress(day.id);

        document.getElementById('gameArea').style.display = 'none';
        document.getElementById('messageReveal').style.display = 'flex';

        document.getElementById('messageDecoration').textContent = day.messageDecor;
        document.getElementById('messageTitle').textContent = day.messageTitle;
        document.getElementById('messageText').innerHTML = day.message.replace(/\n/g, '<br>');

        // Set continue button text
        if (day.nextHint) {
            document.getElementById('continueText').textContent = 'Continue 💛';
        } else {
            document.getElementById('continueText').textContent = 'Back to Our Week 💛';
        }

        // Celebration effects
        createConfetti(40);
        setTimeout(() => {
            createHeartBurst(window.innerWidth / 2, window.innerHeight / 4, 12);
        }, 500);

        // Special finale effects for Valentine's Day
        if (day.id === 8) {
            this.finaleEffects();
        }
    }

    // ===== COME BACK TOMORROW =====
    showComeBack(day) {
        document.getElementById('comebackHint').textContent = day.nextHint;
        this.particleSystem.setTheme('landing');
        this.showScreen('comeBackScreen');
    }

    // ===== VALENTINE'S DAY FINALE EFFECTS =====
    finaleEffects() {
        const interval = setInterval(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight * 0.5;
            createFireworks(x, y, 15);
        }, 800);

        setTimeout(() => clearInterval(interval), 8000);

        // Extra confetti waves
        setTimeout(() => createConfetti(60), 1000);
        setTimeout(() => createConfetti(60), 2000);
        setTimeout(() => createConfetti(60), 3000);
    }
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    window.app = new ValentineApp();
});
