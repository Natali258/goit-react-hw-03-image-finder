import * as Spinners from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Spinners.Circles
      wrapperStyle={{
        justifyContent: 'center',
      }}
    />
  );
};
