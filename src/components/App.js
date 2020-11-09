import React from "react";
import UserCreate from "../components/UserCreate";
class App extends React.Component {
  state = { language: "bangla" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag bd"
            onClick={() => this.onLanguageChange("bangla")}
          />
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
          <i
            className="flag in"
            onClick={() => this.onLanguageChange("hindi")}
          />
          <i
            className="flag sa"
            onClick={() => this.onLanguageChange("arabic")}
          />
          <i
            className="flag ch"
            onClick={() => this.onLanguageChange("mandarin")}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;

//seleting language:
// initalize state obj with initial language
// add icon with flag
//next: add clickeventhandler on both flags, make sure anytime user selects either one we  call some callback function that will updat eour currently selected language
