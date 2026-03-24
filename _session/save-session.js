#!/usr/bin/env node
/**
 * Firenze Flora — Session Save Script
 * Run: node _session/save-session.js "What you completed in this session"
 *
 * This writes SESSION.md so the next Claude Code session picks up exactly where you left off.
 */

const fs = require('fs');
const path = require('path');

const now = new Date();
const dateStr = now.toLocaleDateString('en-GB', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});
const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

const note = process.argv[2] || '(no session note provided — add one next time)';

// Try to get git status
let gitStatus = '';
try {
  const { execSync } = require('child_process');
  gitStatus = execSync('git status --short 2>/dev/null || echo "not a git repo yet"').toString().trim();
} catch (e) {
  gitStatus = 'git not initialized yet';
}

// Read existing session to preserve completed items
let existingCompleted = '';
const sessionPath = path.join(__dirname, 'SESSION.md');
if (fs.existsSync(sessionPath)) {
  const existing = fs.readFileSync(sessionPath, 'utf8');
  const match = existing.match(/## Completed So Far\n([\s\S]*?)(?=\n## |$)/);
  if (match) existingCompleted = match[1].trim();
}

const content = `# Firenze Flora — Session Log

> **Next session:** Read this file FIRST, then read CLAUDE.md.

---

## Last Session
- **Date:** ${dateStr}
- **Time ended:** ${timeStr}
- **Session note:** ${note}

---

## Completed So Far
${existingCompleted}
- [${dateStr}] ${note}

---

## Git Status at Session End
\`\`\`
${gitStatus}
\`\`\`

---

## Next Steps (fill in before ending session)
<!-- Update these before running save-session.js -->
- [ ] _____________
- [ ] _____________
- [ ] _____________

---

## Open Questions / Blockers
- WhatsApp number: **TBD** (owner to provide)
- Hero video: **TBD** (AI cinematic to be generated)
- Real photography: **TBD** (owner to provide)
- Domain: **TBD** (will connect to vercel.app deployment for now)

---

## Key Files Changed This Session
Run \`git diff --stat HEAD\` to see changes.

---

## How to Resume
\`\`\`bash
cd firenze-flora
npm install        # if first time
npm run dev        # start dev server
# Then tell Claude Code: "Read SESSION.md and CLAUDE.md, then continue where we left off"
\`\`\`
`;

fs.writeFileSync(sessionPath, content);
console.log(`✅ Session saved to _session/SESSION.md`);
console.log(`📅 ${dateStr} at ${timeStr}`);
console.log(`📝 Note: ${note}`);
