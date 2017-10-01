import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
  // Field name describes what state this field deals with
  // component prop tells Field what JSX to render

  // the field object passed in here
  // allows us to wire up the JSX to Field event handlers
  // We need to tell the Field component
  // to respond to changes in the JSX we're providing
  // we're passing down an object that Field has behind the scenes
  // containing props and event handlers
  // these are now props of the input. e.g. field.input.onBlur
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input {...field.input} type="text" className="form-control"/>
      </div>
    )
  }
  // renderTitleField passed in without () because
  // Field will call it at some point in the future
  render() {
    return (
      <form>
        <Field name="title" label="Title" component={this.renderField}/>
        <Field name="categories" label="Categories" component={this.renderField}/>
        <Field name="Content" label="Content" component={this.renderField}/>
      </form>
    );
  }
}

// whatever function we pass as the validate config option
// will be called automatically at various points in form lifecycle
// values arg is an object containing the fields and values entered in the form
const validate = (values) => {
  const errors = {};
  // do validation logic

  if (!values.title) {
    errors.title = "Enter a post title!";
  }
  // if an empty errors obj is returned, form fine to submit
  return errors;
}

// reduxForm hooks this component up with the formsReducer
// provided by redux-form
// similar to react-redux connect
// need to give each form a unique name so that redux-form knows
// how to handle different forms/doesn't merge different form states
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
