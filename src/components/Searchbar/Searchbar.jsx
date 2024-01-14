export const Searchbar = ({ search }) => {
  return (
    <div>
      <header className="searchbar">
        <form className="form" onSubmit={search}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
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
