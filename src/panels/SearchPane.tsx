import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BookView from '../components/BookView';
import { addBookChange } from '../actions/index';
import 'bootstrap/dist/css/bootstrap.min.css';

let isDispatchOn = false;
let previousState = "";
let timerId: any;

const SearchPane = () => {
  const dispatch = useDispatch();

  const [bookType, setBookType] = useState<string>("");

  const wrapDispatch = (text: any) => { //main difficulty: to control dispatch rate, I wrap the dispatch()
    if (isDispatchOn) {
      return;
    }
    dispatch(addBookChange(text));
    isDispatchOn = true;
    previousState = text;
    timerId = setTimeout(() => timeListener(), 500); //after dispatch, timeout will run, during that, dispatch can not be done by isDispatch
  }

  const timeListener = () => {
    clearTimeout(timerId);
    isDispatchOn = false;
    if (bookType == previousState) {
      return;
    }
    else {
      wrapDispatch(bookType); //if any valid change, dispatch again after 500ms
    }
  }

  useEffect(() => {
    wrapDispatch(bookType);
  },[bookType]); //after booktype change and component render, dispatch will be run

  return (
    <div className="d-flex flex-column">
      <div className="d-flex">
        <input type="text" className="form-control" value={bookType} placeholder="Type Keyword here!" onChange={(e) => setBookType(e.target.value)}></input>
      </div>
      <div className="d-flex flex-grow-1">
        <BookView />
      </div>
    </div>
  );
}

export default SearchPane;