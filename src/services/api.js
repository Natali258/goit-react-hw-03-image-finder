import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41760995-c5f6cedfd418cfda3381966ea';

export const FetchImage = async (search, page) => {
  const res = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${search}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return res;
};
