import React from "react";
import styled from "@emotion/styled";
import Home from "./Home";

const HomeStyles = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  min-height: 50vh;
  .row {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
`;
export default HomeStyles;
