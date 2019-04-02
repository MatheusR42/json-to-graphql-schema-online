import React, { Component } from 'react';
import Swal from 'sweetalert2'
import SplitPane from 'react-split-pane';
import {Controlled as CodeMirror} from 'react-codemirror2';


import {
  jsonToSchema
} from './json-to-simple-graphql-schema';

import 'codemirror/lib/codemirror.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jsonInput: '',
      schema: ''
    }
  }

  convert() {
    const { jsonInput } = this.state;

    const { error, value } = jsonToSchema({ jsonInput });
    if (error) {
      const { title, message } = error;
      
      Swal.fire({
        title,
        text: message,
        type: 'error'
      })

      return;
    }
    
    this.setState({ schema: value });
  }

  render() {
    const width = window.innerWidth / 2;
    const { jsonInput, schema } = this.state;
    console.log(schema);

    return (
      <div className="">
        <button onClick={this.convert.bind(this)}>Convert</button>
        <SplitPane split="vertical" defaultSize={width}>
          <div>
            <CodeMirror 
              onBeforeChange={(editor, data, value) => {
                this.setState({ jsonInput: value});
              }}
              onChange={(editor, data, value) => {
              }}
              value={jsonInput}
              options={{ mode: 'json', lineNumbers: true, tabSize: 2 }}
            />
          </div>
          <div>
            <CodeMirror
              onBeforeChange={(editor, data, value) => {
                this.setState({ schema: value});
              }}
              onChange={(editor, data, value) => {
              }}
              value={schema}
              options={{ lineNumbers: true, tabSize: 2 }}
            />
          </div>
        </SplitPane>
      </div>
    );
  }
}

export default App;
