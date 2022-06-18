import React from "react";
import { NavContainer } from "./NavStyles";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <NavContainer>
      <Link
        to="/"
        style={{
          fontSize: 40,
          color: "red",
          marginLeft: 20,
          textDecoration: "none",
          marginTop: 30,
        }}
      >
        NOT NETFLIX
      </Link>
    </NavContainer>
  );
}
