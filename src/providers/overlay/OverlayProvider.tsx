import React from 'react';

import {StyledOverlay} from './styles';

let overlay: OverlayProvider;

class OverlayProvider extends React.Component {
  state = {content: undefined};

  constructor(props: {}) {
    super(props);
    // eslint-disable-next-line consistent-this
    overlay = this;
  }

  componentDidMount() {
    this.close();
  }

  componentWillUnmount() {
    this.close();
  }

  static open(children: React.ReactNode) {
    overlay.open(children);
  }

  open(children: React.ReactNode) {
    this.setState({content: children});
  }

  static close() {
    overlay.close();
  }

  close() {
    this.setState({content: undefined});
  }

  render() {
    return <StyledOverlay>{this.state.content}</StyledOverlay>;
  }
}

export default OverlayProvider;
