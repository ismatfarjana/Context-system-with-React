import React from "react";
import LanguageContext from "../Contexts/LanguageContext";
import ColorContext from "../Contexts/ColorContext";

class Button extends React.Component {
  //hookup a context object to a class component
  // //contexttype is only for this.context
  // static contextType = LanguageContext;
  //static contextType adds a property to our class itself

  // //this.context approach
  // render() {
  //   console.log(this.context);
  //   // setting up text variable for different language
  //   const text = this.context === "english" ? "submit" : "Voorleggen";
  //   return <button className="ui button primary">{text}</button>;
  // }

  //consumer approach
  renderSubmit(value) {
    return value === "english" ? "submit" : "voorleggen";
  }
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;

//to hook up languagecontext to button:
// 1. create context type that will link the context obj to button
// 2. to reference the context object information, use this.context property

// change the value
