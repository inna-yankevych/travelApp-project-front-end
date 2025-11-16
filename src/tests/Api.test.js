import apiClient from "../apiEndpoints/apiClient.js";

async function runTests () {
  try {
    console.log ("Testing /cities...");
    const cities = await apiClient.get('/cities');
    console.log('Cities ✅:', cities);

    console.log ("Testing /countries...");
    const countries = await apiClient.get('/countries');
    console.log('Countries ✅:', countries);

    console.log ("Testing /users...");
    const users = await apiClient.get('/users');
    console.log('Users ✅:', users);

    console.log ("Testing /activities...");
    const activities = await apiClient.get('/activities');
    console.log('Activities ✅:', activities);

    console.log ("Testing /packing..");
    const packing = await apiClient.get('/packing');
    console.log('Packing ✅:', packing);

    console.log ("Testing /vax...");
    const vax= await apiClient.get('/vax');
    console.log('Vax ✅:', vax);

    console.log ("Testing /wishlist...");
    const wishlist = await apiClient.get('/wishlist');
    console.log('Wishlist ✅:', wishlist);

    console.log("✅✅ All API tests passed!")
  } catch (error) {
    console.error ("❌ API test failed.", error);
  }
};

runTests();