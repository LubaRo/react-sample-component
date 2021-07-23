import { createElement } from 'react'
import { render } from 'react-dom'
import Post from "./components/Post.jsx"
import Comment from "./components/Comment.jsx"

const node = document.getElementById("root");

const postData = {
  id: 1,
  content: ' said: This post about the non-sugar diet benefits',
  user: 'Elizabeth Smith'
};
const commentData = {
  id: 12,
  content: ': Super cool!',
  user: 'Monique JJ'
};

const App = createElement(
  Post,
  postData,
  createElement(
    Comment,
    commentData
  )
)

render(App, node);