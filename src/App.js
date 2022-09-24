import "./App.css";
import Header from "./components/Header/Header";
import FocusGraph from "./components/FocusGraph/FocusGraph";
import Footer from "./components/Footer/Footer";
import { GlobalStyle } from "./theme/mainTheme";
import { StyledSideFrame } from "./components/SideFrame/SideFrame.styled";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledSideFrame left={true} right={false} />
      <SideMenu />
      <StyledSideFrame right={true} left={false} />
      <Footer />
      <FocusGraph />
    </>
  );
}

export default App;
