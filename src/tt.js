function Tt(options){
  $.extend(options, {
    // TODO startegy pattern
    storage: 'Cookies'
  });
  this.cookie = new Cookie('tt');
  this.ui = new Ui();

  this.searchWordInStorage = function(word){
    var results = this.match(word, this.cookie.fetch());
    return this.generateJqueryObject(results);
  };

  this.match = function(word, nodes){
    var matches = [];
    var regex = new RegExp(word, "i");
    $.each(nodes, function(i, node){
      if(regex.test(node.title)){
        matches.push(node);
      }
    });
    return matches;
  };

  this.bindT = function(){
    var $this = this;
    $(window).keypress(function(event){
      if(event.keyCode == 116 || event.which == 116){
        event.preventDefault();
        $(window).off("keypress");
        $this.ui.hook(function(word){
          $this.ui.attachResult($this.searchWordInStorage(word));
        });
      }
    });
  };

  this.storeNodes = function(){
    this.cookie.set(this.converJqueryObjectToNode($('a')));
  };

  this.init = function(){
    this.storeNodes();
    this.bindT();
  };

  this.converJqueryObjectToNode = function(jqueryObjects){
    var nodes = [];
    $.each(jqueryObjects, function(i, object){
      var node = {title: $(object).text().toLowerCase(), href: $(object).attr('href')}
      nodes.push(node);
    });
    return nodes;
  };

  this.generateJqueryObject = function(nodes){
    return $.map(nodes, function(node, i){
      return $("<a></a>").text(node.title).attr('href', node.href)
    });
  };
};
