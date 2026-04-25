const axios = require('axios');

axios.get('https://vk.com')
    .then(response => {
        console.log('Status:', response.status);
        console.log('Data:', response.data.substring(0, 100));
    })
    .catch(error => {
        console.log('Error:', error.message);
    });