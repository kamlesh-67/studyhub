"use client";
import Head from "next/head";
import FeaturedCoursesSlider from "./components/FeaturedCoursesSlider";
import JobAlerts from "./components/JobAlerts";
import PopularCourses from "./components/PopularCourses";
import Resources from "./components/Resources";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Study Hub | All you need at one place</title>
        <meta name="description" content="Browse our wide range of courses." />
      </Head>
      <FeaturedCoursesSlider />
      <PopularCourses />
      <JobAlerts />
      <Resources />
    </>
  );
}
