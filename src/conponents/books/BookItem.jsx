import React from "react"
import styles from "./Books.module.css";
import PropTypes from 'prop-types'

const BooksItem = ({author, title, index}) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.authorName}>
        {index + 1} {author}
      </h4>
      <span className={styles.bookTitle}>{title}</span>
    </div>
  );
};

BooksItem.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  index: PropTypes.number
}

export default BooksItem;
