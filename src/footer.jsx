import React from "react";
import svg_logo from "./static/logo_with_word.svg";
function Footer() {
  return (
    <>
      <div className="relative bg-[#1E2230] flex flex-col gap-4 sm:flex-row justify-between p-8 lg:p-12 drop-shadow-lg rounded-lg max-w-6xl px-5 py-10 w-11/12">
        <img src={svg_logo} alt="cta" className="absolute top-1 left-0 w-32" />
        <div className="text-center md:text-left text-xl md:text-2xl font-bold md:whitespace-nowrap">
          Subscribe to NFT<br></br>
          <span className="text-sm leading-[28px] tracking-[0.01em]">
            Subscribe for receiving valuable newsletters.
          </span>
        </div>
        <div className="flex gap-2 items-center justify-center max-w-xs lg:max-w-md w-full">
          <input
            type="text"
            className="focus:ring-1 focus:ring-white rounded-lg lg:py-2 flex-1 appearance-none border border-[#272C3E] w-full py-1 px-4 bg-[#1E2230] text-gray-200 placeholder-gray-400 shadow-sm text-sm md:text-base lg:text-lg focus:outline-none "
            placeholder="Enter your email"
          />
          <button
            className="hover:border hover:border-white border border-transparent px-4 py-1 lg:py-2 text-sm md:text-base lg:text-lg font-semibold text-white rounded-lg shadow-md bg-gradient-to-r from-[#5FE716] via-[#209B72] to-teal-500"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="-mt-20 flex h-fit py-8 md:py-10 w-full justify-center items-center bg-[#272C3E] px-5 xl:px-20">
        <div className="max-w-[1121px] flex flex-col gap-8 md:flex-row w-full justify-between pt-20">
          <div className="flex max-w-[282px] flex-col gap-8">
            <a href="#_">
              <img src="./src/assets/nft/infynft/logo.svg" alt="logo" />
            </a>
            <div className="text-lg">
              We are a huge marketplace dedicated to connecting great artists of
              all <span className="font-semibold">INFYNFT</span> with their fans
              and unique token collectors!
            </div>
            <div className="-mt-1 hidden md:block text-sm">
              &copy; 2023 INFYNFT. All Rights Reserved.
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="font-semibold text-xl">Company</div>
            <div className="flex flex-col gap-4 text-lg">
              <a href="#_" className="hover:opacity-60">
                About
              </a>
              <a href="#_" className="hover:opacity-60">
                Careers
              </a>
              <a href="#_" className="hover:opacity-60">
                Press
              </a>
              <a href="#_" className="hover:opacity-60">
                Engineering Blog
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="font-semibold text-xl">Customer</div>
            <div className="flex flex-col gap-4 text-lg">
              <a href="#_" className="hover:opacity-60">
                Clinet Support
              </a>
              <a href="#_" className="hover:opacity-60">
                Latest news
              </a>
              <a href="#_" className="hover:opacity-60">
                Company Details
              </a>
              <a href="#_" className="hover:opacity-60">
                Who we are{" "}
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="#_" className=" ">
              <svg
                className="hover:fill-green-400"
                stroke="currentColor"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,23.00025 C0,23.55225 0.44775,24 1.0005,24 L12.75,24 L12.75,15 L9.75,15 L9.75,11.25 L12.75,11.25 L12.75,8.25 C12.75,5.15025 14.71275,3.62475 17.478,3.62475 C18.8025,3.62475 19.941,3.72375 20.2725,3.76725 L20.2725,7.00725 L18.35475,7.008 C16.851,7.008 16.5,7.72275 16.5,8.77125 L16.5,11.25 L20.25,11.25 L19.5,15 L16.5,15 L16.56,24 L23.00025,24 C23.55225,24 24,23.55225 24,23.00025 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0"
                ></path>
              </svg>
            </a>

            <a href="#_">
              <svg
                className="hover:fill-green-400"
                stroke="currentColor"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1.2em"
                width="1.2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a href="#_">
              <svg
                className="hover:fill-green-400"
                stroke="currentColor"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
              </svg>
            </a>
          </div>
          <div className="-mt-1 md:hidden block">
            &copy; {new Date().getFullYear()} INFYNFT. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
