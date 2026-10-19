/**
 * Interactive Developer CLI Terminal Emulator
 * For recruiters and developers who want to inspect Saurabh's profile via CLI!
 */

class DeveloperTerminal {
  constructor() {
    this.modal = document.getElementById('terminal-modal');
    this.output = document.getElementById('terminal-output');
    this.input = document.getElementById('terminal-input');
    this.history = [];
    this.historyIndex = -1;
    this.isOpen = false;

    this.commands = {
      help: () => this.cmdHelp(),
      whoami: () => this.cmdBio(),
      bio: () => this.cmdBio(),
      skills: () => this.cmdSkills(),
      experience: () => this.cmdExperience(),
      projects: () => this.cmdProjects(),
      awards: () => this.cmdAwards(),
      bravo: () => this.cmdAwards(),
      education: () => this.cmdEducation(),
      certifications: () => this.cmdCertifications(),
      contact: () => this.cmdContact(),
      'download-cv': () => this.cmdDownload(),
      matrix: () => this.cmdMatrix(),
      clear: () => this.cmdClear(),
      exit: () => this.close()
    };

    this.init();
  }

  init() {
    if (!this.input) return;

    this.input.addEventListener('keydown', (e) => {
      if (window.soundSystem) window.soundSystem.play('terminal_key');

      if (e.key === 'Enter') {
        const cmd = this.input.value.trim();
        if (cmd) {
          this.history.push(cmd);
          this.historyIndex = this.history.length;
          this.execute(cmd);
        }
        this.input.value = '';
      } else if (e.key === 'ArrowUp') {
        if (this.history.length > 0 && this.historyIndex > 0) {
          this.historyIndex--;
          this.input.value = this.history[this.historyIndex];
        }
        e.preventDefault();
      } else if (e.key === 'ArrowDown') {
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          this.input.value = this.history[this.historyIndex];
        } else {
          this.historyIndex = this.history.length;
          this.input.value = '';
        }
        e.preventDefault();
      }
    });

