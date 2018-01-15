import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import './Experience.css'

interface Props {
    title: string;
    dates: string;
    bullets: Array<string>;
  }

export default class Experience extends React.Component<Props> {

    render () {
        return (
            <div className="top-10">
                <Row>
                    <Col xs={7} md={7} className="project-title">
                        {this.props.title}
                    </Col>
                    <Col xs={5} md={5} className="project-date">
                        {this.props.dates}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul>
                            {this.props.bullets.map( bullet => <li>{bullet}</li>)}
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}