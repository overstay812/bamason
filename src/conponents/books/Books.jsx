import React from "react";
import styles from "./Books.module.css";

const Books = ({ booksArray }) => {
  return (
    <div className={styles.container}>
        <h1>Список книг</h1>
      {booksArray.map((item, index) => {
        return (
            <div className={styles.wrapper}>
          <h4 className={styles.authorName}>{`${index + 1} ${item.author}`}</h4>
          <span className={styles.bookTitle}>{item.title}</span>
        </div>
        )
      })}
    </div>
  );
};
export default Books;
