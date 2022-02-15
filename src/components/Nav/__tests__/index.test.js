import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';
const categories = [
  { name: 'portraits', description: 'Portrais of people in my life' }
]
//use mock fn as props for nav component
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
  //baseline
  it('renders', () => {
    render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory} />);
  })

  //snapshot
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory} />);
    //val compare
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    // Arrange
    const { getByLabelText } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory} />)
    // Assert
    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});


describe('links are visible', () => {
  it('inserts text into the links', () => {
    const { getByTestId } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory} />);

    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About Me');
  });
})

