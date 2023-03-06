import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../styles/bookCard.module.css";

const BookCard = ({ id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/book/${id}`)}
      className={style.BookCardContainer}
    >
      <div className={style.div1}>
        <img
          className={style.bookCardImg}
          src="https://leaveitwithme.com.au/wp-content/uploads/2013/11/dummy-image-square.jpg"
          alt=""
        />
      </div>
      <div className={style.div2}>
        <h3>
          جهود القدماء والمحدثين في وضع الأصول العلمية لأسس تحقيق التراث العربي
        </h3>
        <div className="flex justify-between">
          <p>تأليف:ليلي العمري</p>
          <p>تأليف:ليلي العمري</p>
        </div>
        <div className="flex justify-between">
          <p>تأليف:ليلي العمري</p>
          <p>تأليف:ليلي العمري</p>
        </div>
        <p>تأليف:ليلي العمري</p>
        <div className="flex align-center gap-2">
          <span>الوسوم:</span>
          <span>وصف</span>
          <span>وصف</span>
        </div>
      </div>

      <div className={style.div3}>icons</div>
    </div>
  );
};

export default BookCard;
