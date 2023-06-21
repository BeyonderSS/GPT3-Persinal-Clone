import fetch from 'isomorphic-unfetch';

export default async function handler(req, res) {
  const { q } = req.query;
  const apiUrl = `https://serpapi.com/search.json?q=${q}&api_key=aa2794a788b4b3b61ad8587b13ab2eda3d66a73ffe95cf42d89b3e14a5462a21`;
  const response = await fetch(apiUrl);
  const result = await response.json();
  res.json(result);
}
