import React from "react";
import LanguageContext from "../Contexts/LanguageContext";

class Button extends React.Component {
  //hookup a context object to a class component
  static contextType = LanguageContext;
  //static contextType adds a property to our class itself

  render() {
    console.log(this.context);
    return <button className="ui button primary">Submit</button>;
  }
}

export default Button;

//to hook up languagecontext to button:
// 1. create context type that will link the context obj to button
// 2. to reference the context object information, use this.context property
