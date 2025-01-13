import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const jobAlerts = [
  {
    id: 1,
    title: "RPSC",
    company: "Rajasthan Public Serive Commition",
    location: "Rajasthan",
  },
  {
    id: 2,
    title: "RSMSSB",
    company: "Rajasthan Staff Selection Board",
    location: "Rajasthan",
  },
  {
    id: 3,
    title: "Rajasthan Private Sactor jobs",
    company: "Interview Base Jobs",
    location: "Rajasthan",
  },
  {
    id: 4,
    title: "Rajasthan Direct vacancy",
    company: "Interview Base Jobs",
    location: "Rajasthan",
  },
];

export default function JobAlerts() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Job Alerts</h2>
        <Card>
          <CardHeader>
            <CardTitle>Latest Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {jobAlerts.map((job) => (
                <li key={job.id}>
                  <Link
                    href={`/jobs/${job.id}`}
                    className="block hover:bg-gray-200 dark:hover:bg-gray-700 p-4 rounded transition-colors duration-300"
                  >
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {job.company} - {job.location}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
