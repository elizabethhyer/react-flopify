export default function genreReducer(state = { genres: [] }, action) {
  switch (action.type) {
    case "FETCH_GENRES":
      return { genres: action.payload };

    case "ADD_GENRE":
      return { ...state, genres: [...state.genres, action.payload] };

    case "ADD_MOVIE":
      let genres = state.genres.map((g) => {
        if (g.id === action.payload.id) {
          return action.payload;
        } else {
          return g;
        }
      });
      return { ...state, genres: genres };

    case "DELETE_MOVIE":
      let genres2 = state.genres.map((g) => {
        if (g.id === action.payload.id) {
          return action.payload;
        } else {
          return g;
        }
      });
      return { ...state, genres: genres2 };

    case "EDIT_MOVIE":
      let genres3 = state.genres.map((g) => {
        if (g.id === action.payload.id) {
          return action.payload;
        } else {
          return g;
        }
      });
      return { ...state, genres: genres3 };

    default:
      return state;
  }
}
