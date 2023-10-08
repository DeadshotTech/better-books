export default function PageHelperContent({
  helperContent,
  handleHelperContentClick,
}) {
  return (
    <div className="page-images">
      {helperContent?.map((content, index) => {
        return (
          <div
            className="image-container"
            key={index}
            onClick={handleHelperContentClick}
          >
            <img src={content.imageUrl} alt={content.imageUrl} />
            <p>{content.description}</p>
          </div>
        );
      })}
    </div>
  );
}
