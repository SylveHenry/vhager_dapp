import * as wallets from "@solana/wallet-adapter-wallets";

export const walletOptions = [
  new wallets.PhantomWalletAdapter(),
  new wallets.SolflareWalletAdapter(),
  new wallets.WalletConnectWalletAdapter(),
  new wallets.AlphaWalletAdapter(),
  new wallets.BitgetWalletAdapter(),
  new wallets.BitpieWalletAdapter(),
  new wallets.CloverWalletAdapter(),
  new wallets.Coin98WalletAdapter(),
  new wallets.CoinhubWalletAdapter(),
  new wallets.AvanaWalletAdapter(),
  new wallets.FractalWalletAdapter(),
  new wallets.HuobiWalletAdapter(),
  new wallets.HyperPayWalletAdapter(),
  new wallets.KeystoneWalletAdapter(),
  new wallets.KrystalWalletAdapter(),
  new wallets.LedgerWalletAdapter(),
  new wallets.MathWalletAdapter(),
];
