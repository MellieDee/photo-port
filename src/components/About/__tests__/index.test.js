import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import About from "..";



//configure testing environment by adding a utility function to keep things clean
afterEach(cleanup);

// declare component to be tested
describe('About component', () => {
  //1st test - baseline for rendering:
  //it function:  first argument - string declares what is being tested
  // second argument - callback function runs the test. (could also use test)
  it('renders', () => {
    render(<About />);
  });

  //2nd test - Test Case:

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    // render About

    expect(asFragment()).toMatchSnapshot();
  });
})