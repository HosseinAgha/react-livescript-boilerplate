react-livescript-boilerplate
=====================

Minimal React boilerplate with Stylus (css-modules), LiveScript, Hot Reloading.

Based on the guide available at https://webpack.js.org/guides/hmr-react/

### Usage

```
npm install
npm start
open http://localhost:3000
```

To use the project clone it and remove the `.git` directory then have fun

Now edit `src/App.ls`.  
Your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

### Stylus
loads stylus files using css modules standard

### Language support
Hot Reloads both JSX and LiveScript files

### Livescript Helper Functions  
We provide helper functions (`div`, `input`, `span` and `el`) for livescript   
you can require them using `$el` alias path  
Usage:  

  - first parameter can be a class array or a className string    
    array odd elements are classNames and even elements define whether class should be added
  ```livescript
    div [css.container, true, css.hasBorder, hasBorder],
      children: 
        div null, children: \salam
    # if hasBorder is true this roughly equals to jsx bellow
  ```
  ```jsx
    <div className="container hasBorder"> 
      <div>salam</div>
    </div>
  ```

  - second parameter is props. 
    you should also provide children using props:  
  ```livescript
    div css.container,
      children: ...
  ``` 

  - `el` function gets a React component or a basic element string like `"div"`    
  ```livescript
    el \div, [css.container, true, css.hasBorder, hasBorder],
      children: ...
    el Button, [css.container, true, css.hasBorder, hasBorder],
      children: ...
      onClick: ...
  ``` 

Based on [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate/graphs/contributors)
