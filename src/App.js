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
      jsonInput: 
`{
  "userId": 1,
  "id": 1,
  "addresses": [
    {
      "id": 2,
      "name": "two"
    },
    {
      "id": 1,
      "name": "one"
    }
  ]
}`
,
      schema: 
`type Addresses {
  id: Int
  name: String
}

type AutogeneratedMainType {
  userId: Int
  id: Int
  addresses: [Addresses]
}`
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

    return (
      <div>
        <header>
          <h1>Convert JSON to GraphQL Schema Online</h1>
          <button onClick={this.convert.bind(this)}>Convert</button>
        </header>
        

        <SplitPane split="vertical" defaultSize={width}>
          <div>
            <h2>JSON Input</h2>

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
            <h2>GraphQL schema</h2>
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

        <a 
          href="https://github.com/MatheusR42/json-to-graphql-schema-online"
          target="_blank"
          className="source-code"
        >
          Source code  
        </a>
      </div>
    );
  }
}

export default App;
