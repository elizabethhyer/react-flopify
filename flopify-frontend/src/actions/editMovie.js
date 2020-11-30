export const editMovie = (movieId, genreId) => {
  return (dispatch) => {
    return fetch(
      `http://localhost:3000/api/v1/genres/${genreId}/movies/${movieId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "PATCH",
        body: JSON.stringify(movie),
      }
    )
      .then((response) => response.json())
      .then((genre) => {
        if (genre.error) {
          alert(genre.error);
        } else {
          dispatch({ type: "EDIT_MOVIE", payload: genre });
        }
      });
  };
};
