const AboutTemplate = ({ about }) => {
  return (
    <>
      {about.map((paragraph, index) => {
        let modifiedText = paragraph.text;

        // Apply highlights
        paragraph.highlight?.forEach((phrase) => {
          const regex = new RegExp(`(${phrase})`, "gi");
          modifiedText = modifiedText.replace(
            regex,
            `<strong class="text-cerise-600 font-semibold">$1</strong>`
          );
        });

        // Apply underlines
        paragraph.underline?.forEach((phrase) => {
          const regex = new RegExp(`(${phrase})`, "gi");
          modifiedText = modifiedText.replace(
            regex,
            `<strong class="text-dull-lavender-600 font-semibold relative underline decoration-wavy decoration-1 underline-offset-2">$1</strong>`
          );
        });

        return (
          <p
            key={index}
            className="mt-4 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: modifiedText }}
          />
        );
      })}
    </>
  )
}

export default AboutTemplate