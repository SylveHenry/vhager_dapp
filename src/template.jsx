import React, { useEffect, useState } from "react";
import Footer from "./footer";
import "@fontsource-variable/inter";
import logo from "../src/static/storm_logo.png";
import svg_logo from "../src/static/logo_with_word.svg";
import bg from "../src/assets/nft/infynft/back.png";

const navitem = ["Home", "Explore", "Community", "Page", "Support"];

const InfyNft = () => {
  const [toggle, setToggle] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleClass = () => {
    setIsNavOpen(!isNavOpen);
    const closeAfterClick = document.querySelector("#nav-icon4");
    closeAfterClick?.classList?.toggle("open");
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-[#050C24] font-interfont">
      <div className="relative mx-auto pt-6 flex flex-col items-center justify-center text-[#D2DADF] bg-[url('./src/assets/nft/infynft/gradient.svg')] bg-cover">
        <div className="absolute top-0 z-[1] opacity-10 w-full">
          <img src={bg} alt="backimg" className="mx-auto" />
        </div>
        {/* HEADER */}
        <div
          className={`w-full flex md:block px-5 ${
            isScrolled &&
            "backdrop-blur-sm bg-white/20 fixed top-0 pt-5 z-40 backdrop-filter md:h-20 overscroll-none"
          }`}
        >
          <div className="md:max-w-[1120px] flex items-center justify-between md:px-0 md:gap-5 mb-8 md:mb-16 container md:mx-auto">
            <a href="#_" className="z-10">
              <img className="w-40" src={svg_logo} alt="logo" />
            </a>
            <div className="gap-5 md:flex hidden z-10">
              {navitem.map((data, index) => {
                return (
                  <a
                    href="#_"
                    key={index}
                    className={`hover:text-[#5EE616] hover:border-b-2 hover:border-[#5EE616] border-b-2 ${
                      index === 0
                        ? "border-[#5EE616] text-[#5EE616] border-b-2"
                        : "border-transparent"
                    }`}
                  >
                    {data}
                  </a>
                );
              })}
            </div>
            <div className="gap-2 md:flex hidden">
              <div className="gap-5 justify-center md:flex hidden z-10 group relative">
                <img
                  src="./src/assets/nft/infynft/searchicon.svg"
                  alt="searchicon"
                  className="cursor-pointer px-2"
                />
                <div className="px-2 bg-gray-700 py-3 group-hover:block hidden absolute top-10 right-0 rounded-lg">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="max-w-[150px] text-white text-sm bg-transparent focus:ring-0 border-transparent outline-none"
                      placeholder="Search here.."
                    />
                    <img
                      src="./src/assets/nft/infynft/searchicon.svg"
                      alt="searchicon"
                      className="cursor-pointer pr-5"
                    />
                  </div>
                </div>
              </div>
              <button className="hover:border-white hover:border border border-transparent whitespace-nowrap rounded px-3 py-2.5 text-sm font-semibold bg-gradient-to-r from-green-500 via-green-500 to-teal-500 text-white z-20">
                Wallet Connect
              </button>
            </div>
          </div>

          <button
            className="w-12 h-12 relative focus:outline-none md:hidden overscroll-none"
            onClick={() => {
              toggleClass();
              setToggle(!toggle);
            }}
          >
            <div className="block w-5 absolute left-1 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <span
                className={`
                    block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out
                    ${toggle ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                className={`
                    block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out
                    ${toggle && "opacity-0"}`}
              ></span>
              <span
                className={`
                    block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out
                    ${toggle ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
          <div
            className={`bg-gradient-to-r from-[#5EE616] to-[#209B72] rounded-xl absolute top-20 right-5 block md:hidden p-0.5 z-20 ${
              toggle ? "visible" : "invisible"
            }`}
          >
            <div className="bg-[#050C24] p-3 rounded-xl text-center">
              {navitem.map((data, index) => (
                <div key={index} className="p-3">
                  <span className="font-bold text-lg ">{data}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-5 xl:px-0 z-10 relative">
          <div className="page-item">
            <h3 className="uppercase text-center text-gradient mb-3 text-3xl font-semibold">
              storm staking pool
            </h3>
            <p className="text-center text-lg mb-3">
              Staking of the people, by the people and for the people.
            </p>

            {/* stake container */}
            <div className="border-2 rounded-lg border-green-800 ">
              <h3 className="capitalize text-lg border-b-2 border-green-800 items-center gap-2 flex p-4 py-2">
                <img src={logo} alt="" className="w-10" /> Stake STM to earn STM
              </h3>

              <div className="table-item">
                <p>APY</p>
                <p>0%</p>
              </div>
              <div className="table-item">
                <p>Available $STM</p>
                <p>0</p>
              </div>
              <div className="table-item">
                <p>My Stakings</p>
                <p>0</p>
              </div>
              <div className="table-item">
                <p>Pending Rewards</p>
                <p>0</p>
              </div>
              <div className="table-item">
                <p>Unpaid Rewards</p>
                <p>0</p>
              </div>
              <div className="table-item">
                <p>Total Staked</p>
                <p>0.00</p>
              </div>

              <div className="flex flex-col py-5 px-4 gap-y-3 z-20">
                <button className="hover:border hover:border-white border border-transparent btn font-semibold text-white rounded-lg shadow-md bg-gradient-to-r from-[#5FE716] via-[#209B72] to-teal-500 cursor-pointer ">
                  Open Pool
                </button>
                <button className="  border border-transparent btn font-semibold text-white rounded-lg bg-gradient-to-r from-[#5FE716] via-[#209B72] to-teal-500 shadow-md hover:border-green-600 hover:bg-none hover:text-green-600 transition-all delay-200 ease-in-out">
                  GET STM
                </button>
              </div>
            </div>
          </div>
          <div className="page-item">
            <h3 className="uppercase text-center text-gradient mb-3 text-3xl font-semibold">
              REWARD SYSTEM FOR HOLDERS
            </h3>
            <p className="text-center text-lg mb-3">
              Storm Holders reward panel.
            </p>

            {/* stake container */}
            <div className="border-2 rounded-lg border-green-800 ">
              <h3 className="capitalize text-lg border-b-2 border-green-800 items-center gap-2 flex p-4 py-2">
                <img src={logo} alt="" className="w-10" /> Hold $STM to Earn
                $ETH
              </h3>

              <div className="table-item">
                <p>APY</p>
                <p>0%</p>
              </div>
              <div className="table-item">
                <p>Pending Rewards</p>
                <p>0 ETH</p>
              </div>
              <div className="table-item">
                <p>Last Updated Time</p>
                <p>...</p>
              </div>
              <div className="table-item">
                <p>$STM in Wallet</p>
                <p>0 STM</p>
              </div>

              <div className="flex flex-col py-5 px-4 gap-y-3 z-20">
                <button className="hover:border hover:border-white border border-transparent btn font-semibold text-white rounded-lg shadow-md bg-gradient-to-r from-[#5FE716] via-[#209B72] to-teal-500 cursor-pointer ">
                  Open Pool
                </button>
                <button className="  border border-transparent btn font-semibold text-white rounded-lg bg-gradient-to-r from-[#5FE716] via-[#209B72] to-teal-500 shadow-md hover:border-green-600 hover:bg-none hover:text-green-600 transition-all delay-200 ease-in-out">
                  GET STM
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* FOOTER*/}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default InfyNft;

export const Accordion = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);
  return (
    <div
      className="w-full cursor-pointer bg-transparent shadow-sm"
      onClick={toggleExpanded}
    >
      <div className="flex h-16 select-none flex-row items-center justify-between text-left md:h-16">
        <h5 className="flex-1 text-sm font-normal leading-tight sm:text-lg md:text-lg">
          {title}
        </h5>
        <div className="flex h-6 w-6 items-center justify-center rounded-full">
          {expanded ? "-" : "+"}
        </div>
      </div>
      <div
        className={`overflow-hidden pt-0 transition-[max-height] duration-500 ease-in ${
          expanded ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="pb-4 text-left text-xs font-normal tracking-[0.01em] opacity-60 sm:text-sm leading-[28px]">
          {content}
        </p>
      </div>
    </div>
  );
};
