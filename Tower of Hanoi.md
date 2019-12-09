Rules
=====

1. Only one disk can be moved at a time

2. Each move consists of taking the upper disk from the stack and placing it on top of another stack

3. No disk may be placed on top of a smaller disk

Hints
=====

* Make each tower a flex box that stacks elements from bottom to top using following CSS properties:
```
{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
}
```
* You will have the player click twice for each move - first to pick the source tower, second to pick the destination tower. Use a variable to keep track of which mode the player is in.
* Add a click handler to each of the three towers. Use `event.currentTarget` inside the event handler to determine which tower was clicked.
* Use the DOM property `childElementCount` to find how many disks are in a tower.
* Use the DOM property `lastElementChild` to find the disk on top of a tower.
* Use the DOM method `appendChild()` to add a disk to a tower (you have already used this method many times in previous assignments). Note that when you use `appendChild` on an element that already has a parent, it is automatically removed from the old parent and added to the new one.

### Add a comment to your submission stating your teammates name

Criteria
--------
* Worked with a teammate and submitted name in comment
* Created towers and disks in the DOM
* Added click handlers to towers and disks
* Game is functional and there is a win condition.