    // Toggle with '~' (Backquote)
    window.addEventListener('keydown', (e) => {
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        this.toggle();
      }
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  open() {
    if (!this.modal) return;
    this.modal.classList.remove('hidden');
    this.modal.classList.add('flex');
    this.isOpen = true;
    setTimeout(() => this.input.focus(), 100);
    if (window.soundSystem) window.soundSystem.play('click');
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.add('hidden');
    this.modal.classList.remove('flex');
    this.isOpen = false;
  }

  toggle() {
    if (this.isOpen) this.close();
    else this.open();
  }

  execute(cmdStr) {
    const raw = cmdStr.trim();
    const parts = raw.split(' ');
    const command = parts[0].toLowerCase();

    this.printLine(`<span class="text-cyan-400">saurabh@dev:~$</span> <span class="text-white">${this.escape(raw)}</span>`);

    if (this.commands[command]) {
      this.commands[command](parts.slice(1));
    } else {
      this.printLine(`<span class="text-rose-400">Command not found: '${command}'. Type <span class="text-yellow-400 font-bold">help</span> to view available commands.</span>`);
    }

    this.scrollToBottom();
  }

  printLine(html) {
    const div = document.createElement('div');
    div.className = 'my-1 text-sm leading-relaxed';
    div.innerHTML = html;
    this.output.appendChild(div);
  }

  scrollToBottom() {
    this.output.scrollTop = this.output.scrollHeight;
  }

  escape(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  cmdHelp() {
    this.printLine(`
      <div class="text-emerald-400 font-mono font-semibold mb-1">⚡ Available Terminal Commands:</div>
      <table class="w-full text-xs font-mono border-spacing-y-1">
        <tr><td class="text-yellow-300 w-32">whoami / bio</td><td class="text-gray-300">View developer profile & summary</td></tr>
        <tr><td class="text-yellow-300">skills</td><td class="text-gray-300">Inspect technical skill matrix & proficiencies</td></tr>
        <tr><td class="text-yellow-300">awards / bravo</td><td class="text-gray-300">Display Bravo Awards & LinkedIn recognitions</td></tr>
        <tr><td class="text-yellow-300">projects</td><td class="text-gray-300">List enterprise & CDAC flagship projects</td></tr>
        <tr><td class="text-yellow-300">experience</td><td class="text-gray-300">Work experience details (Blucor Systems)</td></tr>
        <tr><td class="text-yellow-300">education</td><td class="text-gray-300">Academic background & CDAC credentials</td></tr>
        <tr><td class="text-yellow-300">certifications</td><td class="text-gray-300">Professional certifications list</td></tr>
        <tr><td class="text-yellow-300">contact</td><td class="text-gray-300">Direct contact info & social handles</td></tr>
        <tr><td class="text-yellow-300">download-cv</td><td class="text-gray-300">Export / print official ATS resume</td></tr>
        <tr><td class="text-yellow-300">matrix</td><td class="text-gray-300">Execute cyber green digital rain</td></tr>
        <tr><td class="text-yellow-300">clear</td><td class="text-gray-300">Clear terminal console screen</td></tr>
        <tr><td class="text-yellow-300">exit</td><td class="text-gray-300">Exit the developer terminal</td></tr>
      </table>
    `);
  }

  cmdBio() {
    const p = RESUME_DATA.personal;
    this.printLine(`
      <div class="p-3 bg-cyan-950/40 border border-cyan-800/60 rounded-md">
        <div class="text-cyan-300 font-bold text-base mb-1">${p.name} — ${p.title}</div>
        <div class="text-xs text-emerald-400 mb-2">📍 ${p.location} | 🟢 Status: ${p.status}</div>
        <div class="text-xs text-gray-300 leading-normal">${p.bio}</div>
      </div>
    `);
  }

  cmdSkills() {
    let out = `<div class="text-cyan-300 font-semibold mb-2">🛠️ Technical Skill Matrix:</div>`;
    out += `
      <div class="p-2 mb-3 bg-cyan-950/40 border border-cyan-800/60 rounded">
        <div class="text-yellow-300 font-bold text-xs mb-1">⚡ PRIMARY SKILLS (Core Pillars):</div>
        <div class="text-emerald-400 font-mono text-xs">${RESUME_DATA.personal.primarySkills.join(' • ')}</div>
      </div>
    `;
    RESUME_DATA.skills.forEach(cat => {
      out += `<div class="text-xs text-purple-400 font-bold mt-2 uppercase tracking-wider">${cat.category}</div>`;
      cat.skills.forEach(s => {
        const barLength = Math.round(s.level / 5);
        const bar = '█'.repeat(barLength) + '░'.repeat(20 - barLength);
        out += `<div class="text-xs font-mono flex justify-between py-0.5">
          <span class="text-gray-200 w-52">${s.name}</span>
          <span class="text-emerald-400 hidden sm:inline">[${bar}]</span>
          <span class="text-cyan-400 font-semibold">${s.level}%</span>
        </div>`;
      });
    });
    this.printLine(out);
  }

  cmdAwards() {
    let out = `<div class="text-amber-400 font-semibold mb-2">🏆 Bravo Awards (7x Recipient @ Persistent Systems) & Accolades:</div>`;
    RESUME_DATA.awards.forEach((aw, idx) => {
      out += `
        <div class="p-2.5 my-1.5 bg-yellow-950/20 border-l-4 border-amber-400 rounded-r text-xs">
          <div class="font-bold text-yellow-300 text-sm">${aw.badge}: ${aw.title}</div>
          <div class="text-gray-400 text-xs mt-0.5">Issuer: <span class="text-gray-200">${aw.issuer}</span></div>
          <div class="text-cyan-200 italic mt-1">${aw.citation}</div>
          <div class="text-gray-400 text-xs mt-1">LinkedIn Reactions: 👍 ${aw.reactions.likes} | 💬 ${aw.reactions.comments}</div>
        </div>
      `;
    });
    this.printLine(out);
  }

  cmdProjects() {
    let out = `<div class="text-cyan-300 font-semibold mb-2">🚀 Flagship & Production Projects:</div>`;
    RESUME_DATA.projects.forEach(p => {
      out += `
        <div class="p-2 my-1.5 bg-slate-900/60 border border-slate-700/60 rounded text-xs">
          <div class="text-cyan-400 font-bold text-sm">${p.title} <span class="text-xs font-normal text-emerald-400">(${p.badge})</span></div>
          <div class="text-gray-400 mt-1">${p.summary}</div>
          <div class="mt-1.5 text-purple-300 font-mono text-xs">Tech: ${p.techStack.join(' • ')}</div>
        </div>
      `;
    });
    this.printLine(out);
  }

  cmdExperience() {
    let out = `<div class="text-purple-300 font-semibold mb-2">💼 Professional Career Trajectory (6+ Years):</div>`;
    RESUME_DATA.experience.forEach(exp => {
      out += `
        <div class="p-2.5 my-1.5 bg-purple-950/20 border-l-4 border-purple-500 rounded-r text-xs">
          <div class="font-bold text-purple-200 text-sm flex items-center justify-between">
            <span>${exp.role} @ ${exp.company}</span>
            <span class="text-emerald-400 font-mono text-[11px]">${exp.duration || ''}</span>
          </div>
          <div class="text-gray-400">${exp.period} | ${exp.location} ${exp.awardWon ? `• <span class="text-amber-400 font-semibold">${exp.awardWon}</span>` : ''}</div>
          <div class="text-cyan-300 font-semibold mt-1">Domain / Project: ${exp.project}</div>
          <div class="text-gray-300 mt-1">${exp.description}</div>
          <ul class="list-disc list-inside mt-1.5 space-y-1 text-gray-400">
            ${exp.highlights.slice(0, 3).map(h => `<li>${h}</li>`).join('')}
        </div>
      `;
    });
    this.printLine(out);
  }

  cmdEducation() {
    let out = `<div class="text-emerald-300 font-semibold mb-2">🎓 Educational Qualifications:</div>`;
    RESUME_DATA.education.forEach(edu => {
      out += `
        <div class="p-2 my-1 bg-slate-900/50 border-l-2 border-emerald-400 rounded text-xs">
          <div class="text-emerald-400 font-semibold">${edu.degree}</div>
          <div class="text-gray-300">${edu.institution} (${edu.period})</div>
          <div class="text-gray-400 text-xs">${edu.grade}</div>
        </div>
      `;
    });
    this.printLine(out);
  }

  cmdCertifications() {
    let out = `<div class="text-cyan-300 font-semibold mb-2">📜 Professional Certifications:</div><ul class="space-y-1 text-xs">`;
    RESUME_DATA.certifications.forEach(c => {
      out += `<li class="text-gray-300">• <span class="text-yellow-300 font-medium">${c.name}</span> — ${c.org}</li>`;
    });
    out += `</ul>`;
    this.printLine(out);
  }

  cmdContact() {
    const p = RESUME_DATA.personal;
    this.printLine(`
      <div class="p-3 bg-emerald-950/20 border border-emerald-600/40 rounded-md text-xs space-y-1">
        <div class="text-emerald-400 font-bold text-sm mb-1">📬 Saurabh Ajit Sangve — Direct Coordinates:</div>
        <div>📧 Email: <a href="mailto:${p.email}" class="text-cyan-300 underline">${p.email}</a></div>
        <div>📱 Phone: <a href="tel:${p.phone}" class="text-cyan-300 underline">${p.phone}</a></div>
        <div>🌐 LinkedIn: <a href="${p.linkedin}" target="_blank" class="text-cyan-300 underline">${p.linkedin}</a></div>
        <div>📍 Location: <span class="text-gray-300">${p.location}</span></div>
      </div>
    `);
  }

  cmdDownload() {
    this.printLine(`<span class="text-emerald-400 font-mono">⚡ Initializing print & ATS resume export pipeline...</span>`);
    setTimeout(() => {
      window.print();
    }, 600);
  }

  cmdMatrix() {
    this.printLine(`<span class="text-emerald-400 font-mono">Wake up, Saurabh... The Matrix has you. Follow the white rabbit. 🐇</span>`);
    if (window.soundSystem) window.soundSystem.play('award_fanfare');
  }

  cmdClear() {
    this.output.innerHTML = '';
  }
}

window.terminal = new DeveloperTerminal();
