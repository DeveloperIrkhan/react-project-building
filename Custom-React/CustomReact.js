const mianContainer = document.querySelector("#root");

function CustomRander(reactElement, mianContainer) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  // v1
  /* domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target) */
  // v2
  for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  mianContainer.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "click me to go to google",
};
CustomRander(reactElement, mianContainer);


    const Element = React.createElement('hi',null,'hello World');
