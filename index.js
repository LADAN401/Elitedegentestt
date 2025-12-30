import 'dotenv/config';
import { simulateEvents } from './services/eventListener.js';
import { sendTelegramMessage } from './services/telegramSender.js';
import { decodeIntent } from './services/intentDecoder.js';

const demoWallets = [
  { address: '0xABC123...', name: 'Wallet A' },
  { address: '0xDEF456...', name: 'Wallet B' }
];

console.log('🚀 Smart Wallet Intent Decoder Demo Bot Started');

setInterval(async () => {
  const event = simulateEvents(demoWallets);
  const intent = decodeIntent(event);
  await sendTelegramMessage(intent);
}, 10000);
