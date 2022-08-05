const express = require('express');
const path = require('path');
app = express();
app.use((path.join(__dirname, 'dist')));
app.use(express.static(__dirname + '/past_years'));
const port = process.env.PORT || 3000;
app.listen(port);

