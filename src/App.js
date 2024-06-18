import "./App.css";
import logotype from "./assets/img/logo.svg";

function App() {
  return (
    <div className="App">
      <aside className="sideBar">
        <img src={logotype} alt="logotype" className="logo"></img>
        <div className="menu">
          <div className="navItem1">Movies</div>
          <div className="navItem2">Rated movies</div>
        </div>
      </aside>

      <div className="content">
        <div className="title">Movies</div>
      </div>

      <div className="categories">
        <div className="geners">
          Geners
          <select multiply name="genre" className="selectLarge">
            <summary>Select genre</summary>
          </select>
        </div>
        <div className="year">
          Release year
          <select multiply name="year" className="selectLarge">
            <summary>Year release</summary>
          </select>
        </div>
        <div className="rating">
          <p className="text">Ratings</p>
          <select multiply name="ratingFrom" className="selectSmall">
            <summary>From</summary>
          </select>
          <select multiply name="ratingTo" className="selectSmall">
            <summary>To</summary>
          </select>
        </div>
        <div className="reset">Reset filters</div>
      </div>
    </div>
  );
}

export default App;
