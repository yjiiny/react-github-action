import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test("the counter starts at 0", () => {
	render(<App />); // App 컴포넌트 렌더링
	// screen 객체로 원하는 요소에 접근
	const counterElement = screen.getByTestId("counter");
	// id가 counter인 요소의 텍스트가 0인지 테스트
	expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text', () => {
  render(<App />);

  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
})

test('plus button has correct text', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
})

test('When the + button is pressed, the counter changes to 1', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('plus-button');
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
})

test("on/off-button has blue color", () => {
  // App 컴포넌트 렌더링
  render(<App />);
  // screen object로 원하는 엘리먼트에 접근 (접근할 떄 ID로 접근)
  const buttonElement = screen.getByTestId("on/off-button")
  // on/off 버튼 색깔을 파란색으로
  expect(buttonElement).toHaveStyle({backgroundColor: "blue"});
})

test("Prevent the -, + button from being pressed when the on/off button is clicked", () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
})