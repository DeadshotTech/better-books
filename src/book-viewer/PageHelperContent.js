export default function PageHelperContent({ helperContent }) {
  return (
    <div className="page-images">
      {helperContent?.map((content, index) => {
        return (
          <div className="image-container" key={index}>
            <img src={content.imageUrl} alt={content.imageUrl} />
            <p>{content.description}</p>
          </div>
        );
      })}
    </div>
  );
}
