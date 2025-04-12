import React, { useState } from "react";
import { client } from "../lib/teleparty";

interface Props {
  onRoomJoined: () => void;
  setNickname: (nickname: string) => void;
}

const RoomForm: React.FC<Props> = ({ onRoomJoined, setNickname }) => {
  const [roomId, setRoomId] = useState("");
  const [nickname, setLocalNickname] = useState("");

  const handleJoin = async () => {
    await client.connect();
    setNickname(nickname);
    client.setNickname(nickname);
    await client.joinRoom(roomId);
    onRoomJoined();
  };

  const handleCreate = async () => {
    await client.connect();
    setNickname(nickname);
    client.setNickname(nickname);
    await client.createRoom();
    onRoomJoined();
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <input placeholder="Nickname" value={nickname} onChange={(e) => setLocalNickname(e.target.value)} className="input" />
      <input placeholder="Room ID" value={roomId} onChange={(e) => setRoomId(e.target.value)} className="input" />
      <button onClick={handleJoin} className="btn">Join Room</button>
      <button onClick={handleCreate} className="btn">Create Room</button>
    </div>
  );
};

export default RoomForm;
