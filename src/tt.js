function Tt(){
  this.node = new Node();
  this.cookie = new Cookie('tt');
  this.ui = new Ui();

  this.search = function(word){
    var nodes = this.cookie.fetch();
    var results = [];
    var regex = new RegExp(word, "i");
    $.each(nodes, function(i, node){
      if(regex.test(node.title)){
        results.push(node);
      }
    });
    return this.node.generateJqueryObject(results);
  };

  this.bindT = function(){
    var $this = this;
    $(window).keypress(function(event){
      if(event.keyCode == 116 || event.which == 116){
        event.preventDefault();
        $(window).off("keypress");
        $this.ui.hook(function(word){
          $this.ui.attachResult($this.search(word));
        });
      }
    });
  };

  this.storeNodes = function(){
    this.cookie.set(this.node.converJqueryObjectToNode($('a')));
  };

  this.init = function(){
    this.storeNodes();
    this.bindT();
  }
};
