const path = require('path');
const dotenv = require('dotenv');
const DiscordRPC = require('discord-rpc');

// Detecta o caminho correto do .env dependendo se está em desenvolvimento ou empacotado (.exe)
let envPath;

if (process.pkg) {
    // Quando empacotado com pkg, o caminho do .env deve estar ao lado do executável
    envPath = path.join(path.dirname(process.execPath), '.env');
} else {
    // Durante desenvolvimento, o .env está no mesmo diretório que este script
    envPath = path.join(__dirname, '.env');
}

// Carrega o arquivo .env
dotenv.config({ path: envPath });

console.log("✅ Arquivo .env carregado?");
console.log("🔑 Client ID:", process.env.DISCORD_CLIENT_ID);

// Verifica se o Client ID foi carregado corretamente
if (!process.env.DISCORD_CLIENT_ID) {
    console.error("❌ Client ID não encontrado. Verifique o arquivo .env.");
    process.exit(1); // Encerra o script se não encontrar o Client ID
}

const clientId = process.env.DISCORD_CLIENT_ID;
DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

const startTimestamp = Math.floor(new Date('2005-01-17T00:00:00Z').getTime() / 1000);

async function setActivity() {
    if (!rpc) return;

    await rpc.setActivity({
        details: "Since Jan 17, 2005",
        state: "Playing the life",
        startTimestamp: startTimestamp,
        largeImageKey: "amigo",
        largeImageText: "Being your friend",
        smallImageKey: "art",
        smallImageText: "FX bb 🔥",
        partyId: "ae488379-351d-4a4f-ad32-2b9b01c91657",
        partySize: 1,
        partyMax: 2,
        buttons: [
            { label: "GitHub", url: "https://github.com/JohanVPS" }
        ]
    });

    console.log("✅ Rich Presence atualizado!");
}

rpc.on('ready', async () => {
    await setActivity();
    setInterval(setActivity, 15_000); // Atualiza a cada 15s
});

rpc.login({ clientId }).catch(console.error);