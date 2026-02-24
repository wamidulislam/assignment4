1. Ans: getElementById() mean find one element by it's id.
   getElementsByClassName() mean find multiple elements by their
   class name.
   querySelector() mean find first element matching a CSS selector.
   querySelectorAll mean finds all elements matching a CSS
   selector (returns a NodeList).

2. Ans: Use document.createElement("tag") to make a new element.
   Add text with innerText.
   Insert it into the DOM using appendChild.

3. Event happens on the element you click. Then it goes up to
   the parent elements.
   Example: Click a button inside a div. Event goes button, div,
   body, html.

4. Put one event listener on the parent, not on every child.
   New child elements will work automatically with that listener.

5. preventDefault() meaning stops the browser’s default behavior.
   stopPropagation() meaning the event from moving to parent elements.
