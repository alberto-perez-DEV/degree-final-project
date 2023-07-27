require('dotenv').config();

const app = require('./app');
require('./database')

// -- EXECUTE BACKEND SERVER --

async function runApp() {
    await app.listen(app.get('port'))
    console.log('==> Server is running on port', app.get('port'));
}

runApp();
