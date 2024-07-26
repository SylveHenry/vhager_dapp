import React, { useEffect, useState } from "react";
import "@fontsource-variable/inter";

const topcollection = [
  {
    img: "/src/assets/nft/infynft/animation.png",
    title: "Animation collection",
    by: "Nigntingo",
    item: "25",
  },
  {
    img: "./src/assets/nft/infynft/illustration.png",
    title: "Illustration collection",
    by: "Nigntingo",
    item: "25",
  },
  {
    img: "./src/assets/nft/infynft/photography.png",
    title: "Photography collection",
    by: "Nigntingo",
    item: "25",
  },
  {
    img: "./src/assets/nft/infynft/gif.png",
    title: "Gif collection",
    by: "Nigntingo",
    item: "25",
  },
];

const ourcollection = [
  {
    mainimg: "./src/assets/nft/infynft/img1.png",
    thumbnail: "./src/assets/nft/infynft/thumbnail1.png",
    name: "King",
    eth: "3.5",
    title: "Probably A Label #650",
  },
  {
    mainimg: "./src/assets/nft/infynft/img2.png",
    thumbnail: "./src/assets/nft/infynft/thumbnail2.png",
    name: "GoodBad",
    eth: "3.5",
    title: "Soki#0147",
  },
  {
    mainimg: "./src/assets/nft/infynft/img3.png",
    thumbnail: "./src/assets/nft/infynft/thumbnail3.png",
    name: "CrazyJelly",
    eth: "3.5",
    title: "Windows #768",
  },
  {
    mainimg: "./src/assets/nft/infynft/img4.png",
    thumbnail: "./src/assets/nft/infynft/thumbnail1.png",
    name: "Butterfly",
    eth: "3.5",
    title: "Probably A Label #650",
  },
  {
    mainimg: "./src/assets/nft/infynft/img5.png",
    thumbnail: "./src/assets/nft/infynft/thumbnail1.png",
    name: "Angel",
    eth: "3.5",
    title: "Soki#0147",
  },
  {
    mainimg: "./src/assets/nft/infynft/img6.png",
    thumbnail: "./src/assets/nft/infynft/thumbnail1.png",
    name: "Nigntingo",
    eth: "3.5",
    title: "Window#768",
  },
  {
    mainimg: "./src/assets/nft/infynft/img7.png",
    thumbnail: "./src/assets/nft/infynft/thumbnail4.png",
    name: "King",
    eth: "3.5",
    title: "Probably A Label #650",
  },
  {
    mainimg: "./src/assets/nft/infynft/img8.png",
    thumbnail: "./src/assets/nft/infynft/thumbnail5.png",
    name: "BigBull",
    eth: "3.5",
    title: "Window#768",
  },
];

const bestcreator = [
  {
    img: "./src/assets/nft/infynft/avatar1.png",
    name: "King",
    eth: "3.5",
  },
  {
    img: "./src/assets/nft/infynft/avatar2.png",
    name: "King",
    eth: "3.5",
  },
  {
    img: "./src/assets/nft/infynft/avatar3.png",
    name: "King",
    eth: "3.5",
  },
  {
    img: "./src/assets/nft/infynft/avatar4.png",
    name: "King",
    eth: "3.5",
  },
  {
    img: "./src/assets/nft/infynft/avatar5.png",
    name: "King",
    eth: "3.5",
  },
  {
    img: "./src/assets/nft/infynft/avatar6.png",
    name: "King",
    eth: "3.5",
  },
  {
    img: "./src/assets/nft/infynft/avatar7.png",
    name: "King",
    eth: "3.5",
  },
  {
    img: "./src/assets/nft/infynft/avatar7.png",
    name: "King",
    eth: "3.5",
  },
  {
    img: "./src/assets/nft/infynft/avatar7.png",
    name: "King",
    eth: "3.5",
  },
];

