import axios from 'axios';
const baseDomain = "https://example.com";
const baseUrl = `${baseDomain}/api`;

export default axios.create({
  baseUrl,
  headers: {"Authorization": "Bearer yourToken"}
})
