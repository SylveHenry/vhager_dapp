import React, { useEffect, useState } from "react";
import Footer from "./footer";
import "@fontsource-variable/inter";
import logo from "../src/static/storm_logo.png";
import svg_logo from "../src/static/logo_with_word.svg";
import bg from "../src/assets/nft/infynft/back.png";
import ConnectButton from "./components/connect_button";
import { useDisclosure, useToast } from "@chakra-ui/react";
import OpenPoolModal from "./components/OpenPoolModal";
import { useWallet } from "@solana/wallet-adapter-react";

const navitems = [
  {
    text: "about",
    link: "https://winterstorm.finance/#about",
  },
  {
    text: "tokenomics",
    link: "https://winterstorm.finance/#tokenomics",
  },
  {
    text: "roadmap",
    link: "https://winterstorm.finance/#roadmap",
  },
  {
    text: "community",
    link: "https://winterstorm.finance/#community",
  },
  {
    text: "whitepaper",
    link: "https://docs.winterstorm.finance",
  },
];

const InfyNft = () => {
  const [toggle, setToggle] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const toggleClass = () => {
    setIsNavOpen(!isNavOpen);
    const closeAfterClick = document.querySelector("#nav-icon4");
    closeAfterClick?.classList?.toggle("open");
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const toast = useToast();
  // wallet and wallet information
  const { wallet, connected } = useWallet();
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
    <div className="bg-[#050C24] font-interfont flex flex-col justify-between items-center min-h[100vh] flex-grow">
      <div className="w-full">
        <OpenPoolModal isOpen={isOpen} onClose={onClose} />
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
                {navitems.map((data, index) => {
                  return (
                    <a
                      href={data.link}
                      key={index}
                      className={`hover:text-[#5EE616] hover:border-b-2 uppercase hover:border-[#5EE616] border-b-2 ${
                        index === 0
                          ? "border-[#5EE616] text-[#5EE616] border-b-2"
                          : "border-transparent"
                      }`}
                    >
                      {data.text}
                    </a>
                  );
                })}
              </div>
              <div className="gap-2 md:flex hidden">
                <ConnectButton />
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
                {navitems.map((data, index) => (
                  <div key={index} className="p-3">
                    <a
                      href={data.link}
                      className="font-bold text-lg uppercase "
                    >
                      {data.text}
                    </a>
                  </div>
                ))}
                <ConnectButton />
              </div>
            </div>
          </div>

          <div className="px-5 xl:px-0 z-10 relative">
            <div className="page-item">
              <h3 className="uppercase text-center text-gradient mb-3 text-3xl font-semibold font-cartoon">
                VHAGAR staking pool
              </h3>
              <p className="text-center text-lg mb-3">
                Vhagar on Solana Staking Pool.
              </p>

              {/* stake container */}
              <div className="border-2 rounded-lg border-green-800 ">
                <h3 className="capitalize text-lg border-b-2 border-green-800 items-center gap-2 flex p-4 py-2">
                  <img src={logo} alt="" className="w-10" /> Stake VGR to earn
                  VGR
                </h3>

                <div className="table-item">
                  <p>APY</p>
                  <p>0%</p>
                </div>
                <div className="table-item">
                  <p>Available $VGR</p>
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
                  <button
                    className="hover:border hover:border-white border border-transparent btn font-semibold text-white rounded-lg shadow-md bg-gradient-to-r from-[#5FE716] via-[#209B72] to-teal-500  cursor-pointer "
                    onClick={() => {
                      if (connected) {
                        onOpen.call();
                      } else {
                        toast({
                          title: "Access Denied.",
                          description:
                            "Please Connect your wallet to access this feature",
                          status: "warning",
                          duration: 9000,
                          isClosable: true,
                        });
                      }
                    }}
                  >
                    Open Pool
                  </button>
                  <button className="  border border-transparent btn font-semibold text-white rounded-lg bg-gradient-to-r from-[#5FE716] via-[#209B72] to-teal-500 shadow-md hover:border-green-600 hover:bg-none hover:text-green-600 transition-all delay-200 ease-in-out">
                    GET VGR
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="page-item">
            <h3 className="uppercase text-center text-gradient mb-3 text-3xl font-semibold font-cartoon">
              REWARD SYSTEM FOR HOLDERS
            </h3>
            <p className="text-center text-lg mb-3">
              Storm Holders reward panel.
            </p>

            {/* stake container 
            <div className="border-2 rounded-lg border-green-800 ">
              <h3 className="capitalize text-lg border-b-2 border-green-800 items-center gap-2 flex p-4 py-2">
                <img src={logo} alt="" className="w-10" /> Hold $VGR to Earn
                $SOL
              </h3>

              <div className="table-item">
                <p>APY</p>
                <p>0%</p>
              </div>
              <div className="table-item">
                <p>Pending Rewards</p>
                <p>0 SOL</p>
              </div>
              <div className="table-item">
                <p>Last Updated Time</p>
                <p>...</p>
              </div>
              <div className="table-item">
                <p>$VGR in Wallet</p>
                <p>0 VGR</p>
              </div>

              <div className="flex flex-col py-5 px-4 gap-y-3 z-20">
                <button className="hover:border hover:border-white border border-transparent btn font-semibold text-white rounded-lg shadow-md bg-gradient-to-r from-[#5FE716] via-[#209B72] to-teal-500 cursor-pointer ">
                  Open Pool
                </button>
                <button className="  border border-transparent btn font-semibold text-white rounded-lg bg-gradient-to-r from-[#5FE716] via-[#209B72] to-teal-500 shadow-md hover:border-green-600 hover:bg-none hover:text-green-600 transition-all delay-200 ease-in-out">
                  GET VGR
                </button>
              </div>
            </div>
           </div> */}
          </div>
          {/* FOOTER*/}
        </div>
      </div>
      <div className="text-white w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default InfyNft;
