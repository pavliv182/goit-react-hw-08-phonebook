import css from './contacts.module.css';
import PropTypes from 'prop-types';

const ContactsList = ({ data = [], deleteContact }) => {
  const elements = data.map(el => (
    <li className={css.item} key={el.id}>
      <span>
        {el.name}: {el.number}
      </span>
      <button type="button" onClick={() => deleteContact(el.id)}>
        Delete
      </button>
    </li>
  ));

  return <>{Boolean(data.length) && <ul>{elements}</ul>}</>;
};

export default ContactsList;

ContactsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
