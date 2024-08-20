import styled from "styled-components";

export const Container = styled.section`
  /* padding: 4rem; */
  width: 80%;
  margin: auto;
  /* background-color: #f5f5f5; */

  header {
    text-align: center;
    h2 {
      text-align: center;
      font-size: 4rem;
      display: block;
      font-size: 1.5em;
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
      unicode-bidi: isolate;
    }
    p {
      color: #7191e6;
      font-weight: 500;
    }
  }

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 3rem;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      max-width: 40rem;
      gap: 2rem;
      background-color: #7191e6;
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s;
      img {
        width: 4rem;
      }
      a {
        color: black;
        font-weight: 500;
      }
      &:hover {
        background-color: #e31f71;
        a {
          /* color: #fff; */
        }
      }
    }
  }

  @media (max-width: 960px) {
    .contacts {
      flex-direction: column;
      div {
        width: 100%;
        flex-direction: column;
      }
    }
  }
`;
