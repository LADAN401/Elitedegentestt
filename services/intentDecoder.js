export function decodeIntent(event) {
  let intent = '';
  let confidence = 0;
  const signals = [];

  if (event.action === 'BUY') {
    if (event.amount > 200000000) {
      intent = 'Sniper Entry';
      confidence = 85;
      signals.push('Large buy', 'Fast transaction', 'New token');
    } else {
      intent = 'Accumulation';
      confidence = 70;
      signals.push('Small buy', 'Holding pattern');
    }
  } else if (event.action === 'SELL') {
    if (event.amount > 200000000) {
      intent = 'Stealth Dump';
      confidence = 80;
      signals.push('Large sell', 'No rebuy detected', 'Possible exit liquidity');
    } else {
      intent = 'Profit Taking';
      confidence = 65;
      signals.push('Partial sell', 'After price increase');
    }
  }

  return { ...event, intent, confidence, signals };
}
