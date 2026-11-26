// Active pill switching
const navLinks = document.querySelectorAll('.nav-pill > a.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Dropdown toggles
const setupDropdown = (btnId, menuId) => {
  const btn = document.getElementById(btnId);
  const menu = document.getElementById(menuId);

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelectorAll('.dropdown-menu').forEach(m => {
      if (m !== menu) m.classList.remove('show');
    });
    menu.classList.toggle('show');
  });
};

setupDropdown('servicesBtn', 'servicesMenu');
setupDropdown('aboutBtn', 'aboutMenu');

window.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const navPill = document.getElementById('navPill');

mobileToggle.addEventListener('click', () => {
  navPill.classList.toggle('open');
});

// Smooth scroll CTA
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contactTrigger').addEventListener('click', () => {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// Interactive Dashboard Tabs
const tabData = {
  web: {
    status: "● Live on GitHub Pages",
    title: "Web Utilities & Developer Tools",
    desc: "Lightweight, zero-bloat browser tools built with clean HTML, CSS, and vanilla JavaScript.",
    stat1: ["100+", "Code Builds"],
    stat2: ["Fast", "Static Architecture"]
  },
  cpp: {
    status: "● Native Windows Builds",
    title: "C++ Desktop & System Apps",
    desc: "High-performance GUI tools, voice assistants, and calculation engines built with C++.",
    stat1: ["C++17", "MinGW Optimized"],
    stat2: ["Zero Lag", "Low RAM Footprint"]
  },
  audio: {
    status: "● Web Audio API",
    title: "StudioMix Web DAW",
    desc: "Browser-based vocal recording, DSP filtering, and instant WAV export studio.",
    stat1: ["DSP", "Real-time Filters"],
    stat2: ["WAV", "Direct Export"]
  },
  community: {
    status: "● Full-Stack Platform",
    title: "DADA Community Hub",
    desc: "Educational social platform with Virtual IDs, reels, stories, and project showcases.",
    stat1: ["VI-ID", "Privacy First"],
    stat2: ["Active", "Student Network"]
  }
};

const sidebarItems = document.querySelectorAll('.sidebar-list li');
const previewContent = document.getElementById('previewContent');

sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    sidebarItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const data = tabData[item.dataset.tab];
    previewContent.innerHTML = `
      <span class="status-pill">${data.status}</span>
      <h3>${data.title}</h3>
      <p>${data.desc}</p>
      <div class="stats-row">
        <div class="stat-box">
          <strong>${data.stat1[0]}</strong>
          <span>${data.stat1[1]}</span>
        </div>
        <div class="stat-box">
          <strong>${data.stat2[0]}</strong>
          <span>${data.stat2[1]}</span>
        </div>
      </div>
    `;
  });
});
