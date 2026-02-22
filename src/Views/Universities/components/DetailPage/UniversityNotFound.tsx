import Button from "@/src/app/components/ui/Button";
import { ROUTES } from "@/src/constants/routes";
import Link from "next/link";

export default function UniversityNotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-secondary-gray-900 mb-4">
            University Not Found
          </h1>
          <p className="text-secondary-gray-600 mb-8">
            The university you are looking for does not exist.
          </p>
          <Link href={ROUTES.universities}>
            <Button variant="primary">Back to Universities</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
