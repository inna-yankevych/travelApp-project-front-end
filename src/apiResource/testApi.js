import apiClient from "../apiAxios.js";

async function testApi () {
  const data = await apiClient('/cities');
  console.log('Cities:', data);
}

testApi();