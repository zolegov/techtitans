// import axios
import axios from 'axios';

const BASE_URL = 'https://portfolio-js.b.goit.study/api';

// get reviews from backend
export async function getReviews() {
  const response = await axios.get(`${BASE_URL}/reviews`);
  return response.data;
}
