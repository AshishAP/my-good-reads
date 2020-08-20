import { TYPE_CHANGED, ADD_BOOK } from '../actions/index';

const initState = {
  bookCategory: "",
  myBooks: []
};

const rootReducer = (state = initState, action: any) => {
  if (action.type == TYPE_CHANGED) {
    return {
      ...state,
      bookCategory: action.payload
    };
  }

  if (action.type == ADD_BOOK) {

    let i:number;
    for (i = 0; i < state.myBooks.length; i++) {
      if ((state.myBooks[i] as any).title == action.payload.title && (state.myBooks[i] as any).description == action.payload.description) {
        return state;
      }
    }

    return Object.assign(
      {}, state, {myBooks:state.myBooks.concat(action.payload)}
    );
  }
  return state;
};

export default rootReducer;