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


shortBitly()

module.exports = { shortBitly }


// const url = 'http://1drv.ms/u/s!Agv-ekPRWcr4nhybVvR3-BmECVBV?e=osvl0E'
// const regex1 = /^http?(s)?:\/\/www\./.test(url)
// const regex2 = /^http?(s)?:\/\//



// if (regex1) {
//     console.log('true')
//     console.log(url)
// } else {
//     const start = url.match(regex2)
//     const end = url.replace(regex2,'')
//     let completeUrl = `${start[0]}www.${end}`
//     console.log(completeUrl)
// }