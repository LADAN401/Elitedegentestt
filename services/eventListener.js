export function simulateEvents(wallets) {
  const wallet = wallets[Math.floor(Math.random() * wallets.length)];
  const amount = (Math.random() * 500000000).toFixed(2);
  const token = 'REKTTOTHEMOON';
  const action = Math.random() > 0.5 ? 'BUY' : 'SELL';

  return {
    wallet: wallet.address,
    walletName: wallet.name,
    action,
    token,
    amount,
    priceUSD: (Math.random() * 0.000001).toFixed(8),
    mc: (Math.random() * 50000).toFixed(0)
  };
}
