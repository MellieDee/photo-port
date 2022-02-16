import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';


afterEach(cleanup);


describe('ContactForm component', () => {
  //baseline
  it('renders', () => {
    render(<ContactForm
    />);
  })

  //test for h1 = Contact me
  it('renders', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('contactForm')).toHaveTextContent('Contact me')
  });

  //test for button = Submit
  it('renders', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('cfButton')).toHaveTextContent('Submit')
  })

})
//snapshot
it('matches snapshot', () => {
  const { asFragment } = render(<ContactForm
  />);
  //val compare
  expect(asFragment()).toMatchSnapshot();
});
