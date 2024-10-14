import "./App.css";
import logotype from "./assets/img/logo.svg";
import { FilmCard } from "./Film_card";
import { DATA } from "./Data";

function App() {
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
        <div className="film_cards"></div>
      </main>
    </div>
  );
}

export default App;
