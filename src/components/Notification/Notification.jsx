import PropTypes from 'prop-types';

const Notification = ({ message, items, isLoading, error }) => {
  return (
    <>
      {isLoading && <p>...Loading</p>}
      {!items.length && !isLoading && !error && <p>{message}</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
