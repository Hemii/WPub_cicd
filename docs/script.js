new Vue({ 

  el: "#app",
  data: {
    CORS:'https://api.rss2json.com/v1/api.json?rss_url=',
    items: [],
    url: "https://www.sme.sk/rss-title" 
  },

  created: function () {
    this.fetchData();
  },

  methods: {
    fetchData: function () {
      this.$http.get(this.CORS + this.url).then(response => {
        this.items = response.body;
        
      });
    },
   
    changeHandler: function (event) {
      this.url = event.target.value;
      this.fetchData();
    },
    clicked: function () {
      console.log(this.items);
    },
    
    sortDesc () {
      this.items.items.sort(function(a,b){
        return new Date(b.pubDate) - new Date(a.pubDate);
      });
    },
    sortAsc () {
        this.items.items.sort(function(a,b){
          return new Date(b.pubDate) - new Date(a.pubDate);
        }).reverse();
    }
  
  } 
});