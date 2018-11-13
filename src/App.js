import React from "react";
import Layer from "./components/Layer";
import Repository from './components/Repository';
import Container from "./components/Container";
import Card from "./UI/blocks/Card";
import withLoading from "./hoc/withLoading";
import { withTheme } from 'styled-components';

const WithLoadingRepository = withLoading({
  url: "https://api.github.com/repos/drcmda/react-spring",
  component: Repository
});

function App({ theme }) {
  return (
    <Layer open={true}>
      <Layer.Backdrop />
      <Container>
        <WithLoadingRepository>
          <Layer.Modal>
            <Card>
            <Card.Header>
              <Repository.Name />
              <Repository.Link />
            </Card.Header>
            <Card.Body><Repository.Description /></Card.Body>
            <Card.Footer>
              <Repository.Stars />
              <Repository.RefreshButton />
            </Card.Footer>
            </Card>
          </Layer.Modal>
        </WithLoadingRepository>
      </Container>
    </Layer>
  );
}

export default withTheme(App);
