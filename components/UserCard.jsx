import React, { useState } from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import UserCardProps from "./UserCardProps";

function UserCard(props) {
  const { user } = props;
  const [showed, setShowed] = useState(false);

  return (
    <div className="border-bottom" onload={() => setShowed(false)}>
      <div
        className="d-flex align-item-center p-3 "
        onClick={() => (showed ? setShowed(false) : setShowed(true))}
      >
        <img src={user.image} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{user.name}</span>
      </div>
      <div> {showed ? <UserCardProps user={user} /> : ""}</div>
    </div>
  );
}

export default UserCard;
