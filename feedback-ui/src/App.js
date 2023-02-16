import "./App.css";
import { Container } from "./components/styled/Container.styled";
import GlobalStyles from "./components/styled/Global";
import { Wrapper } from "./components/styled/Wrapper.styled";
import { Footer } from "./components/styled/Footer.styled";
import { Content } from "./components/styled/Content.styled";
import { Form } from "./components/styled/Form.styled";
import { Menu } from "./components/styled/Menu.styled";

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Container>
          <Content>
            <Form inputHeight="60" areaHeight="160">
              <h1>Reach out to us!</h1>
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email" />
              <textarea placeholder="Your feedback" />
              <button>Send message</button>
            </Form>
            <div className="smile1" />
            <div className="smile2" />
            <div className="smile3" />
            <div className="earth" />
          </Content>
          <Footer>
            <Menu />
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
