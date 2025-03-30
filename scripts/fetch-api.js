const axios = require('axios');
const fs = require('fs');
const path = require('path');

const apiSpecUrl = process.env.API_SPEC_URL;
const outputPath = path.join(__dirname, '../api-specs/latest-spec.json');

axios.get(apiSpecUrl)
    .then(response => {
        fs.writeFileSync(outputPath, JSON.stringify(response.data, null, 2));
        console.log('API specifications updated successfully.');
    })
    .catch(error => {
        console.error('Error fetching API specifications:', error);
        process.exit(1);
    });
