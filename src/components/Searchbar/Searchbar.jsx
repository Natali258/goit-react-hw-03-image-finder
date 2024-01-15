import s from './Searchbar.module.css';

export const Searchbar = ({ search }) => {
  return (
    <div>
      <header className={s.searchbar}>
        <form
          className={s.form}
          onSubmit={e => {
            e.preventDefault();
            search(e.target[1].value);
          }}
        >
          <button type="submit" className={s.btnSearch}>
            Search
          </button>

          <input
            className={s.inputSearch}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
};
