import { Box } from "@mui/material";
import styled from "styled-components";
import { Nav } from "./Nav";
import { About } from "./About";

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
    </div>
  );
}

export default App;

export const Main = styled(Box)`
  background-color: #f5f5ef;
`;
