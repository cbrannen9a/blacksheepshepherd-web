import React, { Fragment, FC } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "gatsby";
import type { Route, Colors } from "../../../types";
import { SanityImageAsset } from "@sanity/asset-utils";
import { Image } from "../../Common";

const Header: FC<Props> = ({ brand, siteTitle, mainNav, colors }) => {
  return (
    <Popover className="relative">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6"
        style={{ backgroundColor: colors.primary }}
      >
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">{siteTitle}</span>
              <Image
                value={brand}
                isInline={false}
                alt={siteTitle}
                height={60}
                width={60}
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button
              style={{ backgroundColor: colors.background }}
              className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset"
            >
              <span className="sr-only">Open menu</span>
              <div className="h-6 w-6" aria-hidden="true">
                <svg
                  height="24px"
                  id="Layer_1"
                  // style={{"enable-background:new 0 0 32 32;"}}
                  version="1.1"
                  viewBox="0 0 32 32"
                  width="24px"
                  // xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
                </svg>
              </div>
            </Popover.Button>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {mainNav.map((navItem) => (
              <Link
                key={navItem.title}
                style={{
                  backgroundColor: colors.accent,
                  color: colors.secondary,
                }}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white"
                to={navItem.slug?.current ? `/${navItem.slug?.current}` : "/"}
              >
                {navItem.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link to="/">
                    <span className="sr-only">{siteTitle}</span>
                    <Image
                      value={brand}
                      isInline={false}
                      alt={siteTitle}
                      height={60}
                      width={60}
                    />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset">
                    <span className="sr-only">Close menu</span>
                    <div className="h-6 w-6" aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g id="close">
                          <path
                            id="x"
                            d="M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z"
                          />
                        </g>
                      </svg>
                    </div>
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {mainNav.map((navItem) => (
                    <Link
                      key={navItem.title}
                      to={
                        navItem.slug?.current
                          ? `/${navItem.slug?.current}`
                          : "/"
                      }
                      style={{
                        backgroundColor: colors.accent,
                        color: colors.secondary,
                      }}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium">
                        {navItem.title}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

interface Props {
  mainNav: Route[];
  colors: Colors;
  siteTitle: string;
  brand: { asset: SanityImageAsset };
}

export default Header;
