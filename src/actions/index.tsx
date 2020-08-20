
export const TYPE_CHANGED = "TYPE_CHANGED";
export const ADD_BOOK = "ADD_BOOK";
// export function addArticle(payload: any) {
//   return { type: ADD_ARTICLE, payload }
// };

export function addBookChange(payload: any) {
  return { type: TYPE_CHANGED, payload };
}

export function addBookToList(payload: any) {
  return { type:ADD_BOOK, payload};
}