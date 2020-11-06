import React, { useState } from "react";
import styles from "./Books.module.css";

const Books = ({ booksArray }) => {
  const [pageNubmer, setPageNubmer] = useState(0);

  const getPrevPage = () => pageNubmer > 0 ? setPageNubmer(pageNubmer - 1) : null;

  const getNextPage = () => pageNubmer * 5 + 5 < booksArray.length ? setPageNubmer(pageNubmer + 1) : null;

  return (
    <div className={styles.container}>
      <h1>Список книг</h1>

      {booksArray.map((item, index) => {
        if (index < pageNubmer * 5 || index >= pageNubmer * 5 + 5) {
          return null;
        }
        return (
          <div className={styles.wrapper}>
            <h4 className={styles.authorName}>
              {index + 1} {item.author}
            </h4>
            <span className={styles.bookTitle}>{item.title}</span>
          </div>
        );
      })}
      <div className={styles.pagination}>
        <button onClick={getPrevPage}>назад</button>
        <span className={styles.counterPages}>
          {pageNubmer + 1} из {Math.floor(booksArray.length / 5)}
        </span>
        <button onClick={getNextPage}>вперед</button>
      </div>
    </div>
  );
};
export default Books;
