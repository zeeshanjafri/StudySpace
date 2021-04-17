import React, { ComponentType, useEffect } from "react";
import {
  Field,
  reduxForm,
  reset,
  change,
  FormErrors,
  InjectedFormProps,
} from "redux-form";

//compose is used to make it easier to "organize" mapStateToProps and redux form
import { StoreState } from "../reducers";
import { connect } from "react-redux";

//Re-usable component

//Typescriptand redux form:
//https://levelup.gitconnected.com/react-js-typescript-redux-redux-form-jest-e522995ebe36

//Need to hoist render methods up or else it will give error where it will unfocus after first characther is typed
//https://stackoverflow.com/questions/39839051/using-redux-form-im-losing-focus-after-typing-the-first-character

const renderError = ({ error, touched }) => {
  if (touched && error) {
    //Touched (for input) will be false at first
    //When clicked and then clicked otuside of the input, it will be true
    return <div className="errorText">{error}</div>;
  }
};

const renderTextInput = ({ input, label, meta, placeHolder }) => {
  //"component" property automatically passes props to argument, it has {input properties and meta properties}
  //"label" automatically passes props to arguments
  return (
    <div>
      {/* <label>{label}</label> */}
      <input
        data-testid={label}
        className="createAuthInputs block border my-1 w-full"
        {...input}
        autoComplete="off"
      />
      {renderError(meta)}
    </div>
  );
  //{..input} is shortcut for redux-form; where you take all the input from "component's" props and pass it as
  //props to <input>
};

const RegisterForm = (props) => {
  const onSubmit = (formValues, dispatch) => {
    //onSubmit's default param is any
    //event.preventDefault() is automatically called with handleSubmit, a redux-form property
    //form values are the values from the fields that redux-form automatiacally passes
    //after clicking the submit button
    //dispatch(reset("registerForm"));
    props.onSubmit(formValues);

    //dispatch(change("registerForm", "password", ""));
  };

  return (
    <React.Fragment>
      <form
        className="authForm"
        data-testid="registerForm"
        onSubmit={props.handleSubmit(onSubmit)}
      >
        <div className="authFieldSection">
          <div className="authFormFieldTitleWrap">
            <h1>Title</h1>
            <h3 className="authFormFieldTitleEmailInUse">{props.authStatus}</h3>
          </div>
          <Field
            name="title"
            label="title"
            type="text"
            component={renderTextInput}
          />
        </div>

        <div className="authFieldSection mt-4">
          <div className="authFormFieldTitleWrap">
            <h1>Body</h1>
          </div>
          <Field
            name="body"
            label="body"
            type="text"
            component={renderTextInput}
          />
        </div>

        <button
          className="authButton my-2 border bg-red-600 rounded-full px-6 py-2 text-white"
          data-testid="registerButton"
        >
          Post
        </button>
      </form>
    </React.Fragment>
  );
};

const validate = (formValues) => {
  //MUST BE NAMED VALIDATE! Other names would be ignored by reduxForm(..)
  const errors = {};
  //If you return an empty object, redux form will assume everything is ok
  if (!formValues.title) {
    //user did not enter title, so undefined
    errors.title = "You must enter an title";
    //Must be the same name as field name! The "error" property in {meta} would receive this
  }

  if (!formValues.body) {
    errors.body = "You must enter a body";
  }

  return errors;
  //Erors is going to be passed to renderInput's meta
};

const mapStateToProps = (state) => {
  return {
    // authStatus: state.authStatus.errorMessage,
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "registerForm",
    validate,
  })(RegisterForm)
);
