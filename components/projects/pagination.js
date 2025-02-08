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
      {/* {currentPage > 1 && (
        <Link href={`?${buildQuery(currentPage - 1)}`} className="px-3 py-1 border rounded hover:bg-gray-100 focus:outline-none focus:ring-0">
          Previous
        </Link>
      )} */}
      <Link href={`?${buildQuery(currentPage - 1)}`} className="px-3 py-1 bg-shark-950 rounded text-cerise-600 hover:text-dull-lavender-600 hover:-translate-y-1 transition delay-150 duration-300 ease-in-out focus:outline-none focus:ring-0">
        <span className="sr-only">Previous</span>
        <HiChevronLeft aria-hidden="true" className="size-5" />
      </Link>
      <span className="px-3 py-1">
        Page {currentPage} of {totalPages}
      </span>
      <Link href={`?${buildQuery(currentPage + 1)}`} className="px-3 py-1 bg-shark-950 rounded text-cerise-600 hover:text-dull-lavender-600 hover:-translate-y-1 transition delay-150 duration-300 ease-in-out focus:outline-none focus:ring-0">
        <span className="sr-only">Next</span>
        <HiChevronRight aria-hidden="true" className="size-5" />
      </Link>
      {/* {currentPage < totalPages && (
        <Link href={`?${buildQuery(currentPage + 1)}`} className="px-3 py-1 border rounded hover:bg-gray-100 focus:outline-none focus:ring-0">
          Next
        </Link>
      )} */}
    </nav>
    // <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
    //   {/* <div className="flex flex-1 justify-between sm:hidden">
    //     <a
    //       href="#"
    //       className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
    //     >
    //       Previous
    //     </a>
    //     <a
    //       href="#"
    //       className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
    //     >
    //       Next
    //     </a>
    //   </div> */}
    //   <div className="flex sm:flex-1 sm:items-center sm:justify-between">
    //     <div>
    //       <p className="text-sm text-gray-700">
    //         Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
    //         <span className="font-medium">97</span> results
    //       </p>
    //     </div>
    //     <div>
    //       <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs">
    //         <a
    //           href="#"
    //           className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
    //         >
    //           <span className="sr-only">Previous</span>
    //           <HiChevronLeft aria-hidden="true" className="size-5" />
    //         </a>
    //         {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
    //         <a
    //           href="#"
    //           aria-current="page"
    //           className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //         >
    //           1
    //         </a>
    //         <a
    //           href="#"
    //           className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
    //         >
    //           2
    //         </a>
    //         <a
    //           href="#"
    //           className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
    //         >
    //           3
    //         </a>
    //         <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">
    //           ...
    //         </span>
    //         <a
    //           href="#"
    //           className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
    //         >
    //           8
    //         </a>
    //         <a
    //           href="#"
    //           className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
    //         >
    //           9
    //         </a>
    //         <a
    //           href="#"
    //           className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
    //         >
    //           10
    //         </a>
    //         <a
    //           href="#"
    //           className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
    //         >
    //           <span className="sr-only">Next</span>
    //           <HiChevronRight aria-hidden="true" className="size-5" />
    //         </a>
    //       </nav>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Pagination;
