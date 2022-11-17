import css from './filter.module.css';
import PropTypes from 'prop-types';

function Filter({ items, filter, addFilter }) {
  return (
    <>
      {Boolean(items.length) && (
        <div className={css.filterWrapper}>
          <label htmlFor="filter">
            Find contact by name
            <input
              value={filter}
              type="text"
              name="filter"
              id="filter"
              onChange={addFilter}
            />
          </label>
        </div>
      )}
    </>
  );
}

export default Filter;

Filter.propTypes = {
  items: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  addFilter: PropTypes.func.isRequired,
};
