import React, { Component, Fragment } from 'react';
import SubmittableInput from '../common/SubmittableInput';
import { greetingTemplate, labelSubmit } from './constants';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {
    const { name, onClick } = this.props;
    const { value } = this.state;

    return (
      <Fragment>
        <div>{greetingTemplate(name)}</div>
        <SubmittableInput
          onSubmit={() => onClick(value)}
          onChange={(value) => this.setState({ value })}
          labelBtn={labelSubmit}
          value={value}
          clearAfterSubmit={false}
        />
      </Fragment>
    );
  }
};
