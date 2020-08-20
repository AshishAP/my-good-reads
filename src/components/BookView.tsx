import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getBooksByType } from '../shared/getBooksByCategory';
import { addBookToList } from '../actions/index';

const BookView = () => {
  const bookCategory = useSelector((state: any) => state.bookCategory);
  const [availaleBooks, setAvailableBooks] = useState<any>([]);
  const dispatch = useDispatch();

  console.log("BookView:" + bookCategory);

  useEffect(
    () => {
      requestBooks();
    }, [bookCategory] 
  );

  async function requestBooks() { //must be async function. this is point.
    if (bookCategory == "") {
      setAvailableBooks([]);
      return;
    } else {
      const allBooks = await getBooksByType(bookCategory);
      setAvailableBooks(allBooks);
    }
  }

  if (availaleBooks.length == 0) {
    return (
      <div className="m-1 p-1">
        Check your internet or enter correct keyword!
      </div>
    );
  } else {
    console.log(availaleBooks);
    if (availaleBooks.totalItems == 0) {
      return (
        <div className="m-1 p-1">
          Check your internet or enter correct keyword!
        </div>
      );
    }
    const listItems = availaleBooks.items.map((book: any, key:any) => {
      // <BookItem key={book.id}  title={book.volumeInfo.title} description={book.volumeInfo.description} />
      return (
        <div className="card" key={key}>
          <div className="card-body">
            <h4 className="card-title">{book.volumeInfo.title}</h4>
            <p className="card-text">{book.volumeInfo.description}</p>
            <a href="#" className="card-link" onClick={(e) => {e.preventDefault();dispatch(addBookToList({title:book.volumeInfo.title, description:book.volumeInfo.description}))}}>Add to Wishlist</a>
          </div>
        </div>);
    }
    );
    return (
      <div className="m-3">
        {listItems}
      </div>
    );
  }
}

export default BookView;