import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section style={{ position: 'relative', width: '100%', height: '60vh' }}>
    <Image
      src="/assets/hero-image.jpg"
      alt="Hero Image"
      layout="fill"  
      objectFit="cover"  
      objectPosition="center" 
      className="rounded-md" 
    />
      <div className="relative z-10 text-neutral-50 text-center py-24 flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 w-full h-full rounded-md">
        <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
        <p className="mt-4 text-xl">The best prices for over 2 million properties worldwide.</p>
      </div>
    </section>
  );
}

export default HeroSection