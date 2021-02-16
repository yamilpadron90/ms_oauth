import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
        <div>
            <div style={{ margin: 10  }}>
                <img height="50" src="https://cdn.contactcenterworld.com/images/company/whisbi-technology-600px-logo.png" />
                </div>
        <Container style={{ textAlign: 'center' }}>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
