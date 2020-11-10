import React from "react";
import LanguageContext from "../Contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    console.log(this.context);
    return (
      <div>
        Select a language:
        {/* <i
            className="flag bd"
            onClick={() => this.onLanguageChange("bangla")}
          /> */}
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag nl"
          onClick={() => this.context.onLanguageChange("dutch")}
        />
        {/* <i
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
          /> */}
      </div>
    );
  }
}
export default LanguageSelector;
