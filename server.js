var http = require('http')
var request = require('request')


var options = {
  url: 'https://www.cryptopia.co.nz/CoinInfo/GetCoinInfo',
  headers: {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9',
    'cache-control': 'max-age=0',
    'cookie': process.env.cryptopia_cookie,
    'dnt': 1,
    'upgrade-insecure-requests': 1,
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'
  }
}

http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.cors || 'should-i-withdraw.bplforge.com');
  request.get(options).pipe(res)
}).listen(9999)
