require! {
  'react'
  './Layout.styl': css
  '$assets/svg/react.svg': ReactLogo
  '$el': { div, svg, elem, el }
}

module.exports = ({ children }) ->
  div css.container, children:
    elem \h1, children: "Hello, World!"
    svg ReactLogo, css.logo
    children
