import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ onClick, type, children }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
