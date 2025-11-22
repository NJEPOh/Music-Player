/* ============================================
   PLAY / PAUSE INTERACTION
   ============================================ */
const playBtn = document.getElementById('playBtn');
let isPlaying = false;

if (playBtn) {
    playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;

        const img = playBtn.querySelector('img');
        playBtn.setAttribute('aria-pressed', String(isPlaying));

        if (img) {
            img.src = isPlaying
                ? 'images/Player/pause.png'
                : 'images/Player/play.png';
        }
    });
}

/* ============================================
   MUSIC DATA
   - Contains arrays for recommended, popular, new
   ============================================ */
const musicData = {
    recommended: [
        { img: "images/Luminous Spaces.jpg", title: "Luminous Spaces", duration: "4:40", artist: "Jon Hopkins" },
        { img: "images/Immunity.jpeg", title: "Immunity", duration: "9:56", artist: "Clairo" },
        { img: "images/Small Memory.jpeg", title: "Small Memory", duration: "3:32", artist: "Jon Hopkins" },
        { img: "images/Synaesthesia.jpeg", title: "Synaesthesia", duration: "4:56", artist: "Bethel" },
        { img: "images/Wanted 2 Say.jpeg", title: "Wanted 2 Say", duration: "2:43", artist: "KAMASABI" },
        { img: "images/Cloud 9.jpeg", title: "Cloud 9", duration: "4:32", artist: "Itro & Tobu" },
        { img: "images/Janji.jpeg", title: "Heroes Tonight", duration: "3:11", artist: "Janji" },
        { img: "images/F1.jpg", title: "F1", duration: "2:43", artist: "Hans Zimmer" },
        { img: "images/Silhouette.png", title: "Silhouette", duration: "4:21", artist: "Kana Boon" },
        { img: "images/Whoa.jpeg", title: "Whoa", duration: "2:33", artist: "XXXtentacion" },
        { img: "images/We Are.png", title: "We Are", duration: "2:36", artist: "One Ok Rock" },
        { img: "images/Devil Trigger.jpeg", title: "Devil Trigger", duration: "5:50", artist: "Casey Edwards" }
    ],

    popular: [
        { img: "images/We Are.png", title: "We Are", duration: "2:36", artist: "One Ok Rock" },
        { img: "images/Synaesthesia.jpeg", title: "Synaesthesia", duration: "4:56", artist: "Bethel" },
        { img: "images/Luminous Spaces.jpg", title: "Luminous Spaces", duration: "4:40", artist: "Jon Hopkins" },
        { img: "images/F1.jpg", title: "F1", duration: "2:43", artist: "Hans Zimmer" },
        { img: "images/Whoa.jpeg", title: "Whoa", duration: "2:33", artist: "XXXtentacion" },
        { img: "images/Janji.jpeg", title: "Heroes Tonight", duration: "3:11", artist: "Janji" },
        { img: "images/Cloud 9.jpeg", title: "Cloud 9", duration: "4:32", artist: "Itro & Tobu" },
        { img: "images/Wanted 2 Say.jpeg", title: "Wanted 2 Say", duration: "2:43", artist: "KAMASABI" },
        { img: "images/Devil Trigger.jpeg", title: "Devil Trigger", duration: "5:50", artist: "Casey Edwards" },
        { img: "images/Silhouette.png", title: "Silhouette", duration: "4:21", artist: "Kana Boon" },
        { img: "images/Small Memory.jpeg", title: "Small Memory", duration: "3:32", artist: "Jon Hopkins" },
        { img: "images/Immunity.jpeg", title: "Immunity", duration: "9:56", artist: "Clairo" }
    ],

    new: [
        { img: "images/Cloud 9.jpeg", title: "Cloud 9", duration: "4:32", artist: "Itro & Tobu" },
        { img: "images/Immunity.jpeg", title: "Immunity", duration: "9:56", artist: "Clairo" },
        { img: "images/Janji.jpeg", title: "Heroes Tonight", duration: "3:11", artist: "Janji" },
        { img: "images/We Are.png", title: "We Are", duration: "2:36", artist: "One Ok Rock" },
        { img: "images/Wanted 2 Say.jpeg", title: "Wanted 2 Say", duration: "2:43", artist: "KAMASABI" },
        { img: "images/Synaesthesia.jpeg", title: "Synaesthesia", duration: "4:56", artist: "Bethel" },
        { img: "images/Devil Trigger.jpeg", title: "Devil Trigger", duration: "5:50", artist: "Casey Edwards" },
        { img: "images/Small Memory.jpeg", title: "Small Memory", duration: "3:32", artist: "Jon Hopkins" },
        { img: "images/F1.jpg", title: "F1", duration: "2:43", artist: "Hans Zimmer" },
        { img: "images/Whoa.jpeg", title: "Whoa", duration: "2:33", artist: "XXXtentacion" },
        { img: "images/Silhouette.png", title: "Silhouette", duration: "4:21", artist: "Kana Boon" },
        { img: "images/Luminous Spaces.jpg", title: "Luminous Spaces", duration: "4:40", artist: "Jon Hopkins" }
    ]
};

/* ============================================
   RENDER LIST
   - Generates <li> elements based on selected tab
   ============================================ */
function renderList(type) {
    const list = document.getElementById('musicList');
    if (!list) return;

    list.innerHTML = '';

    const items = musicData[type] || [];

    items.forEach(music => {
        const li = document.createElement('li');

        li.innerHTML = `
            <div style="display:flex;align-items:center;gap:12px">
                <img src="${music.img}" alt="${music.title} cover" />
                <div>
                    <div style="font-weight:600">${music.title}</div>
                    <div style="font-size:13px;color:#777">${music.artist}</div>
                </div>
            </div>
            <div style="color:#777">${music.duration}</div>
        `;

        list.appendChild(li);
    });
}

/* ============================================
   TAB BUTTONS HANDLING
   ============================================ */
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {

        // Update active state
        document.querySelectorAll('.tab-btn').forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
        });

        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        // Load selected data
        const tab = btn.getAttribute('data-tab');
        renderList(tab);
    });
});

/* Default load */
renderList('recommended');

/* ============================================
   NAV ACTIVE STATE BY URL
   ============================================ */
(function setNavActiveByPath() {
    const navLinks = document.querySelectorAll('.nav-left .nav-tab');
    const path = location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        const file = href.split('/').pop();

        if (file === path || (path === '' && file === 'index.html')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
})();

/* ============================================
   HAMBURGER MENU BEHAVIOR (MOBILE)
   ============================================ */
const hamburger = document.querySelector('.hamburger');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        const navLeft = document.querySelector('.nav-left');
        const isOpen = hamburger.getAttribute('aria-expanded') === 'true';

        hamburger.setAttribute('aria-expanded', String(!isOpen));
        navLeft.classList.toggle('open');
    });
}

/* Close menu when clicking a nav link */
document.querySelectorAll('.nav-left .nav-tab').forEach(link => {
    link.addEventListener('click', () => {
        const navLeft = document.querySelector('.nav-left');
        if (navLeft.classList.contains('open')) {
            navLeft.classList.remove('open');
        }
    });
});
