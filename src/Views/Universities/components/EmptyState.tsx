export default function EmptyState() {
  return (
    <div className="text-center py-16">
      <svg
        className="w-16 h-16 text-secondary-gray-300 mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="text-xl font-semibold text-secondary-gray-900 mb-2">
        No Universities Found
      </h3>
      <p className="text-secondary-gray-600">
        Try adjusting your search or filter criteria
      </p>
    </div>
  );
}
