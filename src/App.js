import "./App.css";
import logotype from "./assets/img/logo.svg";
import { FilmCard } from "./Film_card";
import img1 from "./assets/img/img1.png";
import img2 from "./assets/img/img2.png";
import img3 from "./assets/img/img3.png";
import img4 from "./assets/img/img4.png";
import img5 from "./assets/img/img5.png";
import img6 from "./assets/img/img6.png";

const data = [
  {
    img: img1,
    title: "Green Mile",
    year: "1999",
  },
  {
    img: img2,
    title: "M - Eine Stadt sucht einen Mörder",
    year: "1931",
  },
];

function App() {
  let image = [img1, img2, img3, img4, img5, img6];
  let title = [
    "Green Mile",
    "M - Eine Stadt sucht einen Mörder",
    "Poor Things",
    "Coco",
    "The Dark Knight",
    "Shrek 2",
  ];
  let year = ["1999", "1931", "2023", "2017", "1999", "1931"];
  return (
    <div className="App">
      <aside className="sideBar">
        <img src={logotype} alt="logotype" className="logo"></img>
        <div className="menu">
          <button className="navItem">Movies</button>
          <button className="navItem">Rated movies</button>
          <button className="navItem">Other movies</button>
        </div>
      </aside>

      <main className="content">
        <div className="title">Movies</div>

        <div className="filter_panel">
          <div className="filter_item">
            <p className="filter_item__title">Geners</p>
            <select multiply name="genre" className="filter_item__select">
              <summary>Select genre</summary>
            </select>
          </div>
          <div className="filter_item">
            <p className="filter_item__title">Release year</p>
            <select multiply name="year" className="filter_item__select">
              <summary>Year release</summary>
            </select>
          </div>
          <div className="filter_item">
            <p className="filter_item__title">Ratings</p>
            <div className="filter_item__select">
              <select
                multiply
                name="ratingFrom"
                className="filter_item__select"
              >
                <summary>From</summary>
              </select>
              <select multiply name="ratingTo" className="filter_item__select">
                <summary>To</summary>
              </select>
            </div>
          </div>
          <button className="filter_item">Reset filters</button>
          <div className="filter_item">
            <p className="filter_item__title">Sort by</p>
            <div className="filter_item__select">
              <select name="sortBy" className="filter_item__select">
                <summary>Sort by</summary>
              </select>
            </div>
          </div>
        </div>
        <div className="film_cards">
          <div className="filmCardRow">
            {data.map((item, index) => {
              const { year, title, img } = item;
              return <FilmCard src={img} title={title} year={year}></FilmCard>;
            })}
          </div>

          <div className="filmCardRow">
            {data.map((item, index) => {
              const { year, title, img } = item;
              return <FilmCard src={img} title={title} year={year}></FilmCard>;
            })}
          </div>
          <div className="filmCardRow">
            <FilmCard src={image[2]} title={title[2]} year={year[2]} />
            <FilmCard src={image[3]} title={title[3]} year={year[3]}></FilmCard>
          </div>
          <div className="filmCardRow">
            <FilmCard src={image[4]} title={title[4]} year={year[4]} />
            <FilmCard src={image[5]} title={title[5]} year={year[5]}></FilmCard>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
