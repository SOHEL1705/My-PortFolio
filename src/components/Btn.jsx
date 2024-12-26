import PropTypes from 'prop-types';

// ButtonWrapper component
const Btn = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

Btn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};


export default Btn;
