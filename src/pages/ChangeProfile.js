import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState("");
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
        placeholder="Enter your name here..."
      />
      <br />
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        Change Name
      </button>
    </div>
  );
};
