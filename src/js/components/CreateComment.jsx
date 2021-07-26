import React from "react";
import PropTypes from "prop-types";

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      user: ''
    }
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserChange(event) {
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

    this.props.onSubmitHandler(this.state.user, this.state.content);

    this.setState(() => ({
      user: '',
      content: ''
    }))
  }
  render() {
    return (
      <form className='create-comment' onSubmit={this.handleSubmit}>
        <input type='text'
               className='d-block mt-3 form-control w-50'
               placeholder='Your name'
               value={this.state.user}
               onChange={this.handleUserChange}
        />
        <textarea className='d-block mt-3 form-control w-50'
                  placeholder='Any thoughts?'
                  value={this.state.content}
                  onChange={this.handleTextChange}
        />
        <input type='submit'
               className='d-block mt-3 mb-3 btn btn-primary'
               value='Post'
        />
      </form>
    );
  }
}

CreateComment.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired
}

export default CreateComment;