import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import style from "../styles/bookDetails.module.css";

const BookDetails = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getBook();
  }, []);

  const getBook = async () => {
    const data = await axios.get(`http://localhost:5000/books/${id}`);
    setBook(data.data.Book);
  };

  return (
    <div className={style.BookDetailsContainer}>
      <div className="container">
        <div className={style.BookDetailsWrapper}>
          <div className={style.div1}>
            <img
              className={style.BookDetailsImg}
              src="https://leaveitwithme.com.au/wp-content/uploads/2013/11/dummy-image-square.jpg"
              alt=""
            />
          </div>
          <div className={style.div2}>
            <h3>{book.title}</h3>
            <p>تأليف:ليلي العمري</p>
            <p>تأليف:ليلي العمري</p>
            <p>تأليف:ليلي العمري</p>
            <p>تأليف:ليلي العمري</p>
            <p>تأليف:ليلي العمري</p>
            <div className="flex align-center gap-2">
              <span>الوسوم:</span>
              <span>وصف</span>
              <span>وصف</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
