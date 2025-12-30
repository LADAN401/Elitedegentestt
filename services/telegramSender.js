import { Telegraf } from 'telegraf';
import 'dotenv/config';

const bot = new Telegraf(process.env.BOT_TOKEN);

export async function sendTelegramMessage(data) {
  const message = `
🔴 ${data.action} detected - Smart Wallet Intent
Wallet: ${data.walletName} (${data.wallet})
Token: ${data.token}
Amount: ${data.amount} ($${data.priceUSD})
Market Cap: $${data.mc}

🧠 Intent: ${data.intent} (Confidence: ${data.confidence}%)
Signals:
- ${data.signals.join('\n- ')}
`;

  try {
    await bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID, message);
    console.log('Message sent:', data.wallet, data.intent);
  } catch (err) {
    console.error('Telegram send error:', err.message);
  }
}
