import React from 'react'
import { render } from 'react-dom'

const node = document.getElementById("root");

const root = React.createElement('div', {},
  React.createElement('h1', {}, 'Hi, there! Let\'s get started with React!')

);

render(root, node);