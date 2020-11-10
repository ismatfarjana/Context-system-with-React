import React from "react";

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select a language:
        {/* <i
            className="flag bd"
            onClick={() => this.onLanguageChange("bangla")}
          /> */}
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange("english")}
        />
        <i
          className="flag nl"
          onClick={() => this.props.onLanguageChange("dutch")}
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
