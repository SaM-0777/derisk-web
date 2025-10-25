import { Card } from "../ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { parseNFTImage } from "@/utils/nft";

export default function PolicyCard({ policy }: { policy: PolicyTemplate }) {
  return (
    <Card className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-lg">
      <div className="flex justify-center">
        <Image
          width={256}
          height={300}
          src={parseNFTImage(policy.imageUrl)}
          alt="Purple crystal"
          className="h-48 w-40 object-contain"
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 text-center">
        {policy.name}
      </h2>

      <p className="text-gray-600 text-center text-sm leading-relaxed my-4">
        {policy.description}
      </p>

      <div className="h-px bg-gray-300 mb-6" />

      <div className="">
        <Link
          href={`/policy/${policy.slug}`}
          className="flex items-center justify-between cursor-pointer"
        >
          <span className="text-gray-900 font-medium text-sm">
            More Details
          </span>
          <ArrowRight className="w-5 h-5 text-gray-900 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  );
}
