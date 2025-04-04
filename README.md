# discord-activity

# Discord Rich Presence - Custom Status

---

### 🚀 Features

- Elapsed time since a date (Ex. 01/17/2005) 
- Custom large and small images with hover text
- Clickable button (e.g., GitHub)
- Auto-update every 15 seconds

---

### 📦 Requirements

- Node.js
- A Discord application created in the [Discord Developer Portal](https://discord.com/developers/applications)

---

### 🔐 Environment Variables

Create a `.env` file in your project root:

```env
DISCORD_CLIENT_ID=your_client_id_here

- This file is already listed in .gitignore for security.

```
### Images

The images (e.g., amigo, art) must be uploaded under
"Rich Presence → Art Assets" in your Discord application settings.

### Security
The clientId is loaded from .env to prevent exposing it in your code.

Never share your .env file or commit it to public repositories.