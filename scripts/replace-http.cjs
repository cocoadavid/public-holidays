// scripts/replace-http.cjs
const fs = require("fs");
const path = require("path");

const assetsDir = path.resolve("dist/assets");

fs.readdirSync(assetsDir).forEach(file => {
  if (file.endsWith(".js")) {
    const filePath = path.join(assetsDir, file);
    let content = fs.readFileSync(filePath, "utf8");

    const updated = content.replace(/http:\/\//g, "https://");

    fs.writeFileSync(filePath, updated, "utf8");
    console.log(`✔️ Replaced in ${file}`);
  }
});
