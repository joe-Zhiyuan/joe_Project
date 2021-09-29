module.exports = { extends: ['@commitlint/config-conventional'] }

// 使用 commitlint 时报错：commitlint.config.js:1 SyntaxError: Invalid or unexpected token

// 原来是因为用 echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js 这条命令

// 生成的 commitlint.config.js 文件不是 utf8 格式的，将文件转成 utf8 格式的就没问题