const accData = [
  {
    title: "What makes 'INFYNFT' unique compared to other platforms ?",
    content:
      "Unlike traditional NFT platforms, INFYNFT leverages the power of Web3 technology to provide a decentralized and boundless experience. The platform also offers an immersive metaverse environment, where users can engage with NFTs in a dynamic and interactive way.",
  },
  {
    title: "How can I participate as an artist in INFYNFT ?",
    content:
      "Unlike traditional NFT platforms, INFYNFT leverages the power of Web3 technology to provide a decentralized and boundless experience. The platform also offers an immersive metaverse environment, where users can engage with NFTs in a dynamic and interactive way.",
  },
  {
    title: "How does it work ?",
    content:
      "Unlike traditional NFT platforms, INFYNFT leverages the power of Web3 technology to provide a decentralized and boundless experience. The platform also offers an immersive metaverse environment, where users can engage with NFTs in a dynamic and interactive way.",
  },
];

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
        <div className="absolute top-0 opacity-10 w-full">
          <img
            src="./src/assets/nft/infynft/back.png"
            alt="backimg"
            className="mx-auto"
          />
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
              <img
                className="w-40"
                src="./src/static/logo_with_word.svg"
                alt="logo"
              />
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

        <div className="flex w-full md:max-w-[1120px] flex-col gap-10 md:gap-20 px-5 xl:px-0">
          {/* TOP SECTION */}
          <div
            className={`${
              isNavOpen ? "z-0" : "z-10"
            }  flex flex-col gap-5 md:gap-0 items-center justify-center md:flex-row md:justify-between xl:pr-20`}
          >
            <div className="md:max-w-[598px] flex flex-col gap-5 tracking-[0.01em]">
              <div className="text-[36px] lg:text-[52px] font-bold leading-[49px] lg:leading-[71px]">
                Winter is here. The $Storm is upon us.
              </div>
              <div className="lg:text-[22px] text-lg leading-[25px] md:leading-[30px] font-normal">
                <p>
                  {" "}
                  Amidst the icy winds of the crypto winter, a new $STORM has
                  emerged. Launched on the Arbitrum Blockchain, Winter Storm
                  aims to capitalize on the current market sentiment with its
                  deflationary token. $STORM will be utilized within the Winter
                  Storm ecosystem applications.
                </p>
                <p>Total Supply: 50 Trillion.</p>
                <p>
                  Contract Address: 0x47d6DbC99827cB929F274cd62Be2013c76E54a6a
                </p>
              </div>
              <div>
                <div className="flex gap-4">
                <a href="https://www.pinksale.finance/">
                  <button className="hover:border-white hover:border border border-transparent flex items-center gap-2 rounded px-3 py-2.5 text-sm font-semibold bg-gradient-to-r from-green-500 via-green-500 to-teal-500 text-white">
                    Get Storm
                    <img
                      src="./src/assets/nft/infynft/arrow.svg"
                      alt="arrow image"
                    />
                  </button>{" "}
                </a>  
                 <a href="https://airdrop.winterstorm.finance">
                  <button className="hover:border-white hover:border border border-transparent flex items-center gap-2 rounded px-3 py-2.5 text-sm font-semibold bg-gradient-to-r from-green-500 via-green-500 to-teal-500 text-white">
                  Airdrop Form
               
                  </button>{" "}
                </a>
                </div>
           
              </div>
            </div>
            <div className="max-w-[350px] md:max-w-[300px] w-full flex items-center md:justify-end">
              <img className="w-[300px]" src="./src/static/storm_logo.png" alt="round" />
            </div>
          </div>
          {/* TOP COLLECTION */}
          <div className="flex flex-col gap-5 md:gap-[37px] z-10">
            <div className="flex items-center justify-between">
              <div className="text-2xl md:text-[32px] font-semibold leading-[44px] tracking-[0.01em]">
                Top Collections
              </div>
              <div className="border-b-2 border-b-transparent hover:border-b-2 hover:border-green-600">
                <a
                  href="#_"
                  className="flex text-sm items-center gap-2 md:text-lg font-medium"
                >
                  See All
                  <img
                    src="./src/assets/nft/infynft/arrow.svg"
                    alt="arrow"
                    className="md:block hidden"
                  />
                </a>
              </div>
            </div>
            <div className="flex gap-4 overflow-auto">
              {topcollection.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="cursor-pointer flex min-w-[262px] hover:bg-gradient-to-r from-[#5EE616] to-[#209B72] sm:min-w-0 flex-col items-center justify-center gap-[7px] p-0.5 hover:rounded-xl bg-[#1E2230] rounded-xl"
                  >
                    <div className="bg-[#050C24] p-3 rounded-xl overflow-hidden">
                      <div className="w-full overflow-hidden rounded-lg">
                        <img
                          src={data.img}
                          alt="img"
                          className="hover:scale-125 delay-200 duration-300 ease-in-out"
                        />
                      </div>
                      <div className="flex w-full flex-col justify-start">
                        <div className="text-lg font-medium">{data.title}</div>
                        <div className="text-sm font-normal leading-[26px]">
                          by <span className="text-[#209B72]">@{data.by}</span>
                        </div>
                        <div className="text-sm font-normal leading-[26px]">
                          {data.item} Item
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* OUR COLLECTION */}
          <div className="flex flex-col gap-5 md:gap-[37px]">
            <div className="flex items-center justify-between">
              <div className="text-2xl md:text-[32px] font-semibold leading-[44px] tracking-[0.01em]">
                Our Collections
              </div>
              <div className="border-b-2 border-b-transparent hover:border-b-2 hover:border-green-600">
                <a
                  href="#_"
                  className="text-sm flex gap-2 md:text-lg font-medium"
                >
                  More Explore{" "}
                  <img
                    src="./src/assets/nft/infynft/arrow.svg"
                    alt="arrow"
                    className="md:block hidden"
                  />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[24px] place-items-center">
              {ourcollection.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="flex min-w-[262px] md:min-w-min flex-col items-center justify-center gap-5 rounded-[10px] border border-[#2F3548] p-3"
                  >
                    <div className="overflow-hidden rounded-[10px]">
                      <img
                        src={data.mainimg}
                        alt="img"
                        className="w-[350px] hover:scale-125 delay-200 duration-300 ease-in-out "
                      />
                    </div>
                    <div className="flex w-full flex-col gap-5">
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2 md:gap-1 lg:gap-2">
                            <img
                              src={data?.thumbnail}
                              alt="thumbnail"
                              className="rounded-full"
                            />
                            <span className="text-[9px] lg:text-sm whitespace-nowrap font-normal text-[#209B72]">
                              @{data.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <img
                              src="./src/assets/nft/infynft/eth.png"
                              alt="eth"
                            />
                            <span className="text-xs md:text-[9px] lg:text-xs font-normal">
                              3.5ETH
                            </span>
                          </div>
                        </div>
                        <div className="text-lg md:text-sm lg:text-lg whitespace-nowrap text-ellipsis font-medium">
                          {data?.title}
                        </div>
                      </div>
                      <div className="flex items-center justify-center rounded p-0.5 text-sm font-semibold text-[#5EE616] bg-gradient-to-r from-green-400 to-teal-600 hover:text-[#FDFBFB] w-fit mx-auto">
                        <button className="px-3 py-2.5 bg-[#050C24] hover:bg-gradient-to-r from-green-400 to-teal-600">
                          Buy now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* BEST COLLECTION */}
          <div className="flex flex-col gap-[37px]">
            <div className="text-[32px] font-semibold leading-[44px] tracking-[0.01em]">
              Best Creators and Seller
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-[24px]">
              {bestcreator.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="cursor-pointer flex min-h-[82px] w-full md:max-w-[357px] items-center justify-between gap-[7px] rounded-[10px] border border-[#2F3548] p-3 hover:bg-gradient-to-tr from-[#5FE716] to-[#209B72] group"
                  >
                    <div className="flex items-center justify-center gap-3 ">
                      <div className="relative">
                        <img
                          src={data.img}
                          alt="not found"
                          className="rounded"
                        />
                        <div className="text-red absolute -right-1 -top-1 flex h-[14px] w-[14px] rounded-full">
                          <img
                            src="./src/assets/nft/infynft/right.png"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="text-lg font-medium">@Milla_Wendt</div>
                        <div className="text-sm font-normal">12.25 ETH</div>
                      </div>
                    </div>
                    <div>
                      <svg
                        width="38"
                        height="38"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="19"
                          cy="19"
                          r="19"
                          fill="none"
                          className="fill-[#32353E] group-hover:fill-[#D2DADF]"
                        />
                        <path
                          d="M11 26C11 24.9391 11.4214 23.9217 12.1716 23.1716C12.9217 22.4214 13.9391 22 15 22H23C24.0609 22 25.0783 22.4214 25.8284 23.1716C26.5786 23.9217 27 24.9391 27 26C27 26.5304 26.7893 27.0391 26.4142 27.4142C26.0391 27.7893 25.5304 28 25 28H13C12.4696 28 11.9609 27.7893 11.5858 27.4142C11.2107 27.0391 11 26.5304 11 26Z"
                          stroke="#1B1E27"
                          strokeWidth="2.41667"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19 18C20.6569 18 22 16.6569 22 15C22 13.3431 20.6569 12 19 12C17.3431 12 16 13.3431 16 15C16 16.6569 17.3431 18 19 18Z"
                          stroke="#1B1E27"
                          strokeWidth="2.41667"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* FAQ SECTION */}
          <div className="flex flex-col justify-center items-center gap-5 px-5 lg:px-52 mb-12">
            <h1 className="text-[32px] font-semibold leading-[48px]">FAQ</h1>
            <div className="text-center font-normal text-lg mb-5">
              We are a huge marketplace dedicated to connecting great artists of
              all NFT with their fans and unique token collectors!
            </div>

            <div className="mx-auto flex w-full flex-col items-center justify-center">
              <div className="h-[2px] w-full bg-gradient-to-l from-[#1E2230] to-[rgba(30, 34, 48, 0)]]"></div>

              {accData.map((acc, index) => {
                return (
                  <div className="w-full" key={index}>
                    <Accordion title={acc.title} content={acc.content} />
                    <div className="h-[2px] w-full bg-gradient-to-l from-[#1E2230] to-[rgba(30, 34, 48, 0)]]"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* FOOTER*/}
        <div className="relative bg-[#1E2230] flex flex-col gap-4 sm:flex-row justify-between p-8 lg:p-12 drop-shadow-lg rounded-lg max-w-6xl px-5 w-11/12">
          <img
            src="./src/assets/nft/infynft/ctaback.svg"
            alt="cta"
            className="absolute top-0 left-0 w-24"
          />
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
                We are a huge marketplace dedicated to connecting great artists
                of all <span className="font-semibold">INFYNFT</span> with their
                fans and unique token collectors!
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
