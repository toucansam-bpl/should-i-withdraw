// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }

  var network = null
  var cryptopia = null

  function giveAnswer() {
    if (network === null || cryptopia === null) return

    $('#loading').hide()
    if (network === cryptopia) {
      $('#yes').show()
    } else {
      $('#no').show()
    }
  }

  $.get('https://api.bplforge.com/api/blocks/getHeight', function(res) {
    network = parseInt(res.height, 10)
    giveAnswer()
  })

  $.get('https://cors.io/?https://www.cryptopia.co.nz/CoinInfo/GetCoinInfo', function(res) {
    var bpl = JSON.parse(res).aaData.filter(function(token) {
      return token[2] === 'BPL'
    })[0]
    cryptopia = parseInt(bpl[7], 10)
    giveAnswer()
  })
}());

// Place any jQuery/helper plugins in here.
