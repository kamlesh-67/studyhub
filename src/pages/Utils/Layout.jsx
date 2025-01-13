"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            StudyHub
          </Link>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/payment"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                payment
              </Link>
            </li>
            <li>
              <Link
                href="/bookstore"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Bookstore
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Login
              </Link>
            </li>
          </ul>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
