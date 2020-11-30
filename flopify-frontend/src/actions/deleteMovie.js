export const deleteMovie = (movieId, genreId) => {
  return (dispatch) => {
    return fetch(
      `http://localhost:3000/api/v1/genres/${genreId}/movies/${movieId}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((genre) => {
        dispatch({ type: "DELETE_MOVIE", payload: genre });
      });
  };
};
