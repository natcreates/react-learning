import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
  // Field name describes what state this field deals with
  // component prop tells Field what JSX to render

  // We need to tell the Field component
  // to respond to changes in the JSX we're providing
  // we're passing down an object that Field has behind the scenes
  // containing props and event handlers (and errors)
  // these are now props of the input. e.g. field.input.onBlur
  // the meta.error prop is automatically populated on render
  // redux-form matches any props on error obj with name of the field
  // meta.touched is a possible state of the field (pristine, touched, error)
  // we only want to show an error when user has focused in and then out of field
  renderField(field) {
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger': ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input {...field.input} type="text" className="form-control"/>
        <div className="text-help">
          {touched ? error: ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {

  }
  // renderTitleField passed in without () because
  // Field will call it at some point in the future
  // form onSubmit needs to tie together our own logic with some from redux-form

  render() {
    // redux-form passes lots of additional props to our PostsNew component
    // this includes the handleSubmit function
    // this takes a function we define but also runs validation
    // on submission of form, redux-form validates and then calls whatever we pass into handleSubmit
    // because we're passing it in as a callback have to specify the calling context as the component
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title" label="Title" component={this.renderField}/>
        <Field name="categories" label="Categories" component={this.renderField}/>
        <Field name="content" label="Content" component={this.renderField}/>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    );
  }
}

// whatever function we pass as the validate config option
// will be called automatically at various points in form lifecycle
// values arg is an object containing the fields and values entered in the form
const validate = (values) => {
  const errors = {};

  // Validate the values from inputs
  if (!values.title) {
    errors.title = "Enter a post title!";
  }

  if (!values.categories) {
    errors.categories = "Enter a post category!";
  }

  if (!values.content) {
    errors.content = "Enter post content!";
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
