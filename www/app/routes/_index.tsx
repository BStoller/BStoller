import type { MetaFunction } from "@remix-run/node";
import gridPattern from "../../public/assets/grid-pattern.svg";
import desktop from "../../public/assets/desktop.svg";

export const meta: MetaFunction = () => {
  return [
    { title: "Personal Site" },
    { name: "description", content: "Welcome to my personal site!" },
  ];
};

export default function Index() {
  return (
    <div className="relative min-h-screen">
      {/* Container for both pattern and image */}
      <div className="relative">
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 10%, black 70%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 10%, black 70%)',
            backgroundImage: `url(${gridPattern})`,
            backgroundRepeat: "repeat",
            backgroundSize: "500px 500px",
          }}
        />
        {/* Desktop image */}
        <img 
          src={desktop} 
          alt="Desktop setup" 
          className="w-full h-auto relative z-10 pt-96"
        />
      </div>
    </div>
  );
}
