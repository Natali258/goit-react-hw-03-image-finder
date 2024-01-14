export const Button = ({ loadMore }) => {
  return (
    <div>
      <div>
        <button onClick={loadMore} type="submit" className="button">
          Load more
        </button>
      </div>
    </div>
  );
};
