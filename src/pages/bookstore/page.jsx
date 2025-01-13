"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import BookGrid from "./components/BookGrid";
import Pagination from "./components/Pagination";

const allBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    price: 9.99,
    cover: "/images/placeholder.svg",
    category: "Fiction",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    price: 12.99,
    cover: "/images/placeholder.svg",
    category: "Fiction",
  },
  {
    id: 3,
    title: "1984",
    price: 10.99,
    cover: "/images/placeholder.svg",
    category: "Science Fiction",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    price: 0,
    cover: "/images/placeholder.svg",
    category: "Romance",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    price: 11.99,
    cover: "/images/placeholder.svg",
    category: "Fiction",
  },
  {
    id: 6,
    title: "Moby Dick",
    price: 14.99,
    cover: "/images/placeholder.svg",
    category: "Adventure",
  },
  {
    id: 7,
    title: "The Hobbit",
    price: 8.99,
    cover: "/images/placeholder.svg",
    category: "Fantasy",
  },
  {
    id: 8,
    title: "The Da Vinci Code",
    price: 13.99,
    cover: "/images/placeholder.svg",
    category: "Thriller",
  },
  {
    id: 9,
    title: "The Alchemist",
    price: 9.99,
    cover: "/images/placeholder.svg",
    category: "Fiction",
  },
  {
    id: 10,
    title: "Harry Potter and the Sorcerer's Stone",
    price: 0,
    cover: "/images/placeholder.svg",
    category: "Fantasy",
  },
];

export default function BookstorePage() {
  const [books, setBooks] = useState(allBooks);
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: 100,
    availability: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const booksPerPage = 6;

  const applyFilters = () => {
    let filteredBooks = allBooks.filter((book) => {
      const matchesCategory =
        filters.categories.length === 0 ||
        filters.categories.includes(book.category);
      const matchesPrice = book.price <= filters.priceRange;
      const matchesAvailability =
        filters.availability.length === 0 ||
        (filters.availability.includes("Free") && book.price === 0) ||
        (filters.availability.includes("Paid") && book.price > 0);
      const matchesSearch = book.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return (
        matchesCategory && matchesPrice && matchesAvailability && matchesSearch
      );
    });
    setBooks(filteredBooks);
    setCurrentPage(1);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-800 shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Bookstore
          </h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <SearchBar
          setSearchQuery={setSearchQuery}
          applyFilters={applyFilters}
        />
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <aside className="w-full md:w-1/4">
            <Filters
              filters={filters}
              setFilters={setFilters}
              applyFilters={applyFilters}
            />
          </aside>
          <section className="w-full md:w-3/4">
            <BookGrid books={currentBooks} />
            <Pagination
              booksPerPage={booksPerPage}
              totalBooks={books.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
