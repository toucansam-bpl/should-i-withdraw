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
    'cookie': 'CryptopiaLang=en; .ASPXANONYMOUS=NpcX2EDmcv-G5nrarZF6drtkZiraoC6m56fPhwsU-oBHra5ah8J2z2Uuo7_6Dx1aAGWPcHmhFM9GPWDKj9udArqeGb4qJ74V0ylzdTAlF1nNqyIVahkfZBuwB_-mSJYSdNwAcibtvrt_Nfc85X6Dgw2; __RequestVerificationToken=vVfllb5YosuZ7FiWM74DJPtuPCLqw20QQq9V-8Pv3Uqcejqkx5uztF_KM7cIdyZGblqQcEjI7OF9Z6qpIWz5rj8jkUYeUebuch9oo6Q9pus1; visid_incap_1244263=7GigJb1iQVyWx4PHlbJYip3tVVsAAAAAQUIPAAAAAABzw6SQaWg7q4e7Af+Lcsne; __auc=84317aa1164c7a839bb3eea6cdf; nlbi_1244263=B/8iBMzIaRoqqY/F+HS37gAAAAC2lozzEWPbLbXsDCCHrLAb; incap_ses_262_1244263=sL5uHKgwhikEFPsUrdCiA0jUWVsAAAAAgus+gfNf3YjTP3PJZnVGAw==; incap_ses_114_1244263=346tafND+XjJcRT7IQOVATjsWVsAAAAAx4Jy55p+HRlYCeckVTnfJQ==; incap_ses_869_1244263=6FTGAQPPpFGHoOXHUk8PDD8lWlsAAAAAMuVOe/AIExOc7KByHIEcDQ==; incap_ses_512_1244263=evHXPJn6sDXwiPOmV/4aB16LWlsAAAAAKkr4fFq5I6Ro3cBNF1Rz1A==',
  },
  follow: 10,
  follow_set_cookies: true,
  follow_set_referer: true,
}

http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.cors || 'should-i-withdraw.bplforge.com');
  needle.get('https://www.cryptopia.co.nz/CoinInfo/GetCoinInfo', options)
    .on('response', function(a) { console.log('response', a.statusCode, a.headers) })
    .on('redirect', function(a) { console.log('redirect', a) })
    .pipe(res)
}).listen(9999)


// curl -v -H "accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8" -H "accept-encoding: gzip, deflate, br" -H "accept-language': en-US,en;q=0.9'" -H "cache-control': max-age=0'" -H "dnt: 1" -H "upgrade-insecure-requests: 1" -H "user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36" https://www.cryptopia.co.nz/CoinInfo/GetCoinInfo
