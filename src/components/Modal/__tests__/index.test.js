import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from "..";



const mockToggleModal = jest.fn();

const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

afterEach(cleanup);

describe('Modal component', () => {
  it('renders', () => {
    // baseline render test
    console.log('Modal rendered')
  });

  //snapshot test
  // it('matches snapshot DOM node structure', () => {
  //   // Arrange snapshot - declare vars
  //   // Assert the match
  // })

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} />)
    expect(asFragment()).toMatchSnapshot()
  });


});

describe('Click event', () => {
  it('calls onClose handler', () => {

    // Arrange: Render Modal
    const { getByText } = render(<Modal
      onClose={mockToggleModal}
      currentPhoto={currentPhoto} />);

    //Act: Simiulate Click event
    fireEvent.click(getByText('Close this modal'));

    //Assert: expected matcher
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
})