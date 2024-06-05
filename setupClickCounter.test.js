import { setupCounter } from './setupCounter.js';

test('setupCounter initializes counter and sets initial innerHTML', () => {
  // Create a mock element
  const element = document.createElement('button');

  // Call the function with the mock element
  setupCounter(element);

  // Check if the initial innerHTML was set correctly
  expect(element.innerHTML).toBe('count is 0');
});