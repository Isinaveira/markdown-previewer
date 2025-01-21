import React from "react";
import SectionHeader from "./components/SectionHeader";
import TextEditor from "./components/TextEditor";
import Previewer from "./components/Previewer";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: `# H1 Heading
  # H2 Sub-heading
  - List item 1
  - List item 2

  [Github](https://www.github.com)

  \`inline code\`
  \`\`\`
  Code block example
  \`\`\`
            
  > Blockquote example

  ![Image](data:image/png;base64,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)
  
  **Bold Text**
  `,
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(newText) {
    this.setState({ text: newText });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {/*Título */}
          <div className="row mt-4">
            <div className="col text-center">
              <SectionHeader size="large" textContent="Markdown Preview" />
            </div>
          </div>
          {/*Subheadings*/}
          <div className="row mt-4">
            <div className="col md-6">
              <SectionHeader size="medium" textContent="Editor" />
              <TextEditor markdown={this.state.text} onTextChange={this.handleTextChange} />
            </div>
            <div className="col md-6">
              <SectionHeader size="medium" textContent="Preview" />
              <Previewer markdown={this.state.text} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
