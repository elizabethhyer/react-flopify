export function addGenre(data) {
  return (dispatch) => {
    fetch("http://localhotst:300/ap/v1/genres", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
  };
}
