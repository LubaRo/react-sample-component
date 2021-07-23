import { createElement } from 'react'
import { render } from 'react-dom'
import Post from "./components/Post.jsx"
import CommentBox from "./components/CommentBox.jsx";

const node = document.getElementById("root");
const data = {
  post: {
    id: 123,
    content:
      "What we hope ever to do with ease, we must first learn to do with diligence. — Samuel Johnson",
    user: "Mark Thomas"
  },
  comments: [
    {
      id: 0,
      user: "David",
      content: "such. win."
    },
    {
      id: 1,
      user: "Haley",
      content: "Love it."
    },
    {
      id: 2,
      user: "Peter",
      content: "Who was Samuel Johnson?"
    },
    {
      id: 3,
      user: "Mitchell",
      content: "@Peter get off Letters and do your homework"
    },
    {
      id: 4,
      user: "Peter",
      content: "@mitchell ok :P"
    }
  ]
};

const App = createElement(
  Post,
  data.post,
  createElement(
    CommentBox,
    {
      comments: data.comments
    }
  )
)

render(App, node);