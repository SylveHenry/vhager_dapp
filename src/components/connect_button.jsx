import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletConnectButton,
  WalletDisconnectButton,
  WalletModalButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import React from "react";

const buttonStyle = {
  backgroundColor: "#16B19A",
  zIndex: 40,
  lineHeight: "unset",
};
function ConnectButton({ className }) {
  const { wallet, connected } = useWallet();

  if (connected) {
    return (
      <div className="-translate-x-10 z-30">
        <WalletDisconnectButton style={buttonStyle} />
      </div>
    );
  } else {
    return (
      <div className="-translate-x-10 z-30">
        <WalletModalButton style={buttonStyle}>
          Connect Wallet
        </WalletModalButton>
      </div>
    );
  }
  // return (
  //   <WalletConnectButton className="hover:border-white hover:border border border-transparent whitespace-nowrap rounded px-3 py-2.5 text-sm font-semibold bg-gradient-to-r from-green-500 via-green-500 to-teal-500 text-white z-20" />
  // );
  // return (
  //   <button className="hover:border-white hover:border border border-transparent whitespace-nowrap rounded px-3 py-2.5 text-sm font-semibold bg-gradient-to-r from-green-500 via-green-500 to-teal-500 text-white z-20">
  //     Wallet Connect
  //   </button>
  // );
}

export default ConnectButton;
