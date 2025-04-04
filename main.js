require('dotenv').config();
const DiscordRPC = require('discord-rpc');

const clientId = process.env.DISCORD_CLIENT_ID; //Change it to your clientId generated in Discord Developer Portal

DiscordRPC.register(clientId);
const rpc = new DiscordRPC.Client({ transport: 'ipc' });

const startTimestamp = Math.floor(new Date('2005-01-17T00:00:00Z').getTime() / 1000); //change it to the Timestamp you want. For example: new Date() if you want a counter from the moment the file is executed

async function setActivity() {
    if (!rpc) return;

    await rpc.setActivity({
        //modify the data texts as you prefer
        details: "Since Jan 17, 2005",
        state: "Playing the life",
        startTimestamp: startTimestamp,
        largeImageKey: "amigo", //image name added in discord developer portal > Rich Presence > Art Assets
        largeImageText: "Being your friend", //image hover text
        smallImageKey: "art", //image name added in discord developer portal > Rich Presence > Art Assets
        smallImageText: "FX bb 🔥", //image hover text
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
    setInterval(setActivity, 15000);
});

rpc.login({ clientId }).catch(console.error);