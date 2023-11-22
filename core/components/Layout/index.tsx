"use client";

import {
  ArrowUpRightIcon,
  CheckIcon,
  ChevronDownIcon,
  CommandPaletteIcon,
  DeviceDesktopIcon,
  GearIcon,
  HomeIcon,
  MarkGithubIcon,
  NorthStarIcon,
  PaperclipIcon,
  SparkleFillIcon,
  StackIcon,
  TelescopeIcon,
  ThreeBarsIcon,
} from "@primer/octicons-react";
import { Toaster } from "react-hot-toast";
import { SignOut } from "@/supabase/auth/container/sign-out";
import { Badge } from "@tremor/react";
import { UserAvatar } from "../UserAvatar";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Content, Portal, Root, Trigger } from "@radix-ui/react-popover";
import { useQuery } from "@tanstack/react-query";

// do not cache this layout
export const revalidate = 0;

export const mode = () => {
  const fetchMode = async () => {
    if (!localStorage.getItem("mode")) localStorage.setItem("mode", "Visual");

    return localStorage.getItem("mode");
  };

  const { data } = useQuery({
    queryKey: ["mode"],
    queryFn: fetchMode,
    refetchInterval: 1,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchIntervalInBackground: true,
  });

  return data;
};

export const DashLayout = ({ children, user, href }: any) => {
  const [open, setOpen] = useState(false);

  const Sidebar = () => {
    return (
      <>
        <div className="flex h-12 max-h-12 items-center border-b px-6 border-gray-800">
          <h4
            className="mb-4 md:mb-0 text-2xl md:text-xl text-white truncate font-farray"
            title="Botway"
          >
            Botway
          </h4>
        </div>
        <div className="-mt-1">
          <nav>
            <ul>
              <div className="border-b py-5 px-6 border-gray-800">
                <div className="flex space-x-3 mb-2 font-normal">
                  <Badge>
                    <span className="font-mono">Services</span>
                  </Badge>
                </div>
                <ul className="space-y-1">
                  <a
                    className="block focus-visible:outline-none focus-visible:ring-0 focus:ring-0"
                    target="_self"
                    href="/"
                  >
                    <button className="group flex max-w-full cursor-pointer items-center space-x-2 border-gray-800 py-[5px] font-normal outline-none focus-visible:z-10 focus-visible:ring-1">
                      <StackIcon size={24} className="fill-white h-6 w-6" />
                      <span
                        title="My Projects"
                        className="w-full truncate text-base text-gray-400 hover:text-white transition"
                      >
                        My Projects
                      </span>
                    </button>
                  </a>
                </ul>
                <ul className="space-y-1">
                  <a
                    className="block focus-visible:outline-none focus-visible:ring-0 focus:ring-0"
                    target="_self"
                    href="/ai"
                  >
                    <button className="group flex max-w-full cursor-pointer items-center space-x-2 border-gray-800 py-[5px] font-normal outline-none focus-visible:z-10 focus-visible:ring-1">
                      <SparkleFillIcon
                        size={24}
                        className="fill-blue-700 h-6 w-6"
                      />
                      <span
                        title="Botway AI"
                        className="w-full truncate text-base text-gray-400 hover:text-white transition"
                      >
                        Chat with Botway AI
                      </span>
                    </button>
                  </a>
                </ul>
                <ul className="space-y-1">
                  <a
                    className="block focus-visible:outline-none focus-visible:ring-0 focus:ring-0"
                    target="_self"
                    href="/explore"
                  >
                    <button className="group flex max-w-full cursor-pointer items-center space-x-2 border-gray-800 py-[5px] font-normal outline-none focus-visible:z-10 focus-visible:ring-1">
                      <TelescopeIcon size={24} className="fill-white h-6 w-6" />
                      <span
                        title="Explore Bots"
                        className="w-full truncate text-base text-gray-400 hover:text-white transition"
                      >
                        Explore
                      </span>
                    </button>
                  </a>
                </ul>
                <ul className="space-y-1">
                  <a
                    className="block outline-none ring-0 focus-visible:outline-none focus-visible:ring-0 focus:ring-0"
                    target="_self"
                    href="/ai-models"
                  >
                    <button className="group flex max-w-full cursor-pointer items-center space-x-2 border-gray-800 py-[5px] font-normal outline-none focus-visible:z-10 focus-visible:ring-1">
                      <NorthStarIcon
                        size={24}
                        className="fill-cyan-500 h-6 w-6"
                      />
                      <span
                        title="My AI Models"
                        className="w-full truncate text-base text-gray-400 hover:text-white transition"
                      >
                        My AI Models
                      </span>
                    </button>
                  </a>
                </ul>
              </div>
              <div className="border-b py-5 px-6 border-gray-800">
                <div className="flex space-x-3 mb-2 font-normal">
                  <Badge color="teal">
                    <span className="font-mono">Settings</span>
                  </Badge>
                </div>
                <ul className="space-y-1">
                  <a
                    className="block focus-visible:outline-none focus-visible:ring-0 focus:ring-0"
                    target="_self"
                    href="/account"
                  >
                    <button className="group flex max-w-full cursor-pointer items-center space-x-2 border-gray-800 py-[5px] font-normal outline-none focus-visible:z-10 focus-visible:ring-1">
                      <GearIcon size={24} className="fill-white h-6 w-6" />
                      <span
                        title="My Account"
                        className="w-full truncate text-base text-gray-400 hover:text-white transition"
                      >
                        My Account
                      </span>
                    </button>
                  </a>
                </ul>
                <ul className="space-y-1">
                  <a
                    className="block focus-visible:outline-none focus-visible:ring-0 focus:ring-0"
                    target="_self"
                    href="/files"
                  >
                    <button className="group flex max-w-full cursor-pointer items-center space-x-2 border-gray-800 py-[5px] font-normal outline-none focus-visible:z-10 focus-visible:ring-1">
                      <PaperclipIcon size={24} className="fill-white h-6 w-6" />

                      <span
                        title="My Uploaded Data Files"
                        className="w-full truncate text-base text-gray-400 hover:text-white transition"
                      >
                        My Uploaded Files
                      </span>
                    </button>
                  </a>
                </ul>
                {/* <ul className="space-y-1">
                <a
                  className="block"
                  target="_self"
                  style={{ marginLeft: "0rem" }}
                  href="/settings/tokens"
                >
                  <a
                    href="https://dash.zeabur.com/account/general"
                    target="_blank"
                    className="group flex max-w-full cursor-pointer items-center space-x-2 border-gray-800 py-[5px] font-normal outline-none focus-visible:z-10 focus-visible:ring-1"
                  >
                    <img
                      src="https://cdn-botway.deno.dev/icons/zeabur.svg"
                      width="20px"
                      height="20px"
                    />
                    <span
                      title="zeabur"
                      className="w-full truncate text-sm text-gray-400 hover:text-white transition"
                    >
                      My Account on Zeabur
                    </span>
                  </a>
                </a>
              </ul> */}
              </div>
              <div className="border-b py-5 px-6 border-gray-800">
                <div className="flex space-x-3 mb-2 font-normal">
                  <Badge color="gray">
                    <span className="font-mono">Resources</span>
                  </Badge>
                </div>
                <ul className="space-y-1">
                  <a
                    className="block"
                    target="_blank"
                    href="https://botway.deno.dev/docs"
                  >
                    <button className="group flex max-w-full cursor-pointer items-center space-x-2 border-gray-800 py-[5px] font-normal outline-none focus-visible:z-10 focus-visible:ring-1">
                      <ArrowUpRightIcon
                        size={24}
                        className="fill-white h-6 w-6"
                      />
                      <span
                        title="Docs"
                        className="w-full truncate text-base text-gray-400 hover:text-white transition"
                      >
                        Docs
                      </span>
                    </button>
                  </a>
                </ul>
                <ul className="space-y-1">
                  <a
                    className="block"
                    target="_blank"
                    href="https://botway.deno.dev/changelog"
                  >
                    <button className="group flex max-w-full cursor-pointer items-center space-x-2 border-gray-800 py-[5px] font-normal outline-none focus-visible:z-10 focus-visible:ring-1">
                      <ArrowUpRightIcon
                        size={24}
                        className="fill-white h-6 w-6"
                      />
                      <span
                        title="Changelog"
                        className="w-full truncate text-base text-gray-400 hover:text-white transition"
                      >
                        Changelog
                      </span>
                    </button>
                  </a>
                </ul>
                <ul className="space-y-1">
                  <a
                    className="block"
                    target="_blank"
                    href="https://github.com/abdfnx/botway"
                  >
                    <button className="group flex max-w-full cursor-pointer items-center space-x-2 border-gray-800 py-[5px] font-normal outline-none focus-visible:z-10 focus-visible:ring-1">
                      <MarkGithubIcon
                        size={24}
                        className="fill-white h-6 w-6"
                      />
                      <span
                        title="Botway Repo"
                        className="w-full truncate text-base text-gray-400 hover:text-white transition"
                      >
                        Botway Repo
                      </span>
                    </button>
                  </a>
                </ul>
              </div>
              {/* <SignOut /> */}
            </ul>
          </nav>
        </div>
      </>
    );
  };

  return (
    <>
      <Toaster />

      <body>
        <div className="h-[90vh] md:h-screen min-h-[90vh] md:min-h-screen flex flex-col">
          <div className="flex h-full">
            <main className="min-h-[90vh] md:min-h-screen flex flex-col flex-1 w-full overflow-y-auto">
              <div className="flex min-h-full">
                <div className="hidden md:block h-screen text-white min-h-[90vh] md:min-h-screen bg-secondary w-64 overflow-auto border-r border-gray-800">
                  <Sidebar />
                </div>

                <div className="flex bg-bwdefualt flex-1 flex-col">
                  <div className="flex h-12 max-h-12 items-center justify-between py-2 px-5 border-b border-gray-800">
                    <div className="hidden md:flex -ml-2 items-center text-sm">
                      <span className="flex border-none rounded p-0 outline-none outline-offset-1 transition-all focus:outline-4">
                        <span className="relative inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 text-gray-200 shadow-none text-xs px-2.5 py-1">
                          <span className="truncate">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <mask
                                id="mask0_3107_32"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="7"
                                width="16"
                                height="9"
                              >
                                <path
                                  d="M0 7.04004H16V7.36004C16 10.0483 16 11.3924 15.4768 12.4192C15.0166 13.3224 14.2823 14.0567 13.3792 14.5168C12.3524 15.04 11.0083 15.04 8.32 15.04H7.68C4.99174 15.04 3.64762 15.04 2.62085 14.5168C1.71766 14.0567 0.983362 13.3224 0.523168 12.4192C0 11.3924 0 10.0483 0 7.36004V7.04004Z"
                                  fill="white"
                                />
                              </mask>
                              <g mask="url(#mask0_3107_32)">
                                <path
                                  d="M17.6004 10.24C17.6004 13.7746 14.735 16.64 11.2004 16.64H4.80039C1.26577 16.64 -1.59961 13.7746 -1.59961 10.24H1.60039C1.60039 12.0074 3.03308 13.44 4.80039 13.44H11.2004C12.9677 13.44 14.4004 12.0074 14.4004 10.24H17.6004ZM4.80039 16.64C1.26577 16.64 -1.59961 13.7746 -1.59961 10.24V7.04004H1.60039V10.24C1.60039 12.0074 3.03308 13.44 4.80039 13.44V16.64ZM17.6004 7.04004V10.24C17.6004 13.7746 14.735 16.64 11.2004 16.64V13.44C12.9677 13.44 14.4004 12.0074 14.4004 10.24V7.04004H17.6004Z"
                                  fill="white"
                                />
                              </g>
                              <mask
                                id="mask1_3107_32"
                                // style="mask-type:luminance"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="16"
                                height="8"
                              >
                                <path
                                  d="M16 8H0V7.68C0 4.99174 0 3.64762 0.523168 2.62085C0.983362 1.71766 1.71766 0.98336 2.62085 0.523168C3.64762 3.8147e-08 4.99174 0 7.68 0H8.32C11.0083 0 12.3524 3.8147e-08 13.3792 0.523168C14.2823 0.98336 15.0166 1.71766 15.4768 2.62085C16 3.64762 16 4.99174 16 7.68V8Z"
                                  fill="white"
                                />
                              </mask>
                              <g mask="url(#mask1_3107_32)">
                                <path
                                  d="M-1.59961 4.7999C-1.59961 1.26528 1.26577 -1.6001 4.80039 -1.6001H11.2004C14.735 -1.6001 17.6004 1.26528 17.6004 4.7999H14.4004C14.4004 3.03259 12.9677 1.5999 11.2004 1.5999H4.80039C3.03308 1.5999 1.60039 3.03259 1.60039 4.7999H-1.59961ZM11.2004 -1.6001C14.735 -1.6001 17.6004 1.26528 17.6004 4.7999V7.9999H14.4004V4.7999C14.4004 3.03259 12.9677 1.5999 11.2004 1.5999V-1.6001ZM-1.59961 7.9999V4.7999C-1.59961 1.26528 1.26577 -1.6001 4.80039 -1.6001V1.5999C3.03308 1.5999 1.60039 3.03259 1.60039 4.7999V7.9999H-1.59961Z"
                                  fill="white"
                                />
                              </g>
                              <path
                                d="M5.11304 6.08008H4.8C4.35817 6.08008 4 6.43825 4 6.88008V8.17862C4 8.62045 4.35817 8.97862 4.8 8.97862H5.11304C5.55487 8.97862 5.91304 8.62045 5.91304 8.17862V6.88008C5.91304 6.43825 5.55487 6.08008 5.11304 6.08008Z"
                                fill="white"
                              />
                              <path
                                d="M11.199 6.08008H10.8859C10.4441 6.08008 10.0859 6.43825 10.0859 6.88008V8.17862C10.0859 8.62045 10.4441 8.97862 10.8859 8.97862H11.199C11.6408 8.97862 11.999 8.62045 11.999 8.17862V6.88008C11.999 6.43825 11.6408 6.08008 11.199 6.08008Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                        </span>
                      </span>
                      <span className="text-gray-600">
                        <svg
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        >
                          <path d="M16 3.549L7.12 20.600"></path>
                        </svg>
                      </span>
                      <span className="flex border-none rounded p-0 outline-none outline-offset-1 transition-all focus:outline-4">
                        <span className="relative inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 text-gray-200 shadow-none text-xs px-2.5 py-1">
                          <span className="truncate">
                            {user.user_metadata["name"]}
                          </span>
                        </span>
                      </span>
                      <span className="text-gray-600">
                        <svg
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        >
                          <path d="M16 3.549L7.12 20.600"></path>
                        </svg>
                      </span>
                      <a
                        href={
                          href.toLowerCase() === "projects"
                            ? "/"
                            : `/${href.toLowerCase()}`
                        }
                        className="text-gray-200 block px-2 py-1 text-xs leading-5 focus:outline-none"
                      >
                        {href}
                      </a>
                    </div>
                    <div
                      onClick={() => setOpen(true)}
                      className="cursor-pointer block md:hidden mt-0.5"
                    >
                      <ThreeBarsIcon size={24} className="fill-white h-5 w-5" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <a
                        href="/"
                        className="flex border-gray-800 rounded outline-none outline-offset-1 transition-all focus:outline-4"
                      >
                        <span className="relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 text-blue-700 shadow-sm text-xs px-2.5 py-1">
                          <HomeIcon size={24} className="h-5 w-5" />
                        </span>
                      </a>

                      <Root>
                        <Trigger asChild>
                          <button className="cursor-pointer outline-none">
                            <div className="flex items-center justify-between">
                              <UserAvatar data={user.email} size={24} />
                              <ChevronDownIcon
                                size={24}
                                className="fill-gray-300 w-4 h-4 mt-1 ml-1"
                              />
                            </div>
                          </button>
                        </Trigger>
                        <Portal>
                          <Content
                            className="mr-4 transition-all will-change-[transform,opacity] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                            sideOffset={5}
                          >
                            <div className="z-50 min-w-[130px] outline-none bg-secondary rounded-xl p-2 overflow-y-auto border border-gray-800 mt-0.5 py-2 w-[280px]">
                              <div className="flex flex-col space-y-1">
                                <div className="flex flex-col space-y-3 border border-gray-800 items-center justify-center relative bg-bwdefualt pt-7 pb-5 mb-2 rounded-[8px]">
                                  <div className="flex flex-col absolute py-1 px-3 rounded bg-secondary border border-gray-800 top-0 mt-2 left-0 ml-2">
                                    <p className="uppercase text-[10px] mt-[1.5px] font-medium text-blue-700">
                                      {mode()} Mode
                                    </p>
                                  </div>
                                  <div className="relative">
                                    <span
                                      className="inline-block rounded-full overflow-hidden"
                                      title={user.user_metadata["name"]}
                                    >
                                      <UserAvatar data={user.email} size={48} />
                                    </span>
                                  </div>
                                  <div className="flex flex-col items-center justify-center">
                                    <p className="text-base text-gray-100 font-mono font-medium">
                                      {user.user_metadata["name"]}
                                    </p>
                                  </div>
                                </div>
                                <h3 className="px-3 my-1 text-white text-base">
                                  General
                                </h3>
                                <a
                                  className="focus:outline-none"
                                  href="/account"
                                >
                                  <div className="text-gray-100 hover:text-gray-200 group flex items-center space-x-3 text-sm px-3 h-9 cursor-pointer hover:bg-bwdefualt focus:bg-bwdefualt transition-all duration-300 focus:outline-none rounded-md">
                                    <GearIcon
                                      size={24}
                                      className="mr-3 fill-white"
                                    />
                                    Account Settings
                                  </div>
                                </a>
                                <a
                                  className="focus:outline-none"
                                  href="/ai-models"
                                >
                                  <div className="text-gray-100 hover:text-gray-200 group flex items-center space-x-3 text-sm px-3 h-9 cursor-pointer hover:bg-bwdefualt focus:bg-bwdefualt transition-all duration-300 focus:outline-none rounded-md">
                                    <NorthStarIcon
                                      size={24}
                                      className="mr-3 fill-cyan-500"
                                    />
                                    My AI Models
                                  </div>
                                </a>
                                <a className="focus:outline-none" href="/files">
                                  <div className="text-gray-100 hover:text-gray-200 group flex items-center space-x-3 text-sm px-3 h-9 cursor-pointer hover:bg-bwdefualt focus:bg-bwdefualt transition-all duration-300 focus:outline-none rounded-md">
                                    <PaperclipIcon size={24} className="mr-3" />
                                    My Uploaded Data Files
                                  </div>
                                </a>
                              </div>
                              <div className="border border-gray-800 w-full my-2" />
                              <h3 className="px-3 my-1 text-white text-base">
                                Modes
                              </h3>
                              <div className="text-gray-100 hover:text-gray-200 group flex items-center space-x-3 text-sm px-3 h-9 cursor-pointer hover:bg-bwdefualt focus:bg-bwdefualt transition-all duration-300 focus:outline-none rounded-md">
                                <div className="flex justify-between items-center w-full">
                                  <div
                                    className="flex space-x-3 items-center w-3/4"
                                    onClick={() =>
                                      localStorage.setItem("mode", "Visual")
                                    }
                                  >
                                    <DeviceDesktopIcon
                                      size={24}
                                      className="fill-green-500"
                                    />
                                    <p className="text-sm truncate font-mono">
                                      Visual Mode
                                    </p>
                                  </div>
                                  {mode() === "Visual" ? (
                                    <CheckIcon
                                      size={24}
                                      className="fill-blue-700"
                                    />
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </div>
                              <div className="text-gray-100 hover:text-gray-200 group flex items-center space-x-3 text-sm px-3 h-9 cursor-pointer hover:bg-bwdefualt focus:bg-bwdefualt transition-all duration-300 focus:outline-none rounded-md">
                                <div className="flex justify-between items-center w-full">
                                  <div
                                    className="flex space-x-3 items-center w-3/4"
                                    onClick={() =>
                                      localStorage.setItem("mode", "Dev")
                                    }
                                  >
                                    <CommandPaletteIcon
                                      size={24}
                                      className="fill-sky-600"
                                    />
                                    <p className="text-sm truncate font-mono">
                                      Dev Mode
                                    </p>
                                  </div>
                                  {mode() === "Dev" ? (
                                    <CheckIcon
                                      size={24}
                                      className="fill-blue-700"
                                    />
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </div>
                              <div className="border border-gray-800 w-full my-2" />
                              <div className="flex justify-between items-center">
                                <div className="text-gray-100 font-mono text-xs hover:text-gray-200 group flex items-center space-x-3 px-3 h-9 focus:outline-none">
                                  <img
                                    src="https://cdn-botway.deno.dev/simple/icon-white.svg"
                                    className="w-6 h-6 mr-3"
                                  />
                                  v0.2.0
                                </div>
                                <div className="text-gray-100 hover:text-gray-200 group flex items-center space-x-3 text-sm px-3 h-9 cursor-pointer hover:bg-bwdefualt focus:bg-bwdefualt transition-all duration-300 focus:outline-none rounded-md">
                                  <SignOut />
                                </div>
                              </div>
                            </div>
                          </Content>
                        </Portal>
                      </Root>
                    </div>
                  </div>
                  {children}
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-bwdefualt bg-opacity-50 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden ">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 left-0 flex max-w-full pr-[104px]">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-x-full"
                  enterTo="-translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="-translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-200"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4" />
                    </Transition.Child>
                    <div className="flex h-full flex-col bg-secondary border-r border-gray-800 py-4 shadow-xl">
                      <Sidebar />
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
