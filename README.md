# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

```bash
npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


```bash
npm run build
```

Builds the app for production to the `build` folder.

## About project

Application creates a hierarchy table from input data in JSON format. 
Every item in JSON consists of its own data and array, which items represent child data. 

### Technologies:
- React.js
- TypeScript
- State management - Redux
- Material UI
- Focus on code quality, correct usage of chosen technologies, data consistency

### Results and comments:
- Project was styled with a help of [Material-UI](https://mui.com/) framework.
- Item's data can have a variable number of attributes (key: value), and item can have a variable number of nested child items ✅
- When user click on an item, direct child items are hidden/shown ✅
- A "remove" button, which deletes an item in the data and view layer in your application ✅

### Issues
⚠️ Deleting of child items does not work (need to implement deleting in tree data structure)

### Future tasks and improvements
- Solve all Issues
- Improve styles of collapsible table component, because they look pretty basic (for example [add Styled Components](https://mui.com/system/styled/))
- Better display of data in cells (date formatting, etc.)
- Loading JSON from server
- Improve a11y (accessible names, etc.)

### Lighthouse report
Full report is available in `koala_hierarchy_table_lighthouse_report.pdf`
![lighthouse](lighthouse_summary.jpg?raw=true "lighthouse")
