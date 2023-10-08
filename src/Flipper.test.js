import { fireEvent, render } from '@testing-library/react';
import Flipper from './Flipper';

beforeEach(function() {
    jest
      .spyOn(Math, "random")
      .mockReturnValueOnce(0.25)
      .mockReturnValueOnce(0.75);
  });
  
 
it('renders without crashing', () => {
    render(<Flipper />);
  });
  
  it('matches snapshot', () => {
    const { asFragment } = render(<Flipper />);
    expect(asFragment()).toMatchSnapshot();
  }); 
  
  it("doesn't show coin when page loads", () => {
    const { queryByTestId } = render(<Flipper />);
  
    expect(queryByTestId("Coin")).toBeNull();
  });

  it("counts when heads", () => {
  const { getByText } = render(<Flipper />);

  const button = getByText("FLIP MEEEE");
  fireEvent.click(button);

  expect(
    getByText("Out of 1 flips, there have been 1 heads and 0 tails.")
  ).toBeInTheDocument();
});

it("counts when tails", () => {
  const { getByText } = render(<Flipper />);

  const button1 = getByText("FLIP MEEEE");
  fireEvent.click(button1);
  
  const button2 = getByText("FLIP MEEEE");
  fireEvent.click(button2);
  fireEvent.click(button2);

  expect(
    getByText("Out of 3 flips, there have been 2 heads and 1 tails.")
  ).toBeInTheDocument();
});

  
  afterEach(function() {
    Math.random.mockRestore();
  });