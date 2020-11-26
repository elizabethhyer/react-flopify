export function fetchGenres() {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/genres")
      .then((response) => response.json())
      .then((genres) => dispatch({ type: "FETCH_GENRES", payload: genres }));
  };
}
