# React

## TODO
- Create About
- Create Protest form
- Auth JWT

# IMPORTANT LEARNING NOTES

```js
updateUser(e) {
    // setState runs asynchronously
        /*
          Alternative
          setState((prevState, prevProps) => {
            return {
              people: prevState.counter + 1
            }
          }
        */
        this.setState({ [e.target.name]: e.target.value });
        console.log("user updated");
}

     // Alternative to JSX :
      return React.createElement('div', {className: 'App'}, React.createElement('p', 'To get started ...')
      );
```
