import React from 'react';
import PropTypes from 'prop-types';


export function Work({ work }){
  return (
    <li key={work.id}>{work.title}</li>
  );
}

Work.propTypes = {
  work: PropTypes.object.isRequired
};
