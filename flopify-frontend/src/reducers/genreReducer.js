export default function genreReducer(state = { genres: [] }, action) {
  switch (action.type) {
    case "FETCH_GENRES":
      return { genres: action.payload };

    default:
      return state;
  }
}
