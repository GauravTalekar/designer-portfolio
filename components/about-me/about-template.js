const AboutTemplate = ({ about }) => {
  return (
    <>
      {about.map((paragraph, index) => {
        let modifiedText = paragraph.text;

        // Function to escape special regex characters
        const escapeRegExp = (str) =>
          str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

        // Create a mapping of phrases to their corresponding highlighted versions
        const highlightMap = new Map();

        paragraph.highlight?.forEach((phrase) => {
          highlightMap.set(
            phrase.toLowerCase(),
            `<strong class="text-cerise-600 font-semibold">${phrase}</strong>`
          );
        });

        paragraph.underline?.forEach((phrase) => {
          highlightMap.set(
            phrase.toLowerCase(),
            `<strong class="text-dull-lavender-600 font-semibold relative underline decoration-wavy decoration-1 underline-offset-2">${phrase}</strong>`
          );
        });

        // Sort keys by length (longest first) to avoid partial replacements
        const sortedPhrases = [...highlightMap.keys()].sort(
          (a, b) => b.length - a.length
        );

        // Create a single regex pattern from sorted phrases
        const regex = new RegExp(
          sortedPhrases.map(escapeRegExp).join("|"),
          "gi"
        );

        // Replace all occurrences using the map
        modifiedText = modifiedText.replace(regex, (match) => highlightMap.get(match.toLowerCase()) || match);

        return (
          <p
            key={index}
            className="mt-4 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: modifiedText }}
          />
        );
      })}
    </>
  );
}

export default AboutTemplate;
