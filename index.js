const { execSync } = require('child_process');

try {
  // Configuração do Husky
  execSync('npx husky install');
  
  // Configuração do Commitlint
  execSync('npx husky add .husky/commit-msg "npx commitlint --edit $1"');
  
  console.log('Configurações do Husky e do Commitlint instaladas com sucesso.');
} catch (error) {
  console.error('Erro ao instalar as configurações do Husky e do Commitlint:', error);
}