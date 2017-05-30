 require! {
  'react': { Component }:React
  '$el': { elem }
  './Layout.ls'
  './Counter.ls'
 } 

module.exports = class App extends Component
  render: ->
    elem Layout, children: 
      elem Counter
