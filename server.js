var http = require('http')
var needle = require('needle')
var request = require('request')


var options = {
  headers: {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9',
    'cache-control': 'max-age=0',
    'dnt': 1,
    'upgrade-insecure-requests': 1,
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
    'cookie': process.env.cookie,
  },
  follow_max: 10,
  follow_set_cookies: true,
  follow_set_referer: true,
}

http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.cors || 'should-i-withdraw.bplforge.com');
  needle
    .get('https://www.cryptopia.co.nz/CoinInfo/GetCoinInfo', options)
    .on('response', function(a) { console.log('response', a.statusCode, a.headers) })
    .on('redirect', function(a) { console.log('redirect', a) })
    .on('done', function(err, resp) {
      console.log('ended')
    })
    .pipe(res)
}).listen(9999)

console.log('Listening on port: 9999')


// curl -v -H "accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8" -H "accept-encoding: gzip, deflate, br" -H "accept-language': en-US,en;q=0.9'" -H "cache-control': max-age=0'" -H "dnt: 1" -H "upgrade-insecure-requests: 1" -H "user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36" https://www.cryptopia.co.nz/CoinInfo/GetCoinInfo
