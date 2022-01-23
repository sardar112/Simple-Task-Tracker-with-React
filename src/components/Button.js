import PropTypes from 'prop-types';

const Button = ({ text, color, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  // className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
