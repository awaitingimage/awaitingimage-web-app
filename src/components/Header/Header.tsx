import * as React from 'react';
import Image from 'react-bootstrap/Image';
import { CSSTransition } from 'react-transition-group';
import headshot from '../../static/images/headshot.png';
import './Header.css';

interface IState {
  shrink: boolean;
}

interface IProps {}

export default class Header extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { shrink: false };
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  public handleScroll = (event: any): void => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    this.setState({
      shrink: scrollTop > 100 ? true : false,
    });
  };

  public render() {
    return (
      <header className="App-header">
        <CSSTransition in={this.state.shrink} timeout={100} classNames="square">
          <div className={'square'}>
            <Image src={headshot} className={'headshot'} />
          </div>
        </CSSTransition>
        <CSSTransition
          in={this.state.shrink}
          timeout={100}
          classNames="info"
          unmountOnExit={true}
        >
          <div className={'info'}>
            <h1 className={'name'}>Liam Farrell</h1>
            <a href="mailto:liam@awaitingimage.com" className="pad-right-15">
              <i className="fa fa-envelope pad-right-5" aria-hidden="true" />
              liam@awaitingimage.com
            </a>
            <br />
            <a href="https://github.com/awaitingimage" className="pad-right-15">
              <i className="fa fa-github pad-right-5" aria-hidden="true" />
              @awaitingimage
            </a>
            <a
              href="https://www.linkedin.com/in/liam-farrell-1a513b26"
              className="pad-right-15"
            >
              <i
                className="fa fa-linkedin-square pad-right-5"
                aria-hidden="true"
              />
              @liamfarrell
            </a>
          </div>
        </CSSTransition>
      </header>
    );
  }
}
