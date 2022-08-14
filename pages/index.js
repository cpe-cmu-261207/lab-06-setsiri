import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

import axios from "axios";
import { useState } from "react";
import UserCard from "../components/UserCard";
import UserCardProps from "../components/UserCardProps";

export default function Home() {
  const [userInput, setUserInput] = useState(0);
  const [users, setUsers] = useState([]);

  const genUsers = async () => {
    if (userInput < 1) {
      alert("Invalid number of user");
      return;
    }

    const resp = await axios.get(
      `https://randomuser.me/api/?results=${userInput}`
    );
    const newUsers = [];
    for (const key of resp.data.results) {
      newUsers.push({
        name: `${key.name.first} ${key.name.last}`,
        email: key.email,
        address: `${key.location.city} ${key.location.state} ${key.location.country} ${key.location.postcode}`,
        image: key.picture.large,
      });
    }
    setUsers(newUsers);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event) => setUserInput(event.target.value)}
          value={userInput}
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      {users.map((user) => (
        <UserCard user={user} />
      ))}

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Setsiri Matewin 630610766
      </p>
    </div>
  );
}
