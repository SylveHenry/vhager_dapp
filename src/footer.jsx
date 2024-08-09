import React from "react";
import svg_logo from "../src/static/logo_with_word.svg";
import logo from "./vhagar-logo.png";
import { FaTelegram, FaTwitter, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="flex h-fit w-full justify-center items-center bg-[#272C3E] px-5">
        <div className="flex flex-col gap-8 md:flex-row w-[100vw] justify-evenly pt-5">
          <div className="hidden md:block max-w-[300px] w-[16%]">
            <img src={logo} alt="" className="w-full h-auto" />
          </div>

          <div className="flex max-w-[282px] flex-col gap-8">
            <a href="#_">
              <img src={svg_logo} className="w-32" alt="logo" />
            </a>
            <div className="text-lg">
              <span className="font-semibold">Vhagar</span> on Solana.
              <br /> Not just a token!
            </div>
            <div className="-mt-1 hidden md:block text-sm">
              &copy; 2024 Vhagar. All Rights Reserved.
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-10">
            <a href="https://raydium.io/" className="font-semibold text-xl hover:opacity-60" target="_blank" rel="noopener noreferrer">
              Raydium
            </a>
            <div className="flex flex-col gap-4 text-lg">
              <a href="https://vhagar.finance/#about" className="hover:opacity-60" target="_blank" rel="noopener noreferrer">
                About
              </a>
              <a href="https://vhagar.finance/#tokenomics" className="hover:opacity-60" target="_blank" rel="noopener noreferrer">
                Tokenomics
              </a>
              <a href="https://vhagar.finance/#roadmap-container" className="hover:opacity-60" target="_blank" rel="noopener noreferrer">
                Roadmap
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-10">
            <a href="https://dexscreener.com/" className="font-semibold text-xl hover:opacity-60" target="_blank" rel="noopener noreferrer">
              Dex Screener
            </a>
            <div className="flex flex-col gap-4 text-lg">
              <a href="https://jup.ag/" className="hover:opacity-60" target="_blank" rel="noopener noreferrer">
                Jupiter Dex
              </a>
              <a href="https://coinmarketcap.com/" className="hover:opacity-60" target="_blank" rel="noopener noreferrer">
                Coinmarketcap
              </a>
              <a href="https://birdeye.so/" className="hover:opacity-60" target="_blank" rel="noopener noreferrer">
                BirdEye
              </a>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex gap-3">
            <a href="https://discord.com/" className=" " target="_blank" rel="noopener noreferrer">
              <FaDiscord className="hover:text-green-400" />
            </a>
            <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="hover:text-green-400"></FaTelegram>
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-green-400"></FaTwitter>
            </a>
          </div>
          
          <div className="-mt-1 md:hidden block">
            &copy; 2024 Vhagar. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;