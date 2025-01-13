import Image from "next/image";

export default function BookCard({ book }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Image
        src={book.cover}
        alt={book.title}
        width={300}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
          {book.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {book.price === 0 ? "Free" : `$${book.price.toFixed(2)}`}
        </p>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
