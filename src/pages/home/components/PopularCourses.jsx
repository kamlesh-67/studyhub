import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const popularCourses = [
  {
    id: 1,
    title: "Daily Current Affairs",
    description: "Master the basics of JavaScript programming",
    image: "/images/current.png",
  },
  {
    id: 2,
    title: "Rajasthan History",
    description: "Master the basics of JavaScript programming",
    image: "/images/history.jpg",
  },
  {
    id: 3,
    title: "Rajasthan Geography",
    description: "Learn Python for data analysis and visualization",
    image: "/images/geography.jpg",
  },
  {
    id: 4,
    title: "Rajasthan Political",
    description: "Build modern web applications with React",
    image: "/images/politics.png",
  },
  {
    id: 5,
    title: "Rajasthan Art and culture",
    description: "Introduction to machine learning algorithms",
    image: "/images/art.jpg",
  },
];

export default function PopularCourses() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularCourses.map((course) => (
            <Card
              key={course.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{course.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
