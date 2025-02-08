import { projectTypeFilter } from "@/data/site-details";

const SearchFilter = ({ q = "", type = "", sort = "desc" }) => {
  return (
    <form method="GET" className="flex w-full flex-wrap gap-4 items-end font-nunito" aria-label="Project filter form">
      <div className="flex flex-col w-full md:w-2/5">
        <label htmlFor="q" className="text-sm font-montserrat font-medium">Search by Name</label>
        <input
          type="text"
          name="q"
          id="q"
          defaultValue={q}
          placeholder="Project name"
          className="h-12 px-4 bg-white text-gray-800 shadow-md hover:shadow-lg outline-none border-b-2 border-cerise-600 focus:border-dull-lavender-600 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col w-full md:w-1/5">
        <label htmlFor="type" className="text-sm font-montserrat font-medium">Filter by Type</label>
        <select
          name="type"
          id="type"
          defaultValue={type}
          className="h-12 px-4 bg-white text-gray-800 shadow-md hover:shadow-lg outline-none border-b-2 border-cerise-600 focus:border-dull-lavender-600 transition-all duration-300"
        >
          <option value="">All</option>
          {
            projectTypeFilter.map((type, idx) => <option key={idx} value={type}>{type}</option>)
          }
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="flex flex-col w-full md:w-1/5">
        <label htmlFor="sort" className="text-sm font-montserrat font-medium">Sort by Date</label>
        <select
          name="sort"
          id="sort"
          defaultValue={sort}
          className="h-12 px-4 bg-white text-gray-800 shadow-md hover:shadow-lg outline-none border-b-2 border-cerise-600 focus:border-dull-lavender-600 transition-all duration-300"
        >
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>
      </div>
      <button
        type="submit"
        className="cursor-pointer grow bg-shark-950 h-12 px-4 py-2 rounded text-cerise-600 hover:text-dull-lavender-600 hover:-translate-y-1 transition delay-150 duration-300 ease-in-out focus:outline-none focus:ring-0"
      >
        Apply Filters
      </button>
    </form>
  );
};

export default SearchFilter;
