function Node(){

  this.converJqueryObjectToNode = function(jqueryObjects){
    var nodes = [];
    $.each(jqueryObjects, function(i, object){
      var node = {title: $(object).text().toLowerCase(), href: $(object).attr('href')}
      nodes.push(node);
    });
    return nodes;
  };

  this.generateJqueryObject = function(nodes){
    var $this = this;
    return $.map(nodes, function(node, i){
      return $("<a></a>").text(node.title).attr('href', node.href)
    });
  }
};
