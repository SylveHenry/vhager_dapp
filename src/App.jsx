import { useState, useMemo } from "react";
import "./App.css";
import InfyNft from "./template";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import {
  WalletModalButton,
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import ConnectButton from "./components/connect_button";
import "@solana/wallet-adapter-react-ui/styles.css";
import { walletOptions } from "./WalletOptions";

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => walletOptions, []);
  return (
    <>
      <ConnectionProvider endpoint="http://localhost:8899">
        <WalletProvider autoConnect wallets={wallets}>
          <WalletModalProvider>
            <InfyNft />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;
