const axios = require('axios');
const fs = require('fs');
const path = require('path');

const postmanApiKey = process.env.POSTMAN_API_KEY;
const workspaceId = process.env.POSTMAN_WORKSPACE_ID;
const collectionId = process.env.TEXT_GENERATION_COLLECTION_ID;
const apiSpecPath = path.join(__dirname, '../api-specs/latest-spec.json');

const apiSpec = JSON.parse(fs.readFileSync(apiSpecPath, 'utf8'));

const collectionUpdatePayload = {
    collection: {
        info: {
            name: 'Gemini API Collection',
            schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
        },
        item: apiSpec.paths // This assumes a direct mapping
    }
};

axios.put(`https://api.getpostman.com/collections/${collectionId}`, collectionUpdatePayload, {
    headers: {
        'X-API-Key': postmanApiKey,
        'Content-Type': 'application/json'
    }
})
    .then(response => {
        console.log('Postman collection updated successfully.');
    })
    .catch(error => {
        console.error('Error updating Postman collection:', error);
        process.exit(1);
    });
