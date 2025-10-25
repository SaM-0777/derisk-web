import { getPolicies } from "@/app/_actions/policy";
import React from "react";
import PolicyCard from "./common/policy-card";

export default async function Policies() {
  const { data: policies } = await getPolicies();

  return (
    <div className="max-w-6xl w-full rounded-lg p-12 space-y-20 bg-gradient-to-br from-[#0F032D] via-[#905BF4] to-[#EFEFEF] mt-[10vh]">
      <div className="flex items-center justify-between pb-4 border-b">
        <h2 className="text-4xl text-white">
          <span className="font-semibold">OnChain</span>
          <span> Insurance</span>
        </h2>

        <p className="text-white max-w-md">
          Shield your crypto wallets from hacks, exploits, and phishing with
          insurance built for Web3.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-14">
        {policies?.map((p) => (
          <PolicyCard key={p.id} policy={p} />
        ))}
      </div>

      <div className="flex items-center justify-between pb-4 border-b">
        <h2 className="text-4xl text-white">
          <span className="font-semibold">OffChain</span>
          <span> Insurance</span>
        </h2>

        <p className="text-white max-w-md">
          Protect your real-world assets through decentralized insurance
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-14">
        <div className="col-span-3 text-center py-16">
          <h3 className="text-2xl text-white font-semibold">Coming Soon</h3>
          <p className="text-white mt-4">
            {`We're working hard to bring you more insurance options. Stay tuned!`}
          </p>
        </div>
      </div>
    </div>
  );
}
