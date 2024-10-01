export function FilmCard({ src, title, year }) {
  return (
    <div className="film_item">
      <img className="filmImg" src={src}></img>
      <div className="filmSummary">
        <div className="film_title">{title}</div>
        <div className="year_relise">{year}</div>
        <div className="rating"></div>
      </div>
    </div>
  );
}
