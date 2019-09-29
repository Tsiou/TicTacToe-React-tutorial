# TicTacToe-React-tutorial

Intro tutorial to React, taken from the original docs here [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)

#### Extra work done:

* All 6 optional items completed.
* Refactored to 2 main components (Board, StatusPanel).
* Broke bigger components (Board, StatusPanel) into smaller sub-components (List, ListItem, SortButton).
* Added Row component to board, Row renders the Square components.
* Added MoveList, ListItem, SortButton components to StatusPanel for better encapsulation.
* Added FontAwesome icons to SortButton.
* Changed StatusPanel to a hook component using useState hook for sorting changes.
* Refactored props to childProps on some components.

### Running the app

Requirements:
* [git client](https://www.git-scm.com/)
* [node](https://nodejs.org/en/)

```
git clone https://github.com/Tsiou/TicTacToe-React-tutorial.git TicTacToe-React-tutorial

cd TicTacToe-React-tutorial

npm install

npm start
```

