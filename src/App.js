import "./App.css";
import logotype from "./assets/img/logo.svg";
import {FilmCard} from "./Film_card";
import {DATA} from "./Data";

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
            <select multiple name="genre" className="filter_item__select">
              <option value="">Select genre</option>
              <option value="">Select genre</option>
              <option value="">Select genre</option>
              <option value="">Select genre</option>
            </select>
          </div>
          <div className="filter_item">
            <p className="filter_item__title">Release year</p>
            <select multiple name="year" className="filter_item__select">
              <option value="">Year release</option>
              <option value="">Year release</option>
              <option value="">Year release</option>
              <option value="">Year release</option>
            </select>
          </div>
          <div className="filter_item">
            <p className="filter_item__title">Ratings</p>
            <div className="filter_item__select">
              <select                 multiple                 name="ratingFrom"                 className="filter_item__select"               >
                <option value="">From</option>
                <option value="">From</option>
                <option value="">From</option>
                <option value="">From</option>
              </select>
              <select multiple name="ratingTo" className="filter_item__select">
                <option value="">To</option>
                <option value="">To</option>
                <option value="">To</option>
                <option value="">To</option>
                <option value="">To</option>
              </select>
            </div>
          </div>
          <button className="filter_item">Reset filters</button>
          <div className="filter_item">
            <p className="filter_item__title">Sort by</p>
            <div className="filter_item__select">
              <select name="sortBy" className="filter_item__select">
                <option value="">Sort by</option>
                <option value="">Sort by</option>
                <option value="">Sort by</option>
                <option value="">Sort by</option>
                <option value="">Sort by</option>
              </select>
            </div>
          </div>
        </div>
        <div className="film_cards">
          {DATA
              .map(row => (
                  <div className="filmCardRow">
                    {
                      row.map((item) => {
                        const { year, title, img } = item;
                        return <FilmCard src={img} title={title} year={year}/>;
                      })
                    }
                  </div>
              ))}
        </div>
      </main>
    </div>
  );
}

export default App;
