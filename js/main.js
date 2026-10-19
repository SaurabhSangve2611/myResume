/**
 * Saurabh Sangve - Digital Resume Main Interaction Engine
 * Renders UI components, dynamic text scramble, filters, modals, and confetti
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initScrambleText();
  initStats();
  renderSkills('all');
  renderAwards('all');
  renderProjects();
  renderExperience();
  renderEducation();
  initInteractions();
  initAudioToggle();
});

// Dynamic Text Scramble Effect for Hero Header
function initScrambleText() {
  const titles = [
    "Engineering Lead @ Persistent Systems",
    "IBM Verify Identity Governance (IVIG)",
    "Enterprise Java & Security Specialist",
    "PSIRT Vulnerability & APAR Lead",
    "Multi-time Bravo Award Recipient"
  ];
  let titleIdx = 0;
  const target = document.getElementById('scramble-subtitle');
  if (!target) return;

  const chars = '!<>-_\\/[]{}—=+*^?#________';

  function scrambleTo(newText) {
    let iteration = 0;
    const length = Math.max(target.innerText.length, newText.length);
    clearInterval(target.scrambleInterval);

    target.scrambleInterval = setInterval(() => {
      target.innerText = newText
        .split('')
        .map((char, index) => {
          if (index < iteration) {
            return newText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      if (iteration >= newText.length) {
        clearInterval(target.scrambleInterval);
      }
      iteration += 1 / 2;
    }, 30);
  }

  setInterval(() => {
    titleIdx = (titleIdx + 1) % titles.length;
    scrambleTo(titles[titleIdx]);
  }, 4000);
}

// Initialize Hero Metric Counters
function initStats() {
  const statsContainer = document.getElementById('hero-stats-grid');
  if (!statsContainer) return;

  statsContainer.innerHTML = RESUME_DATA.personal.stats.map(s => `
    <div class="hud-card p-4 text-center">
      <div class="hud-corner-tl"></div>
      <div class="hud-corner-br"></div>
      <div class="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400 drop-shadow">${s.value}</div>
      <div class="text-xs text-gray-400 font-mono uppercase tracking-wider mt-1">${s.label}</div>
    </div>
  `).join('');
}

// Render Skills with Filter Tabs
window.filterSkills = function(category) {
  if (window.soundSystem) window.soundSystem.play('click');
  
  document.querySelectorAll('.skill-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
  renderSkills(category);
};

function renderSkills(filterCategory) {
  const container = document.getElementById('skills-container');
  if (!container) return;

  let filtered = RESUME_DATA.skills;
  if (filterCategory !== 'all') {
    filtered = RESUME_DATA.skills.filter(cat => 
      cat.category.toLowerCase().includes(filterCategory.toLowerCase())
    );
  }

  container.innerHTML = filtered.map(cat => `
    <div class="hud-card p-6">
      <div class="hud-corner-tl"></div>
      <div class="hud-corner-br"></div>
      <div class="flex items-center justify-between pb-3 border-b border-cyan-500/20 mb-4">
        <h3 class="text-lg font-bold font-mono text-cyan-300 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
          ${cat.category}
        </h3>
        <span class="text-xs font-mono text-gray-400">${cat.skills.length} competencies</span>
      </div>

      <div class="space-y-4">
        ${cat.skills.map(s => `
          <div>
            <div class="flex justify-between items-center text-sm mb-1.5">
              <span class="font-medium text-gray-200 flex items-center gap-2">
                <span class="text-cyan-400 font-mono text-xs">▹</span> ${s.name}
              </span>
              <span class="font-mono text-xs text-emerald-400 font-semibold">${s.level}%</span>
            </div>
            <div class="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-700/60 p-0.5">
              <div class="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-700" style="width: ${s.level}%"></div>
            </div>
            <div class="flex flex-wrap gap-1.5 mt-2">
              ${s.tags.map(tag => `
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-gray-300 border border-slate-700/50">${tag}</span>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Render Dedicated Bravo Awards & Recognitions
window.filterAwards = function(category) {
  if (window.soundSystem) window.soundSystem.play('click');
  document.querySelectorAll('.award-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
  renderAwards(category);
};

function renderAwards(category) {
  const container = document.getElementById('awards-container');
  if (!container) return;

  let list = RESUME_DATA.awards;
  if (category !== 'all') {
    list = RESUME_DATA.awards.filter(a => a.category.toLowerCase().includes(category.toLowerCase()));
  }

  container.innerHTML = list.map((a, idx) => `
    <div class="award-card p-6 flex flex-col justify-between cursor-pointer" onclick="viewAwardModal('${a.id}')">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="badge-ribbon">${a.badge}</span>
          <span class="text-xs font-mono text-amber-300/80 bg-amber-950/40 px-2.5 py-1 rounded border border-amber-500/30">
            ${a.date}
          </span>
        </div>

        <h3 class="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-1.5">
          ${a.title}
        </h3>
        
        <div class="text-xs font-mono text-cyan-300 flex items-center gap-1.5 mb-3">
          <span>🏛️ ${a.issuer}</span>
          ${a.verified ? '<span class="text-emerald-400 font-bold" title="Verified Credential">✓ Verified</span>' : ''}
        </div>

        <div class="p-3 bg-black/40 rounded-lg border border-amber-500/20 text-xs italic text-amber-100/90 leading-relaxed mb-4">
          ${a.citation}
        </div>

        <p class="text-xs text-gray-300 leading-normal mb-4">
          ${a.details}
        </p>
      </div>

      <div class="pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs text-gray-400">
        <div class="flex items-center gap-3">
          <span class="flex items-center gap-1 text-cyan-300">👍 ${a.reactions.likes}</span>
          <span class="flex items-center gap-1 text-purple-300">💬 ${a.reactions.comments}</span>
        </div>
        <button class="text-amber-400 hover:text-amber-300 font-mono font-semibold flex items-center gap-1 text-xs">
          View Post & Citation ↗
        </button>
      </div>
    </div>
  `).join('');
}

// Modal View for Award with celebratory confetti
window.viewAwardModal = function(awardId) {
  const award = RESUME_DATA.awards.find(a => a.id === awardId);
  if (!award) return;

  const modal = document.getElementById('award-modal');
  const content = document.getElementById('award-modal-content');
  if (!modal || !content) return;

  if (window.soundSystem) window.soundSystem.play('award_fanfare');
  triggerConfetti();

  content.innerHTML = `
    <div class="text-center pb-4 border-b border-amber-500/20">
      <div class="inline-block p-4 rounded-full bg-amber-500/20 border border-amber-400/40 mb-3 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
        <span class="text-4xl">🏆</span>
      </div>
      <div class="badge-ribbon mb-2">${award.badge}</div>
      <h2 class="text-xl sm:text-2xl font-bold text-white mb-1">${award.title}</h2>
      <div class="text-xs font-mono text-cyan-300">Presented by ${award.issuer} • ${award.date}</div>
    </div>

    <div class="my-6 p-4 rounded-xl bg-black/60 border border-amber-500/30 text-amber-200 text-sm leading-relaxed italic text-center">
      ${award.citation}
    </div>

    <div class="space-y-3 text-xs text-gray-300 leading-relaxed">
      <div><strong class="text-white">Award Background:</strong> ${award.details}</div>
      <div><strong class="text-white">Recognition Level:</strong> Verified Professional Accolade directly spotlighted on LinkedIn profile.</div>
    </div>

    <div class="mt-6 pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-3 text-xs font-mono text-gray-400">
        <span>👍 ${award.reactions.likes} Likes</span>
        <span>💬 ${award.reactions.comments} Comments</span>
        <span>🔄 ${award.reactions.shares} Reposts</span>
      </div>
      <a href="${RESUME_DATA.personal.linkedin}" target="_blank" class="btn-cyber-primary text-xs py-2 px-4">
        Verify on LinkedIn Profile ↗
      </a>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
};

window.closeAwardModal = function() {
  const modal = document.getElementById('award-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

// Simple Lightweight Confetti Generator using Canvas
function triggerConfetti() {
  const count = 50;
  const colors = ['#00f5ff', '#f59e0b', '#9d4edd', '#10b981', '#ffffff'];
  const container = document.body;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.style.position = 'fixed';
    el.style.zIndex = '9999';
    el.style.width = Math.random() * 8 + 6 + 'px';
    el.style.height = Math.random() * 8 + 6 + 'px';
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.top = '50%';
    el.style.left = '50%';
    el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    el.style.pointerEvents = 'none';
    container.appendChild(el);

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 400 + 200;
    const destX = Math.cos(angle) * velocity;
    const destY = Math.sin(angle) * velocity - 100;

    el.animate([
      { transform: 'translate(0, 0) rotate(0deg) scale(1)', opacity: 1 },
      { transform: `translate(${destX}px, ${destY}px) rotate(${Math.random() * 720}deg) scale(0)`, opacity: 0 }
    ], {
      duration: 1200 + Math.random() * 600,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      fill: 'forwards'
    }).onfinish = () => el.remove();
  }
}

// Render Projects
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = RESUME_DATA.projects.map(p => `
    <div class="hud-card p-6 flex flex-col justify-between">
      <div class="hud-corner-tl"></div>
      <div class="hud-corner-br"></div>
      
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-mono font-semibold px-2.5 py-1 rounded-full ${p.featured ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-slate-800 text-gray-300 border border-slate-700'}">
            ${p.badge}
          </span>
          <span class="text-xs font-mono text-gray-400">${p.type}</span>
        </div>

        <h3 class="text-xl font-bold text-white mb-1">${p.title}</h3>
        <div class="text-xs font-mono text-purple-400 mb-3">${p.institution} • Role: ${p.role}</div>

        <p class="text-xs text-gray-300 leading-relaxed mb-4">${p.summary}</p>

        <div class="space-y-1.5 mb-5">
          ${p.highlights.map(h => `
            <div class="flex items-start gap-2 text-xs text-gray-300">
              <span class="text-cyan-400 font-mono mt-0.5">▹</span>
              <span>${h}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <div class="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800 mb-4">
          ${p.techStack.map(t => `
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-cyan-300 border border-cyan-500/20">${t}</span>
          `).join('')}
        </div>
        <div class="flex items-center gap-3">
          <a href="${RESUME_DATA.personal.linkedin}" target="_blank" class="btn-cyber-outline text-xs py-1.5 px-3 w-full justify-center">
            LinkedIn Profile ↗
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Experience
function renderExperience() {
  const container = document.getElementById('experience-container');
  if (!container) return;

  container.innerHTML = `
    <!-- Persistent Systems Group Card -->
    <div class="hud-card p-6 sm:p-8 relative border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-cyan-950/20">
      <div class="hud-corner-tl"></div>
      <div class="hud-corner-br"></div>

      <!-- Company Main Header -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-700/60 mb-6">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center font-bold text-orange-400 text-2xl shadow-[0_0_20px_rgba(249,115,22,0.2)]">
            PS
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-2xl font-extrabold text-white">Persistent Systems</h3>
              <span class="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300">5 yrs 2 mos</span>
            </div>
            <div class="text-xs font-mono text-gray-400 mt-1 flex flex-wrap items-center gap-2">
              <span>Full-time</span>
              <span>•</span>
              <span>Pune District, Maharashtra, India · Hybrid</span>
              <span>•</span>
              <span class="text-emerald-400 font-semibold">4 Successive Promotions</span>
            </div>
          </div>
        </div>

        <a href="${RESUME_DATA.personal.linkedin}" target="_blank" class="btn-cyber-outline text-xs py-1.5 px-3">
          View on LinkedIn ↗
        </a>
      </div>

      <!-- Roles Timeline inside Persistent Systems -->
      <div class="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-8">
        ${RESUME_DATA.experience.filter(e => e.company === 'Persistent Systems').map((exp, idx) => `
          <div class="relative group">
            <!-- Timeline Node Indicator -->
            <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full ${exp.current ? 'bg-cyan-400 ring-4 ring-cyan-500/30' : 'bg-slate-700 group-hover:bg-cyan-400'} border-2 border-slate-900 transition-colors"></div>

            <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div>
                <h4 class="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                  ${exp.role}
                  ${exp.current ? '<span class="status-indicator text-[10px] py-0.5 px-2.5"><span class="pulse-dot"></span> CURRENT ROLE</span>' : ''}
                </h4>
                <div class="text-xs font-mono text-cyan-300 mt-0.5">${exp.period} · <span class="text-gray-400">${exp.duration}</span></div>
              </div>
            </div>

            <!-- Project & Initiative Header -->
            <div class="p-3 bg-black/40 rounded-lg border border-slate-700/60 my-3">
              <div class="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                <span>🛡️ Domain & Project:</span>
                <span class="text-gray-200">${exp.project}</span>
              </div>
              <p class="text-xs text-gray-300 mt-1 leading-relaxed">${exp.description}</p>
            </div>

            <!-- Key Responsibilities & Leadership Bullet Points -->
            <ul class="space-y-1.5 mb-3 text-xs text-gray-300">
              ${exp.highlights.map(h => `
                <li class="flex items-start gap-2 leading-relaxed">
                  <span class="text-cyan-400 font-mono mt-0.5">▹</span>
                  <span>${h}</span>
                </li>
              `).join('')}
            </ul>

            <!-- Tech Badges -->
            <div class="flex flex-wrap gap-1.5 pt-2">
              ${exp.techStack.map(t => `
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-cyan-300 border border-cyan-800/40">${t}</span>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- BluCor Systems Pvt. Ltd. Card -->
    ${RESUME_DATA.experience.filter(e => e.company !== 'Persistent Systems').map(exp => `
      <div class="hud-card p-6 sm:p-8 relative mt-6 border-slate-700/60 bg-slate-900/50">
        <div class="hud-corner-tl"></div>
        <div class="hud-corner-br"></div>

        <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center font-bold text-purple-300 text-xl">
              BC
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">${exp.company}</h3>
              <div class="text-xs font-mono text-gray-400 mt-0.5">${exp.employmentType} · ${exp.duration} · ${exp.location}</div>
            </div>
          </div>
          <span class="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-gray-300 border border-slate-700">
            ${exp.period}
          </span>
        </div>

        <div class="mb-3">
          <h4 class="text-base font-bold text-white">${exp.role} — <span class="text-sm font-mono text-purple-300">${exp.project}</span></h4>
          <p class="text-xs text-gray-300 mt-1">${exp.description}</p>
        </div>

        <ul class="space-y-1.5 mb-4 text-xs text-gray-300">
          ${exp.highlights.map(h => `
            <li class="flex items-start gap-2 leading-relaxed">
              <span class="text-purple-400 font-mono mt-0.5">▹</span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>

        <div class="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
          ${exp.techStack.map(t => `
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/40 text-purple-300 border border-purple-500/30">${t}</span>
          `).join('')}
        </div>
      </div>
    `).join('')}
  `;
}

// Render Education & Certifications
function renderEducation() {
  const eduContainer = document.getElementById('education-container');
  const certContainer = document.getElementById('certifications-container');

  if (eduContainer) {
    eduContainer.innerHTML = RESUME_DATA.education.map(e => `
      <div class="hud-card p-5">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-500/30">
            ${e.period}
          </span>
          <span class="text-xs font-mono text-gray-400">${e.location}</span>
        </div>
        <h4 class="text-base font-bold text-white mb-1">${e.degree}</h4>
        <div class="text-xs font-mono text-cyan-300 mb-2">${e.institution}</div>
        <p class="text-xs text-gray-400 mb-2">${e.description}</p>
        <div class="text-xs font-mono font-semibold text-emerald-300">${e.grade}</div>
      </div>
    `).join('');
  }

  if (certContainer) {
    certContainer.innerHTML = RESUME_DATA.certifications.map(c => `
      <div class="p-3.5 rounded-lg bg-slate-900/60 border border-slate-700/60 flex items-center justify-between">
        <div>
          <div class="text-xs font-bold text-white flex items-center gap-2">
            <span class="text-amber-400">📜</span> ${c.name}
          </div>
          <div class="text-[11px] text-gray-400 font-mono mt-0.5">${c.org}</div>
        </div>
        <span class="text-[10px] font-mono text-cyan-300 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40">
          ${c.year}
        </span>
      </div>
    `).join('');
  }
}

// Copy to Clipboard Toast & Interactive Audio Handlers
function initInteractions() {
  window.copyToClipboard = function(text, label) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied ${label}: ${text}`);
      if (window.soundSystem) window.soundSystem.play('click');
    });
  };

  // Close modals on clicking backdrop
  window.addEventListener('click', (e) => {
    const awardModal = document.getElementById('award-modal');
    if (e.target === awardModal) closeAwardModal();
  });
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const msgEl = document.getElementById('toast-message');
  if (!toast || !msgEl) return;

  msgEl.innerText = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Audio Toggle Button
function initAudioToggle() {
  const btn = document.getElementById('audio-toggle-btn');
  const statusEl = document.getElementById('audio-status-text');
  if (!btn || !statusEl) return;

  function updateAudioUI(enabled) {
    statusEl.innerText = enabled ? 'SFX: ON' : 'SFX: OFF';
    btn.classList.toggle('text-cyan-400', enabled);
    btn.classList.toggle('text-gray-400', !enabled);
    const bars = btn.querySelector('.sound-bars');
    if (bars) bars.style.display = enabled ? 'inline-flex' : 'none';
  }

  updateAudioUI(window.soundSystem.enabled);

  btn.addEventListener('click', () => {
    const newState = window.soundSystem.toggle();
    updateAudioUI(newState);
    showToast(newState ? 'Futuristic UI Sound FX Enabled 🔊' : 'Sound FX Muted 🔇');
  });
}
