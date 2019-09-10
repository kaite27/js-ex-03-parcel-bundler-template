import axios from "axios";
// import 'babel-polyfill'; Incase of older browsers

const instance = axios.create({
  baseURL: process.env.API_URL
});

const inserter = document.querySelector('.insert');

const insert = async () => {
  const res = await instance.get(`/users`)
  res.data.forEach(i => {
    inserter.textContent = i.username
  });
}

insert()