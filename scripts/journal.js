#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function createJournalEntry() {
  console.log('\n📝 Daily Journal Entry\n');

  // Get inputs
  const day = await prompt('Day #: ');
  const title = await prompt('Title: ');

  console.log('\n📊 Stats:');
  const marketing = await prompt('Marketing %: ');
  const building = 100 - parseInt(marketing);

  const totalConvos = await prompt('Total conversations this week: ');
  const qualified = await prompt('Qualified: ');
  const ghost = await prompt('Ghost: ');
  const wrongFit = await prompt('Wrong fit: ');

  const goalProgress = await prompt('Goal progress %: ');
  const runwayMonth = await prompt('Runway (current/total, e.g., 7/18): ');

  console.log('\n✍️  Now write your journal entry...\n');

  // Calculate progress bar
  const progress = parseInt(goalProgress);
  const filled = Math.floor(progress / 10);
  const empty = 10 - filled;
  const progressBar = '█'.repeat(filled) + '░'.repeat(empty);

  // Create template
  const date = new Date().toISOString().split('T')[0];
  const template = `[Day ${day}] - "${title}"

[Write your journal entry here]

---
📊 Current State:
- Marketing/Building: ${marketing}% / ${building}%
- This Week's Conversations: ${totalConvos} (${qualified} qualified, ${ghost} ghost, ${wrongFit} wrong fit)
- Current Goal: First $ by Nov 30 [${progressBar}] ${goalProgress}%
- Runway: Month ${runwayMonth}
`;

  // Save file
  const journalDir = path.join(__dirname, '..', 'content', 'journal');
  if (!fs.existsSync(journalDir)) {
    fs.mkdirSync(journalDir, { recursive: true });
  }

  const filename = path.join(journalDir, `${date}.md`);
  fs.writeFileSync(filename, template);

  console.log(`\n✅ Created: ${filename}`);
  console.log('Open it to write your entry!\n');

  rl.close();
}

createJournalEntry().catch(console.error);
