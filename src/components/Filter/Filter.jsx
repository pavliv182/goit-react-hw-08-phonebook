import css from './filter.module.css';

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
