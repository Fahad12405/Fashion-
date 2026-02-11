import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FeaturedBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="relative w-full h-[130px] sm:h-[260px] lg:h-[440px]">
        {/* Mobile Image */}
        <div className="w-full flex justify-center">
          <Image
            src="/ProductImages/42.png"
            alt="hero"
            width={600}
            height={600}
            className="w-[100%] sm:w-[100%] md:w-[600px] h-auto"
          />
        </div>


        {/* Desktop Image */}
        <Image
          src="/ProductImages/41.png"
          alt="Jackets & Hoodies Collection"
          fill
          priority
          sizes="100vw"
          className="object-cover hidden lg:block"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
}