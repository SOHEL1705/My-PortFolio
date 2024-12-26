import PropTypes from 'prop-types';

const Icons = ({ children, url, ariaLabel, className }) => {
  return (
    <div className="flex items-center justify-center w-8 h-8">

    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel || "Icon link"}
      className={`hover:opacity-80 transition-opacity ${className || ""}`}
      >
      {children}
    </a>
      </div>
  );
};

// Prop validation
Icons.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
};

export default Icons;
