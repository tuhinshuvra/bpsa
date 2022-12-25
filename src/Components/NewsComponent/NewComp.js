import React from 'react';
import { Container } from 'react-bootstrap';
import HeadingComponent1 from '../Common/HeadingComponent1';

const NewComp = () => {
  return (
    <div>
      <Container>
        <HeadingComponent1 second="News" />
      </Container>
    </div>
  );
};

export default NewComp;