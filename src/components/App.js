import React from "react";
import UserCreate from "../components/UserCreate";
// to take the currently selected language and communicate it down to context object
import LanguageContext from "../Contexts/LanguageContext";
import ColorContext from "../Contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        Translating to {this.state.language}
        {/* anytime the state language changes languagecontext provideer value will change */}
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;

//seleting language:
// initalize state obj with initial language
// add icon with flag
//next: add clickeventhandler on both flags, make sure anytime user selects either one we  call some callback function that will updat eour currently selected language

//a context system is: communicating some infor from parent to child component. to do that we need context object of data flow

//in the context object, data can come in two ways: default value or parent componenet/provider

//when the info/data go out of the context object: we can reference it to either the this.context property inside a nested chid component or to another component(Consumer component) inside the nested child component
