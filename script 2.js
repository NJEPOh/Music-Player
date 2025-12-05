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
        { img: "images/Podcast/MataNajwa.png", title: "Mata Najwa: Politik Hari Ini", duration: "32:10", artist: "Najwa Shihab" },
        { img: "images/Podcast/AgakLaen.jpg", title: "Agak Laen: Humor Receh Nasional", duration: "45:22", artist: "Tim Agak Laen" },
        { img: "images/Podcast/DennySumargo.jpg", title: "CURHAT BANG: Kisah Paling Absurd", duration: "28:54", artist: "Denny Sumargo" },
        { img: "images/Podcast/MataNajwa.png", title: "Mata Najwa: Bedah Isu Viral", duration: "41:02", artist: "Najwa Shihab" },
        { img: "images/Podcast/AgakLaen.jpg", title: "Agak Laen: Ngobrol Random", duration: "36:11", artist: "Tim Agak Laen" },
        { img: "images/Podcast/DennySumargo.jpg", title: "CURHAT BANG: Cerita Cinta Rumit", duration: "50:34", artist: "Denny Sumargo" },
        { img: "images/Podcast/MataNajwa.png", title: "Mata Najwa: Ekonomi Rakyat", duration: "47:18", artist: "Najwa Shihab" },
        { img: "images/Podcast/AgakLaen.jpg", title: "Agak Laen: Kisah Mistis", duration: "29:21", artist: "Tim Agak Laen" },
        { img: "images/Podcast/DennySumargo.jpg", title: "CURHAT BANG: Bintang Tamu Spesial", duration: "59:10", artist: "Denny Sumargo" },
        { img: "images/Podcast/MataNajwa.png", title: "Mata Najwa: Catatan Demokrasi", duration: "33:40", artist: "Najwa Shihab" },
        { img: "images/Podcast/AgakLaen.jpg", title: "Agak Laen: Nostalgia 2000an", duration: "26:48", artist: "Tim Agak Laen" },
        { img: "images/Podcast/DennySumargo.jpg", title: "CURHAT BANG: Curhatan Paling Gokil", duration: "43:12", artist: "Denny Sumargo" }
    ],

    popular: [
        { img: "images/Podcast/MataNajwa.png", title: "Mata Najwa: Catatan Demokrasi", duration: "33:40", artist: "Najwa Shihab" },
        { img: "images/Podcast/AgakLaen.jpg", title: "Agak Laen: Kisah Mistis", duration: "29:21", artist: "Tim Agak Laen" },
        { img: "images/Podcast/MataNajwa.png", title: "Mata Najwa: Politik Hari Ini", duration: "32:10", artist: "Najwa Shihab" },
        { img: "images/Podcast/DennySumargo.jpg", title: "CURHAT BANG: Bintang Tamu Spesial", duration: "59:10", artist: "Denny Sumargo" },
        { img: "images/Podcast/AgakLaen.jpg", title: "Agak Laen: Humor Receh Nasional", duration: "45:22", artist: "Tim Agak Laen" },
        { img: "images/Podcast/MataNajwa.png", title: "Mata Najwa: Ekonomi Rakyat", duration: "47:18", artist: "Najwa Shihab" },
        { img: "images/Podcast/AgakLaen.jpg", title: "Agak Laen: Ngobrol Random", duration: "36:11", artist: "Tim Agak Laen" },
        { img: "images/Podcast/DennySumargo.jpg", title: "CURHAT BANG: Kisah Paling Absurd", duration: "28:54", artist: "Denny Sumargo" },
        { img: "images/Podcast/DennySumargo.jpg", title: "CURHAT BANG: Cerita Cinta Rumit", duration: "50:34", artist: "Denny Sumargo" },
        { img: "images/Podcast/MataNajwa.png", title: "Mata Najwa: Bedah Isu Viral", duration: "41:02", artist: "Najwa Shihab" },
        { img: "images/Podcast/AgakLaen.jpg", title: "Agak Laen: Nostalgia 2000an", duration: "26:48", artist: "Tim Agak Laen" },
        { img: "images/Podcast/MataNajwa.png", title: "Mata Najwa: Catatan Isu Publik", duration: "38:20", artist: "Najwa Shihab" }
    ],

    new: [
        { img: "images/Podcast/AgakLaen.jpg", title: "Agak Laen: Ngobrol Random", duration: "36:11", artist: "Tim Agak Laen" },
        { img: "images/Podcast/MataNajwa.png", title: "Mata Najwa: Bedah Isu Viral", duration: "41:02", artist: "Najwa Shihab" },
        { img: "images/Podcast/DennySumargo.jpg", title: "CURHAT BANG: Kisah Paling Absurd", duration: "28:54", artist: "Denny Sumargo" },
        { img: "images/Podcast/MataNajwa.png", title: "Mata Najwa: Politik Hari Ini", duration: "32:10", artist: "Najwa Shihab" },
        { img: "images/Podcast/AgakLaen.jpg", title: "Agak Laen: Humor Receh Nasional", duration: "45:22", artist: "Tim Agak Laen" },
        { img: "images/Podcast/MataNajwa.png", title: "Mata Najwa: Ekonomi Rakyat", duration: "47:18", artist: "Najwa Shihab" },
        { img: "images/Podcast/DennySumargo.jpg", title: "CURHAT BANG: Cerita Cinta Rumit", duration: "50:34", artist: "Denny Sumargo" },
        { img: "images/Podcast/AgakLaen.jpg", title: "Agak Laen: Nostalgia 2000an", duration: "26:48", artist: "Tim Agak Laen" },
        { img: "images/Podcast/DennySumargo.jpg", title: "CURHAT BANG: Bintang Tamu Spesial", duration: "59:10", artist: "Denny Sumargo" },
        { img: "images/Podcast/MataNajwa.png", title: "Mata Najwa: Catatan Demokrasi", duration: "33:40", artist: "Najwa Shihab" },
        { img: "images/Podcast/AgakLaen.jpg", title: "Agak Laen: Kisah Mistis", duration: "29:21", artist: "Tim Agak Laen" },
        { img: "images/Podcast/DennySumargo.jpg", title: "CURHAT BANG: Curhatan Paling Gokil", duration: "43:12", artist: "Denny Sumargo" }
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
            <a href="play.html?title=${encodeURIComponent(music.title)}&artist=${encodeURIComponent(music.artist)}&img=${encodeURIComponent(music.img)}&duration=${encodeURIComponent(music.duration)}"
               style="display:flex;justify-content:space-between;align-items:center;width:100%;text-decoration:none;color:inherit;padding:10px 0">

                <div style="display:flex;align-items:center;gap:12px">
                    <img src="${music.img}" alt="${music.title} cover" />
                    <div>
                        <div style="font-weight:600">${music.title}</div>
                        <div style="font-size:13px;color:#777">${music.artist}</div>
                    </div>
                </div>

                <div style="color:#777">${music.duration}</div>

            </a>
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


const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("show");
});