import PropTypes from 'prop-types';

const Wrapper = ({ children }) => <div 
className='px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 3xl:px-28' 
>{children}</div>;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
