export const getStorageBookmarks = () => {
  return localStorage.getItem('bookmarks');
};
export const setStorageBookmarks = bookmarks => {
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
};
