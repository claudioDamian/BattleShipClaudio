import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Card from '@material-ui/core/Card';

import './styles.scss';

const Layout = ({
  children,
  compact,
  className,
}) => (
  <section
    className={cn(
      'layout',
      { 'layout--compact': compact },
      className,
    )}
  >
    <Card className="layout__card">
      {children}
    </Card>
  </section>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  compact: PropTypes.bool,
  className: PropTypes.string,
};

Layout.defaultProps = {
  compact: false,
  className: '',
};

export default Layout;
