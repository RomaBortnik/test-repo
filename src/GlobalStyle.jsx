import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Helvetica Neue',
    sans-serif; */
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // background-image: linear-gradient(
  //   to right,
  //   rgb(173, 243, 222),
  //   rgb(239, 248, 154)
  // );
  // color: #000;
  // font-size: 18px;
  // font-weight: 500;

  // background-color: #b8ecec;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

li {
  list-style: none;
}
`;
