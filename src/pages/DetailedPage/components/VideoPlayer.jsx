export default function VideoPlayer({ videoId }) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="relative pb-[56.25%] h-0 overflow-hidden">
        {/* <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
        <iframe
          className="top-0 left-0 w-full h-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NW6Dgax2d6I?si=Vp3L8FmaiFLN4-mX"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
