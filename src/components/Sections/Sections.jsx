import React from 'react';
import PropTypes from 'prop-types';

const Sections = ({ title, children }) => (
  <>
    <h3>{title}</h3>
    {children}
  </>
);
Sections.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
export default Sections;
