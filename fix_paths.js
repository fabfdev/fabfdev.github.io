const fs = require('fs');
const path = require('path');

function fixPaths() {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Fix absolute paths to relative paths
  content = content.replace(/href="\/favicon.ico"/g, 'href="./favicon.ico"');
  content = content.replace(/src="\/_expo\//g, 'src="./_expo/');
  
  fs.writeFileSync(indexPath, content);
  console.log('Fixed paths in index.html');
}

fixPaths();
