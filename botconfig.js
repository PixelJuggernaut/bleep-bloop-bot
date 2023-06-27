module.exports = {
  Admins: ["846879863226368030", "UserID"], // Admins of the bot, I don't know what this do. -Darren.
  ExpressServer: true, // If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", // Default prefix, Server Admins can change the prefix
  Port: 26031, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", // Support Server Link
  Token: process.env.Token || "MTA1MTQ2MDAyOTI1OTE5MDI5Mg.GEwzrp.1geDZyDOwUuKgf_PC6BuE_n13GL_D15rGIPQZs", // Discord Bot Token
  ClientID: process.env.Discord_ClientID || "1051460029259190292", // Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "WoCe8PxQq-VJACx7SPNC94lSV88JLt1C", // Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], // Discord OAuth2 Scopes
  ServerDeafen: true, // If you want bot to stay deafened
  DefaultVolume: 100, // Sets the default volume of the bot, You can change this number anywhere from 1 to 9007199254740991 (JS Integer limit. If you do set it to that, you're a monster.)
  CallbackURL: "/api/callback", // Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": true, // Make the bot stays in VC 24/7 (when you reboot the bot will **not** automatically rejoin.)
  CookieSecret: "nikonezna", // A cookie for you, cookie for me. make sure you change this value!
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", // URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", // Color of most embeds | Custom Hex value are supported. I.e: "#36393F"
  Permissions: 4331735296, // Bot Inviting Permissions
  Website: process.env.Website || "http://65.21.195.175:26031/", // Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  // If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.

  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Music", // The message shown
    type: "WATCHING", // PLAYING, WATCHING, LISTENING, STREAMING
    MESSAGE: "{members} members in {servers} servers", // Your bot status message
  },

  // Spotify Integration, allows you to enter a spotify link.
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "5ca819211ea44ea296c3ca68b563dcbd", // Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "4bc65fed60c34ff38f1ac66b86b6a4d9", // Spotify Client Secret
  },
};
