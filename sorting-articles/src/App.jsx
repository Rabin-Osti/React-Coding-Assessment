import React,{useState,useEffect} from "react";
import "./App.css";
import Articles from "./components/Articles";

function App({ articles }) {
  const [articlesList, setArticlesList] = useState(articles);
  useEffect(() => {
    sortByUpvotes();
  }, []);

  const sortByUpvotes = () => {
    let newArticles = [...articles];
    newArticles = newArticles.sort((a, b) => b.upvotes - a.upvotes);
    setArticlesList(newArticles);
  };
  const sortByDates = () => {
    let newArticles = [...articles];
    newArticles = newArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    setArticlesList(newArticles);
  };
  return (
    <div className="App">
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button data-testid="most-upvoted-link" className="small" onClick={sortByUpvotes}>
          Most Upvoted
        </button>
        <button data-testid="most-recent-link" className="small" onClick={sortByDates}>
          Most Recent
        </button>
      </div>
      <Articles articles={articlesList} />
    </div>
  );
}

export default App;
