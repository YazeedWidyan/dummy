import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import style from "../styles/home.module.css";

const Home = () => {
  const [bookList, setBookList] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (keyword == "") {
      getData();
    } else {
      getSearchResult();
    }
  }, [keyword]);

  const getData = async () => {
    const data = await axios.get("http://localhost:5000/books");
    setBookList(data.data.books);
  };

  const getSearchResult = async () => {
    const data = await axios.get(
      `http://localhost:5000/books/search?title=${keyword}`
    );
    setBookList(data.data);
  };

  return (
    <div>
      {/* header */}
      {/* search bar */}
      {/* books list */}
      <SearchBar setKeyword={setKeyword} />
      <div className={style.homeContainer}>
        <div className="container">
          <div className={style.bookWrapper}>
            <div className={style.bookRightSection}>
              <div className={style.filterWrapper}>
                <div>
                  <h3>المواضيع</h3>
                </div>
                <div className={style.filtersList}>
                  <div className="flex align-center">
                    <input type="checkbox" />
                    <h4>الكل</h4>
                  </div>
                  <div className="flex align-center">
                    <input type="checkbox" />
                    <h4>الكل</h4>
                  </div>
                  <div className="flex align-center">
                    <input type="checkbox" />
                    <h4>الكل</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.bookLeftSection}>
              {bookList?.map((book) => {
                return <BookCard key={book._id} id={book._id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
