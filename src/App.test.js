import { render, screen } from '@testing-library/react';
import App from './App';
import Notification from './cmpts/notification/notification';

test('display title', () => {
  render(<App />);
  const linkElement = screen.queryByText(/Botonera de notificaciones/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders button green', () => {
  render(<App />);
  const greenButon = screen.queryByText(/green/i);
  expect(greenButon).toBeInTheDocument();
});
test('renders button red', () => {
  render(<App />);
  const greenButon = screen.queryByText(/red/i);
  expect(greenButon).toBeInTheDocument();
});
test('renders button purple', () => {
  render(<App />);
  const greenButon = screen.queryByText(/purple/i);
  expect(greenButon).toBeInTheDocument();
});
test('renders button pink', () => {
  render(<App />);
  const greenButon = screen.queryByText(/pink/i);
  expect(greenButon).toBeInTheDocument();
});
test('renders button pink', () => {
  render(<Notification/>);
  const time = screen.queryByText(/Just now/i);
  expect(time).toBeInTheDocument();
});