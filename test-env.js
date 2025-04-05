const dotenv = require('dotenv');
const path = require('path');

const envPath = path.resolve(__dirname, process.pkg ? './.env' : '../.env');
dotenv.config({ path: envPath });

console.log("🔑 Client ID:", process.env.DISCORD_CLIENT_ID || "❌ Não encontrado!");
