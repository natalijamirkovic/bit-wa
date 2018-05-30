const figlet = require('figlet');
 
const createFiglet = (msg) => figlet.textSync(msg, {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
});

module.exports = {createFiglet};