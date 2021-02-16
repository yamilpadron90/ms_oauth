import React, { Component } from 'react';
import MicrosoftOauth from './oauth'

export class Home extends Component {

    static displayName = Home.name;

    constructor() {
        super()
        this.state = {
            name: null,
            visible: true
        }
        this.cb = this.cb.bind(this)
    }

    cb() {
        this.setState({
            visible: false
        })
    }


  render () {
      return (
          <div style={{ marginTop: 24 }}>
              {this.state.visible === true && <div>
                  <h1>Hello, world!</h1>
                  <p>Welcome to your new single-page application, built with:</p>

                  <a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code
            <br />
                  <a href='https://facebook.github.io/react/'>React</a> for client-side code
            <br />
                  <a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling

        <p>To help you get started, we have also set up:</p>
              </div>}
              <MicrosoftOauth cb={this.cb} />
      </div>
    );
  }
}
