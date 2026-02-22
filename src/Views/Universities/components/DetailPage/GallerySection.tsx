import Image from "next/image";
import { University } from "../../types";

interface GallerySectionProps {
  university: University;
}

export default function GallerySection({ university }: GallerySectionProps) {
  if (!university.gallery || university.gallery.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-secondary-gray-900 mb-6">
          Campus Life
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {university.gallery.map((image, idx) => (
            <div
              key={idx}
              className="relative h-40 overflow-hidden rounded-xl border border-secondary-gray-200 bg-secondary-gray-50"
            >
              <Image
                src={image}
                alt={`${university.name} campus ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
