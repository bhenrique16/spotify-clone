import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  return (
    <Container>
      <div className="search__bar">
        <FaSearch />
        <input type="text" placeholder="Artistas, músicas ou podcasts" />
      </div>
      <div className="">
        <a href="">
          <CgProfile />
        </a>
      </div>
    </Container>
  );
}

const Container = styled.div``;
