import React from "react";
import PropTypes from "prop-types";

export default class TextEditor extends React.Component {
  static propTypes = {
    onTextChange: PropTypes.func.isRequired,
    markdown: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newText = event.target.value;
    this.props.onTextChange(newText);
  }

  render() {
    const inputStyle = {
      width: "400px",
      height: "65vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    return (
      <div className="mark-input" style={inputStyle}>
        <textarea
          id="editor"
          className="input"
          style={inputStyle}
          value={this.props.markdown}
          onChange={this.handleChange}
          placeholder="Type your markdown here..."
        ></textarea>
      </div>
    );
  }
}
