import { useState } from "react";

export default function SearchBar({ setSearchQuery, applyFilters }) {
  const [localQuery, setLocalQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(localQuery);
    applyFilters();
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="flex">
        <input
          type="text"
          placeholder="Search for books..."
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          className="w-full p-4 rounded-l-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
        >
          Search
        </button>
      </div>
    </form>
  );
}
