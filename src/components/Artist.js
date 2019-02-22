import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Artist extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>Hello</p>
    );
  }
}

Artist.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
};

