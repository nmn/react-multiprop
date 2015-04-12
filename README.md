# react-multiprop
Very simple component to to cycle through a list of props on a child Component.

Imagine what a photo carousel does with images. (when set to automatically progress on timers). This component does the same with React components.
Of course, anyone can write something like this quickly. This there to save time, as this is a fairly common pattern.

The API is pretty simple. The only required props are:
### component — *A React Class*
This is the class that will be the child component.

### changingProps — *An array of objects*
Each object in this array will take turns being passed as the props to the child component

### Interval - *number*
Number of milliseconds between switches.


Create an issue for any question/clarification.