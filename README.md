# Install

`npm i`

# Start

`npm run start`

# BDD

Running tests:

`npm run bdd`

Adding new steps:

`npm run bdd:snippets`

# Cheet sheet

```
I.amOnPage("/")
I.see("text")
I.mockRequest(method, url, code, payload)
```

List component example:

```
import React from 'react'

    const Elements = ({ elements }) => {
      return (
        <div>
          <center><h1>List</h1></center>
          {elements.map((element) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{element.prop}</h5>
              </div>
            </div>
          ))}
        </div>
      )
    };

export default Elements
```

App example:

```
import React, { Component } from "react";
import Elements from "./components/elements";

class App extends Component {
    state = {
        elements: []
    };

    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ elements: data });
            })
            .catch(console.log);
    }

    render() {
        return (
          <Elements elements={this.state.elements} />
        )
      }
}

export default App;
```