
import { Telegraf } from "telegraf";

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  console.error("❌ BOT_TOKEN is missing");
  process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Hello World 👋");
});

bot.on("text", (ctx) => {
  ctx.reply("Bot is alive ✅");
});

bot.launch()
  .then(() => console.log("🤖 Bot started successfully"))
  .catch(err => console.error("Bot failed:", err));

// Graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
