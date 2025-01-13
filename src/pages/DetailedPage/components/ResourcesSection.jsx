import { Button } from "../../../components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileArchive } from "@fortawesome/free-solid-svg-icons";

export default function ResourcesSection() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Resources</h2>
      <div className="space-y-4">
        <Button variant="outline" className="w-full justify-start" asChild>
          <a href="/path-to-your-pdf.pdf" download>
            <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
            Download Lecture Notes (PDF)
          </a>
        </Button>
        <Button variant="outline" className="w-full justify-start" asChild>
          <a href="/path-to-your-zip.zip" download>
            <FontAwesomeIcon icon={faFileArchive} className="mr-2" />
            Download Code Examples (ZIP)
          </a>
        </Button>
      </div>
    </section>
  );
}
