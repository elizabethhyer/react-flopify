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
      let findGenre = state.genres.find(
        (g) => g.id === action.payload.genre_id
      );
      let movies = findGenre.movies.map((m) => {
        if (m.id === action.payload.id) {
          return action.payload;
        } else {
          return m;
        }
      });
      findGenre.movies = movies;
      let newGenreArr = state.genres.map((g) => {
        if (g.id === findGenre.id) {
          return findGenre;
        } else {
          return g;
        }
      });
      return { ...state, genres: newGenreArr };

    default:
      return state;
  }
}
