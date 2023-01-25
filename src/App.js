import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var emojiDictionary = {
    "😊": "smiling face with smiling eyes",
    "🤣": "rolling on the floor laughing",
    "😂": "face with tears of joy",
    "❤️": "love",
    "😍": "smiling face with heart eyes",
    "😒": "unamused face",
    "👍": "thumbs up",
    "😎": "I'm cool"
  };

  var emojiWeKnow = Object.keys(emojiDictionary);

  var [meaning, setMeaning] = useState("");

  function emojiChangeHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "sorry we dont have this emoji in our database";
    }
    setMeaning(meaning);
  }
  function onClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji App</h1>

      <input onChange={emojiChangeHandler}></input>
      <h3>emoji we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => onClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: ".5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <div
        style={{ fontSize: "1.5rem", padding: "1.5rem", fontWeight: "bold" }}
      >
        {meaning}
      </div>
    </div>
  );
}
