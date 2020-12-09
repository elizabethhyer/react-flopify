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
        console.log("im in a waiting area and coming after event listener");
        dispatch({ type: "DELETE_MOVIE", payload: genre });
      });
  };
};
//Thunk enables us to make asynchronous requests - so we can make requests to back end and still dispatch action object
//It does this by allowing us to return functions from action creators and redux-thunk then invokes returned function and passes in disptach method as an argument so we can call dispatch when the data we want is ready
