URL = "https://spreadsheets.google.com/feeds/list/1BNkfLnH03mvA_zWubiqsPybpIhednjDHoqCIWmKLtYQ/od6/public/basic?alt=json"

$.getJSON( URL, function( data ) {

  Vue.filter('content', function (value) {
    return marked(value.slice(5))
  })

  new Vue({
    el: '#app',
    data: {
      posts: data.feed.entry
    }
  })
});

