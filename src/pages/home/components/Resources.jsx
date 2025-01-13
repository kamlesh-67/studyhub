import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const resources = [
  {
    id: 1,
    title: "Utkarsh Classes",
    description:
      "📚 Utkarsh Classes | Central और State Level Competitive Exams की तैयारी के लिए 🌟 One-Stop Solution 🌟!",
    link: "https://www.youtube.com/@UTKARSHCLASSES13",
  },
  {
    id: 2,
    title: "Khan Academy",
    description: "Free online courses in various subjects",
    link: "https://www.khanacademy.org/",
  },
  {
    id: 3,
    title: "MIT OpenCourseWare",
    description: "Free MIT course materials",
    link: "https://ocw.mit.edu/",
  },
  {
    id: 4,
    title: "Coursera",
    description: "Online courses from top universities",
    link: "https://www.coursera.org/",
  },
];

export default function Resources() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Study Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource) => (
            <Card
              key={resource.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {resource.title}
                  <ExternalLink className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{resource.description}</CardDescription>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block"
                >
                  Learn More
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
