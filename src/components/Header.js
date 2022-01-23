import PropTypes from 'prop-types';

import Button from './Button';

const Header = ({ title, showAddTaskForm, showAdd }) => {
  return (
    <header className="header">
      <h1 className="header" style={{ textAlign: 'center' }}>
        {title}
      </h1>
      <Button
        onClick={showAddTaskForm}
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add Task'}
      />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: 'Nothing',
};

export default Header;
