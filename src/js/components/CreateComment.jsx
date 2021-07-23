import React, { Component, createElement } from "react";

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      user: ''
    }
    this.handleuserChange = this.handleuserChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleuserChange(event) {
    const value = event.target.value;

    this.setState(() => ({
      user: value
    }));
  }
  handleTextChange(event) {
    const value = event.target.value;
    this.setState(() => ({
      content: value
    }))
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('submitting');
    this.setState(() => ({
      user: '',
      content: ''
    }))
  }
  render() {
    return createElement(
      'form',
      {
        className: 'create-comment',
        onSubmit: this.handleSubmit
      },
      createElement('input', {
        type: 'text',
        placeholder: 'Your name',
        value: this.state.user,
        onChange: this.handleuserChange
      }),
      createElement('input', {
        type: 'text',
        placeholder: 'Any thoughts?',
        value: this.state.content,
        onChange: this.handleTextChange
      }),
      createElement('input', {
        type: 'submit',
        value: 'Post'
      })
    )
  }
}

export default CreateComment;