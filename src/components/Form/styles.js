import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  place-items: center;
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 80%;
    input,
    textarea {
      width: 60rem;
      padding: 1rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      border: none;
      /* border:#212121; */
      background: none;
      border: 1px solid #8d2dff;
      color: white;
      font-weight: 600;
      caret-color: #7191e6;
      color: gray;
      background-color: light-gray;
      &::placeholder {
        color: #8d2dff;
      }
    }

    textarea {
      height: 20rem;
      overflow-y: auto;
      resize: none;
      &::placeholder {
        color: #8d2dff;
      }
    }

    button {
      padding: 1rem 2rem;
      text-transform: uppercase;
      background-color: #7191e6;
      border: none;
      cursor: pointer;
      color: #7191e6;
      border-radius: 2rem;
      font-weight: 500;
      transition: filter 0.25s;
      margin-bottom: 1rem;
    }
  }
  /* .button-going-top{
  padding: 1rem 2rem;
      text-transform: uppercase;
      background-color: #5820b0;
      border: none;
      cursor: pointer;
      color: rgb(255, 255, 255);
      border-radius: 2rem;
      font-weight: 500;
      transition: filter 0.25s;
      margin-bottom:1rem; 
} */
  @media (max-width: 740px) {
    form {
      width: 100%;

      input,
      textarea {
        width: 100%;
      }
    }
  }
`;

export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;

  h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
  }

  button {
    padding: 1rem 2rem;
    text-transform: uppercase;
    background-color: #7191e6;
    border: none;
    cursor: pointer;
    color: #7191e6;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    margin-bottom: 1rem;
  }
`;
