import React, { useState } from "react";
import RoomForm from "./components/RoomForm";
import Chat from "./components/Chat";

const App: React.FC = () => {
  const [joined, setJoined] = useState(false);
  const [nickname, setNickname] = useState("");

  return (
    <div className="max-w-md mx-auto mt-10">
      {!joined ? (
        <RoomForm onRoomJoined={() => setJoined(true)} setNickname={setNickname} />
      ) : (
        <Chat />
      )}
    </div>
  );
};

export default App;
