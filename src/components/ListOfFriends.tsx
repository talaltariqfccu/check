import React from "react";
import { persons } from "../constants/index";
import Link from "next/link";

export const ListOfFriends = () => {
  return (
    <div>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            <Link href={`/about/${person}`}>{person}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
