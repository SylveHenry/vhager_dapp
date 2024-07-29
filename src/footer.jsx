import React from "react";
import svg_logo from "../src/static/logo_with_word.svg";
import logo from "./vhager-logo.png";
import { FaTelegram, FaTwitter, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className=" flex h-fit  w-full justify-center items-center bg-[#272C3E] px-5 ">
        <div className=" flex flex-col gap-8 md:flex-row w-[100vw] justify-evenly pt-5">
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
            <div className="font-semibold text-xl">Raydium</div>
            <div className="flex flex-col gap-4 text-lg">
              <a href="#_" className="hover:opacity-60">
                About
              </a>
              <a href="#_" className="hover:opacity-60">
                Tokenomics
              </a>
              <a href="#_" className="hover:opacity-60">
                Roadmap
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="font-semibold text-xl">Dex Screener</div>
            <div className="flex flex-col gap-4 text-lg">
              <a href="#_" className="hover:opacity-60">
                Jupiter Dex
              </a>
              <a href="#_" className="hover:opacity-60">
                Coinmarketcap
              </a>
              <a href="#_" className="hover:opacity-60">
                Whitepaper
              </a>
            </div>
          </div>

          {/* facebook and twitter icons */}
          <div className="flex gap-3">
            <a href="#_" className=" ">
              <FaDiscord className="hover:text-green-400" />
            </a>

            <a href="#_">
              <FaTelegram className="hover:text-green-400"></FaTelegram>
            </a>
            <a href="#_">
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
