function Node(){
  this.nodes = [];

  this.build = function(jqueryObjects){
    var $this = this;
    $.each(jqueryObjects, function(i, object){
      var node = {title: $(object).text().toLowerCase(), href: $(object).attr('href')}
      $this.nodes.push(node);
    });
    return this;
  };

  this.generateJqueryObject = function(){
    var $this = this;
    var newNodes = this.nodes.slice();
    return $.map(newNodes, function(i, node){
      return $("<a></a>").text(node.title).attr('href', node.href)
    });
  }
};
