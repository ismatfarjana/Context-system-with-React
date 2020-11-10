//purpose: to create a context object and export it
// reason: so we can import the context onject into only the component wher we need it
// in this app language context only nees to stay on app and button. so its is seperated

import React from "react";

const Context = React.createContext("english");

export class LanguageStore extends React.Component {
  // languagestore has all the current data and the ability to change the data
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;

//after creating a context object, we will:  get info into the obj by setting up adefault value
//creating default value: passing it directly into the create context call
//i am choosing english. that means, in the 2 nested child component got by default selected language is showing on screen is english

// aftre having default value of context objct: now connect the context obj to button component and fild component

// connect context object to button: by using this.context property
