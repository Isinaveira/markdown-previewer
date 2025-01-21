import React from "react";
import PropTypes from "prop-types";
import { marked } from "marked";

export default class Previewer extends React.Component {
  static propTypes = {
    markdown: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const outputStyle = {
      width: "400px",
      height: "65vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    marked.setOptions({
      breaks: true,
    });
     
    return (
      <div style={outputStyle}>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(this.props.markdown) }}
        />
      </div>
    );
  }
}
