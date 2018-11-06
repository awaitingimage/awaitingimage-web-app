import * as React from 'react'
import { Image } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group';

import './Header.css'
const headshot = require('../../static/images/headshot.png')

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { shrink: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    this.setState({
      shrink: scrollTop > 20 ? true : false
    });
  }

  render () {
    return (
      <div className='App-header'>
      <CSSTransition
        in={this.state.shrink}
          timeout={100}
          classNames="square"
        >
      <div className={'square'}><Image src={headshot} className={'headshot'} /></div>
      </CSSTransition>
      </div>
    )
  }
}
