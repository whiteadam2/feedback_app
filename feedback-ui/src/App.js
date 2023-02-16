import "./App.css";
import { Container } from "./components/styled/Container.styled";
import GlobalStyles from "./components/styled/Global";
import { Wrapper } from "./components/styled/Wrapper.styled";
import { Footer } from "./components/styled/Footer.styled";
import { Content } from "./components/styled/Content.styled";

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Container>
          <Content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              dolore eaque earum laboriosam, numquam pariatur quam repellendus
              saepe. Eaque error facilis ipsa ipsam laboriosam praesentium quia
              repellendus temporibus, velit voluptas?
            </p>
          </Content>
          <Footer>
            <div className="decor-top" />
            <div className="decor-right" />
            <div className="decor-left" />
          </Footer>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
