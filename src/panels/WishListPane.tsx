import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const WishListPane = () => {
  const bookArray = useSelector((state:any) => state.myBooks);
  const listItems = bookArray.map((book:any, key:any) => {
    return (
      <div className="card" key={key}>
      <div className="card-body">
        <h4 className="card-title">{book.title}</h4>
        {/* <p className="card-text">{book.volumeInfo.description}</p> */}
        {/* <a href="#" className="card-link" onClick={() => dispatch(addBookToList({title:book.volumeInfo.title, description:book.volumeInfo.description}))}>Add to Wishlist</a> */}
      </div>
    </div>
    );
  });
  return (
    <div>
      <p>WishList({bookArray.length})</p>
      {listItems}
    </div>
  );
}

export default WishListPane;