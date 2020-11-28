export default function genreReducer(state = { genres: [] }, action) {
  switch (action.type) {
    case "FETCH_GENRES":
      return { genres: action.payload };

    case "ADD_GENRE":
      return { ...state, genres: [...state.genres, action.payload] };

    default:
      return state;
  }
}
