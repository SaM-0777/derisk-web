import Navbar from "@/components/common/navbar";
import PolicyCard from "@/components/common/policy-card";
import { getPolicies } from "./_actions/policy";
import Hero from "@/components/hero";
import Policies from "@/components/policies";
import Image from "next/image";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-8">
        <Hero />
        <Policies />

        <div className="my-[20vh]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="max-w-2xl text-6xl text-center">
              <span className="font-semibold ">De RISK </span>
              <span>Workflow</span>
            </h1>
            <p className="text-center">
              Connect wallet & assess your crypto risk instantly.
            </p>
          </div>

          <div className="flex items-center justify-center gap-x-6 mt-14 max-w-5xl">
            <div className="flex items-center gap-x-8 w-xs">
              <Image
                src={"/pfp.png"}
                width={100}
                height={100}
                priority
                className=""
                alt="pfp"
              />
              <div className="w-[160px] h-[1px] bg-black" />
            </div>
            <div className="flex items-center gap-x-8 w-xs">
              <Image
                src={"/pfp2.png"}
                width={100}
                height={100}
                priority
                className=""
                alt="pfp"
              />
              <div className="w-[160px] h-[1px] bg-black" />
            </div>
            <div className="flex items-center gap-x-8">
              <Image
                src={"/pfp3.png"}
                width={100}
                height={100}
                priority
                className=""
                alt="pfp"
              />
            </div>
          </div>

          <div className="flex items-center justify-center max-w-5xl gap-x-6">
            <div className="mt-4 max-w-xs">
              <h4 className="text-xl text-center font-semibold">
                Connect Wallet
              </h4>
              <p className="text-center text-sm">{`Securely link your wallet and assess your risk. Fully on-chain, your data stays private.`}</p>
            </div>

            <div className="mt-4 max-w-xs">
              <h4 className="text-xl text-center font-semibold">
                Choose Coverage
              </h4>
              <p className="text-center text-sm">{`Pick protection for wallets, exchanges, or DeFi protocols. Tailored to your assets.`}</p>
            </div>

            <div className="mt-4 max-w-xs">
              <h4 className="text-xl text-center font-semibold">
                Stay Insured
              </h4>
              <p className="text-center text-sm">{`Policy minted as a smart contract. Claims execute instantly if hacks occur. Trustless and automated.`}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
