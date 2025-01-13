import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredCourses = [
  {
    id: 1,
    title: "Curront Affairs",
    description: "We have latest and up to date content for Current Affairs",
  },
  {
    id: 2,
    title: "Rajasthan GK",
    description: "History,Geogrophy,Political And Art Culture",
  },
  {
    id: 3,
    title: "Moke Test",
    description: "Rajasthan and India GK moke test every day",
  },
  {
    id: 4,
    title: "Job Alert",
    description:
      "Rajasthand and India level all GOVT Job Allerts Data updated every day",
  },
];

export default function FeaturedCoursesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredCourses.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredCourses.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredCourses.length) % featuredCourses.length
    );
  };

  return (
    <div className="relative h-96 bg-gray-100 dark:bg-gray-800">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            {featuredCourses[currentSlide].title}
          </h2>
          <p className="text-xl mb-8">
            {featuredCourses[currentSlide].description}
          </p>
          <Button>Enroll Now</Button>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  );
}
