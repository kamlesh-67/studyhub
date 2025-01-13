export default function NotesSection() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Lecture Notes</h2>
      <p className="mb-4">
        In this lecture, we covered the following key points:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Introduction to React Hooks</li>
        <li>useState and useEffect explained</li>
        <li>Custom hooks and their benefits</li>
      </ul>
      <p>
        For more information on React Hooks, check out the{" "}
        <a
          href="https://reactjs.org/docs/hooks-intro.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          official React documentation
        </a>
        .
      </p>
    </section>
  );
}
