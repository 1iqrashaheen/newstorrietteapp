"use client";
import Link from "next/link";
import Image from "next/image";
import iphone17 from "../public/iPhone 17.png";
import iphone19 from "../public/iPhone 19.png";
import screen1 from "../public/Screen1.png";
import screen2 from "../public/Screen2.png";
import screen3 from "../public/Screen3.png";
import playstore from "../public/google-play-button.png";
import applestore from "../public/apple-store-button.png";

import tm from "../public/tm.png";
import copyright from "../public/copyright.png";
import { useState, useEffect } from "react";
import CookiesModal from "../components/CookiesModal";

export default function Home() {
  const [showDialog, setShowDialog] = useState(false);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowDialog(false);
  };

  useEffect(() => {
    const check = localStorage.getItem("cookieConsent");
    check == "true"
      ? setShowDialog(false)
      : check == "false"
        ? setShowDialog(false)
        : setShowDialog(true);
  }, []);

  return (
    <>
      <main className="bg-white px-6 pt-6 font-sans md:px-12 lg:pt-16">
        <div className="flex flex-col items-center justify-center space-y-12">
          <div className="flex w-full flex-col  items-center justify-center gap-16 md:flex-row lg:gap-32 lg:px-48">
            <Image
              unoptimized
              className="max-w-300 w-full  sm:w-1/3 "
              src={iphone19}
              alt="iPhone 14"
              width={300}
              height={300}
            />
            <Image
              unoptimized
              className="max-w-300 w-full sm:w-1/3"
              src={iphone17}
              alt="iPhone 17"
              width={300}
              height={300}
            />
          </div>

          <div className="flex w-full justify-center gap-4 md:gap-8">
            <Link
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.artsykidz.app&pli=1"
            >
              <Image
                unoptimized
                className="h-10 w-auto md:h-14"
                src={playstore.src}
                alt="available at play store"
                width={184}
                height={56}
              />
            </Link>
            <Link
              target="_blank"
              href="https://apps.apple.com/pk/app/storiette/id6456606515"
            >
              <Image
                unoptimized
                className="h-10 w-auto md:h-14"
                src={applestore.src}
                alt="available at apple store"
                width={184}
                height={56}
              />
            </Link>
          </div>
        </div>

        <div className="mt-20 flex flex-col  items-center justify-center space-y-8">
          <h1 className="text-3xl font-bold lg:text-3xl ">How it works?</h1>
          <div className="flex flex-row sm:flex-col md:flex-row items-top justify-top  lg:gap-4  lg:max-xl:px-20 sm:max-xl:px-40   md:max-xl:px-4 sm:px-9 3xl:">
            <div className="transition-max-w ease-in-out duration-500 lg:w-4/12">
              <Image unoptimized src={screen1} alt="iPhone 18" />
              <p className="font-pt-sans text-green-600 px-4 text-center mt-4 lg:mr-12 lg:ml-12  sm:mr-6 sm:ml-6 lg:text-x-large md:text-large sm:text-large sm:px-2  ">
                Read thrilling micro stories by skilled authors
              </p>
            </div>

            <div className="transition-max-w ease-in-out duration-500 lg:w-4/12">
              <Image unoptimized src={screen2} alt="iPhone 18" />
              <p className="font-pt-sans text-green-600 px-4 text-center mt-4 lg:mr-12 lg:ml-12  sm:mr-6 sm:ml-6 lg:text-x-large md:text-large sm:text-large sm:px-2  ">
                Challenge a skilled author's micro story by creating your own
                using the above guide
              </p>
            </div>

            <div className="transition-max-w ease-in-out duration-500 lg:w-4/12">
              <Image unoptimized src={screen3} alt="iPhone 19" />
              <p className="font-pt-sans text-green-600 px-6  text-center  mt-4 lg:mr-12 lg:ml-12 md:mr-8 md:ml-8 sm:mr-6 sm:ml-6  lg:text-x-large md:text-large sm:text-large sm:px-4 ">
                See who wins the duel
              </p>
            </div>
          </div>
        </div>

        <footer className="min-h-36 md:min-h-40 flex flex-col items-center justify-around space-y-5 px-4 py-5 md:px-8 lg:px-16 mt-16">
          <div className="w-full border-b border-gray-100 lg:pb-12  ">
            <h3 className="mb-2 mr-auto  text-center text-lg font-bold sm:text-lg md:text-left md:text-lg lg:mb-0">
              Reach Out to Us at:
            </h3>
            <div className="gap-17 flex flex-col items-center justify-between sm:gap-10 md:flex-row">
              <span className=" text-lg sm:text-base md:mb-0 md:text-base">
                hello@thestorietteapp.com
              </span>

              <div className="mb-5 mt-5 flex flex-col items-center justify-center gap-2 sm:mb-4 sm:mt-0 md:mb-0 md:flex-row md:justify-between lg:gap-5">
                <Link href="/terms-and-conditions">
                  <span className="cursor-pointer text-lg sm:text-base md:text-base">
                    Terms & Conditions
                  </span>
                </Link>
                <Link href="/privacy-policy">
                  <span className="cursor-pointer text-lg sm:text-base md:text-base">
                    Privacy Policy
                  </span>
                </Link>
                <Link href="/cookies-policy">
                  <span className="cursor-pointer text-lg sm:text-base md:text-base">
                    Cookie Policy
                  </span>
                </Link>
              </div>

              <span className="flex items-center gap-2 text-lg sm:text-base md:text-sm">
                <span className="text-lg">The Storiette App</span>
                <Image
                  unoptimized
                  className="w-15 relative bottom-2"
                  src={tm}
                  alt=""
                  width={15}
                  height={15}
                />
              </span>
            </div>
          </div>
          <span className="flex items-center gap-2 text-center md:text-left ">
            <Image
              unoptimized
              className="w-4"
              src={copyright}
              alt="copyright"
              width={16}
              height={16}
            />
            2024
            <Link target="_blank" href="http://www.hipsterstudiosllc.com/">
              <span className="text-green-600">Hipster Studios LLC.</span>
            </Link>
          </span>
          {showDialog && (
            <CookiesModal
              closeModal={() => {
                return handleAccept();
              }}
            />
          )}
        </footer>
      </main>
    </>
  );
}
