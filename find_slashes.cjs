const fs = require('fs');
const path = require('path');

function walk(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('\\')) {
        console.log(`Backslash found in ${fullPath}`);
        const lines = content.split('\n');
        lines.forEach((line, i) => {
          if (line.includes('\\')) {
            console.log(`  Line ${i + 1}: ${line.trim()}`);
          }
        });
      }
    }
  });
}

walk('src');
