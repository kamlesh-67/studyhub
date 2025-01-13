import { useEffect } from "react";

export default function Filters({ filters, setFilters, applyFilters }) {
  const categories = [
    "Fiction",
    "Non-fiction",
    "Science Fiction",
    "History",
    "Biography",
    "Fantasy",
    "Romance",
    "Thriller",
    "Adventure",
  ];
  const availabilityOptions = ["Paid", "Free"];

  const handleCategoryChange = (category) => {
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    setFilters({ ...filters, categories: updatedCategories });
  };

  const handleAvailabilityChange = (option) => {
    const updatedAvailability = filters.availability.includes(option)
      ? filters.availability.filter((a) => a !== option)
      : [...filters.availability, option];
    setFilters({ ...filters, availability: updatedAvailability });
  };

  const handlePriceRangeChange = (value) => {
    setFilters({ ...filters, priceRange: parseInt(value) });
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Filters
      </h2>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">
          Price Range
        </h3>
        <input
          type="range"
          min="0"
          max="100"
          value={filters.priceRange}
          onChange={(e) => handlePriceRangeChange(e.target.value)}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>$0</span>
          <span>${filters.priceRange}</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">
          Availability
        </h3>
        <div className="space-y-2">
          {availabilityOptions.map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.availability.includes(option)}
                onChange={() => handleAvailabilityChange(option)}
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
