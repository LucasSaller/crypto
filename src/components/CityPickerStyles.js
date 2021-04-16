import styled from "@emotion/styled";

const CityPickerStyles = styled.div`
  flex: 2;
  min-width: 320px;
  padding: 20px;
  background: rgb(222, 0, 0, 0);
  border-radius: 7px;

  input {
    margin-top: 25px;
    padding: 10px;
    width: 94%;
    font-size: 1.1rem;
    border: 2px solid transparent;
    border-radius: 7px;
  }
  button {
    text-transform: uppercase;
    width: 100%;
    color: white;
    font-size: 1em;
    background: rgb(114, 125, 255);
    padding: 15px 30px;
    border-radius: 7px;
    box-shadow: rgb(104 112 210) 0px 5px;
    letter-spacing: 2px;
    margin-top: 10px;
    border: none;
    cursor: pointer;
  }
  label {
    font-weight: 600;
  }
`;

export default CityPickerStyles;
