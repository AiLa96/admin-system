const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', require('./routes'));

app.listen(3000, () => {
    console.log('服务器运行在 3000 端口');
});
