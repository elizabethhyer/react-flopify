import React, { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <button onClick={() => setLikes(likes + 1)}>Like me!</button>
      <span>{likes}</span>
    </div>
  );
};

export default LikeButton;
