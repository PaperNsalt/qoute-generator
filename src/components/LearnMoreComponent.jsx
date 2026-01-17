function LearnMoreComponent({ title, paragraphs }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>

      {paragraphs.map((text, index) => (
        <p key={index} className="text-gray-600">
          {text}
        </p>
      ))}
    </div>
  );
}

export default LearnMoreComponent;