import React from 'react';
import PropTypes from 'prop-types';

const Rows = ({ children }) => (
    <div className="row">
        {children}
    </div>
);

Rows.propTypes = {
    children: PropTypes.node.isRequired
};

export default Rows;