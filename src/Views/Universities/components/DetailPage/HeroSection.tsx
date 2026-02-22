import Image from "next/image";
import { University } from "../../types";

interface HeroSectionProps {
  university: University;
}

export default function HeroSection({ university }: HeroSectionProps) {
  const words = university.name.split(" ");

  return (
    <div className="relative h-96 overflow-hidden bg-secondary-gray-100">
      <Image
        src={university.image}
        alt={university.name}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {words.map((word, wordIndex) => {
              const isLastWord = wordIndex === words.length - 1;
              return (
                <span
                  key={wordIndex}
                  className={`inline-block mr-3 ${
                    isLastWord ? "text-orange-400" : "text-white"
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </h1>
          <p className="text-white/90 text-lg">{university.location}</p>
        </div>
      </div>
    </div>
  );
}
