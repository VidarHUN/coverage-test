const OpenAPIBackend = require('openapi-backend').default;
const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())

const api = new OpenAPIBackend({
    definition: './openapi.yml',
});

var cnt = 0;

api.registerHandler('getCounter', (ctx, req, res) => {
    cnt = cnt + 1;
    return res.status(200).json({ "counter": cnt });
})

api.init();

app.use((req, res) => api.handleRequest(req, req, res));

var server = app.listen(9000, () => console.info('api listening at http://localhost:9000'));
module.exports.server = server;
