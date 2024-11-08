"use client";

import Image from "next/image";
import { DM_Mono } from "next/font/google";

import { useState } from "react";
import { addToWaitingListAction } from "./actions/add-to-waiting-list";

const font_dm_mono = DM_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function EmptyHome() {
  const [email, setEmail] = useState<string>();
  const [error, setError] = useState<string | undefined | null>(undefined);

  const onSubmit = () => {
    if (!email?.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      addToWaitingListAction(email);
      setError(
        "Thank you for joining the waiting list! We will let you know once we have launched the first version of the app."
      );
    } catch (error) {
      setError("An error occurred during fulfilling your request.");
    }
  };

  return (
    <div className="grid gap-4 w-11/12 lg:w-4/6 text-5xl lg:text-6xl text-[#d2d8df]">    
        <h1 className={`${font_dm_mono.className}`}>
          {" "}
          The achievement system that you can trust.
        </h1>
      <div>
        <form
          className="grid gap-4 grid-cols-1"
          method="post"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
        >
          <input
            type="email"
            required
            id="email"
            name="email"
            className="bg-[#ffffff] text-[#0c1827] rounded-lg h-12 mb-2 px-4 text-xl"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="rounded-lg flex items-center justify-center gap-2 text-lg sm:text-lg h-10 sm:h-12 px-4 sm:px-5 text-[#0B192C] bg-gradient-to-r from-[#00445e] via-[#00a687] to-[#00445e] shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[500ms]"
            rel="noopener noreferrer"
            type="submit"
          >
            <Image
              src="./img/join-waiting-list.svg"
              alt="Join Waiting List"
              width={20}
              height={20}
            />
            Join Waiting List
          </button>
        </form>
      </div>
      <div>
        {error && (
          <div className="text-lg bg-[#a5b1c0] text-[#0c1827] rounded-lg p-2">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
