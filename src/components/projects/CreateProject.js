import React, { Component } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }


  handleChange = (e) => {

    this.setState({
      [e.target.id]: e.target.value
    })

  }


  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onCreateProject(this.state);


    // console.log(this.state);

  }


  render() {
    // console.log(this.state);

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">
            Create Project
          </h5>

          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="title" />
          </div>

          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content" className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div className="input">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>

        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateProject: (project) => dispatch(createProject(project))
  }
}


export default connect(null, mapDispatchToProps)(CreateProject);
