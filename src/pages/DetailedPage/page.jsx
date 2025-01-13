import ChapterDetails from "./components/ChapterDetails";
import NotesSection from "./components/NotesSection";
import ResourcesDropdown from "./components/ResourcesDropdown";
import ResourcesSection from "./components/ResourcesSection";
import VerticalNav from "./components/VerticalNav";
import VideoPlayer from "./components/VideoPlayer";

export default function DetailedPage() {
  return (
    <>
      <div className="mb-4">
        <ResourcesDropdown />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <VerticalNav />
        </div>
        <div className="md:col-span-6">
          <VideoPlayer videoId="NW6Dgax2d6I?si=Vp3L8FmaiFLN4-mX" />
          <NotesSection />
          <ResourcesSection />
        </div>
        <div className="md:col-span-3">
          <ChapterDetails />
        </div>
      </div>
    </>
  );
}
