import s from './Button.module.css';

export const Button = ({ loadMore }) => {
  return (
    <div>
      <div className={s.btnLoader}>
        <button onClick={loadMore} type="submit" className={s.button}>
          Load more
        </button>
      </div>
    </div>
  );
};
