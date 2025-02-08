import Link from "next/link"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"

const Pagination = ({ currentPage, totalPages, queryParams }) => {
  // Helper to rebuild the query string with the updated page number.
  const buildQuery = (page) => {
    const params = new URLSearchParams(queryParams);
    params.set('page', page);
    return params.toString();
  };

  return (
    <nav aria-label="Pagination Navigation" className="flex justify-center items-center gap-4 mt-6">
      {currentPage > 1 && (
        <Link href={`?${buildQuery(currentPage - 1)}`} className="px-3 py-1 bg-shark-950 rounded text-cerise-600 hover:text-dull-lavender-600 hover:-translate-y-1 transition delay-150 duration-300 ease-in-out focus:outline-none focus:ring-0">
        <span className="sr-only">Previous</span>
        <HiChevronLeft aria-hidden="true" className="size-5" />
      </Link>
      )}
      
      <span className="px-3 py-1">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link href={`?${buildQuery(currentPage + 1)}`} className="px-3 py-1 bg-shark-950 rounded text-cerise-600 hover:text-dull-lavender-600 hover:-translate-y-1 transition delay-150 duration-300 ease-in-out focus:outline-none focus:ring-0">
        <span className="sr-only">Next</span>
        <HiChevronRight aria-hidden="true" className="size-5" />
      </Link>
      )}
    </nav>
  );
};

export default Pagination;
