const app = require('./src/app');


async function main (){
    await app.listen(app.get('port')); //Puerto configurado en app.js
    console.log('Server on port', app.get('port'));
}

main();

