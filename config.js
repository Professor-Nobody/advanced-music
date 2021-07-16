module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "n", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/uYNW24ZAs7", //Support Server Link
  Token: process.env.Token || "ODY0ODcwMjM5OTc0NzE5NDk5.YO7vLQ.7KULJ1hoji05DHu8v6w3_xvaNR4", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "864870239974719499", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "g70ZmpEGXb6R_AYv_gu-5OFxMt9JpkxM", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is EPIC", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "5b9de79588314f63ac345550bc1b82b0", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "0f360cc3070943c9a3f902c4327a0256", //Spotify Client Secret
  },
};
