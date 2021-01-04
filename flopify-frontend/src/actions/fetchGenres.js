export function fetchGenres() {
  return (dispatch) => {
    console.log("c");
    fetch("http://localhost:3000/api/v1/genres")
      .then((response) => response.json())
      .then((genres) => {
        console.log("d");
        dispatch({ type: "FETCH_GENRES", payload: genres });
      });
  };
}
