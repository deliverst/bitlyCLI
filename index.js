const dotenv = require('dotenv')
const url = process.argv.slice(2);

const { exec } = require('child_process');
const BitlyClient = require('bitly').BitlyClient;
dotenv.config()

const token = process.env.TOKENBITLY
const bitly = new BitlyClient(`${token}`);

function shortBitly() {
    bitly
        .shorten(url[0])
        .then(function(result) {
            exec(`echo ${result.link} | pbcopy`);
            console.log(result.link);
        })
        .catch(function(error) {
            console.error(error);
        });
}



module.exports = { shortBitly }