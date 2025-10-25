"use client";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { usePrivy } from "@privy-io/react-auth";

export default function Hero() {
  const { ready, login, logout, authenticated, user } = usePrivy();

  return (
    <div className="flex flex-col items-center justify-center gap-4 my-[8vh]">
      <h1 className="max-w-2xl text-6xl text-center font-semibold ">
        <span>Insurance Reimagined for </span>
        <span className="text-[#B09DFB]">Web3.</span>
      </h1>
      <p className="text-center">
        Shield your crypto wallets from hacks, exploits, and phishing with
        insurance built for Web3.
      </p>

      <div className="mt-4">
        <Button
          disabled={!ready}
          onClick={authenticated ? logout : login}
          type="button"
          className="bg-[#AE9AFF] rounded-full h-12"
        >
          {authenticated ? (
            <span className="w-full truncate">{user?.wallet?.address}</span>
          ) : (
            <>
              <span>Connect your wallet</span>
              <span className="inline-flex items-center justify-center p-0.5 rounded-full bg-white">
                <ArrowRight className="stroke-[#AE9AFF] size-5" />
              </span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
