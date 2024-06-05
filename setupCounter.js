// This function sets up a click counter on a given HTML element.
export function setupCounter(element) {
  // Initialize a variable to keep track of the number of clicks.
  let clickCount = 0

  // Define a function to update the click count and the innerHTML of the element.
  const updateClickCount = (newCount) => {
    // Update the click count.
    clickCount = newCount

    // Update the innerHTML of the element to display the current click count.
    element.innerHTML = `count is ${clickCount}`
  }

  // Add a click event listener to the element. 
  // Each time the element is clicked, the click count is incremented by 1.
  element.addEventListener('click', () => updateClickCount(clickCount + 1))

  // Initialize the click count and the innerHTML of the element.
  updateClickCount(0)
}