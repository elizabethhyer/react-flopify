export function addMovie(movie, genreId) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/genres/${genreId}/movies`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(movie),
    })
      .then((response) => response.json())
      .then((genre) => dispatch({ type: "ADD_MOVIE", payload: genre }));
  };
}
