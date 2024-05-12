const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_XlgRAZyAwz8e2ABtyFMcnM57IiZpUbCIqaJ4fOcy1gXy2ELsQ7F94bQlsA8XPB7O';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      return res.json();
    }
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`, {
    headers: {
      'x-api-key': API_KEY,
    },
  }).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      return res.json();
    }
  });
}
