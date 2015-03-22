function Node(){
  this.nodes = [];

  this.build = function(jqueryObjects){
    $.each(jqueryObjects, function(i, object){
      var node = {title: object.text().toLowerCase(), href: object.attr('href')}
      this.nodes.push(node);
    });
    return this;
  };

  this.generateJqueryObject = function(){
    var newNodes = this.nodes.slice();
    $.map(newNodes, function(i, node){
      var object = $("<a></a>").text(node.title).attr('href', node.href)
      this.objects.push(object);
    });
    return newNodes;
  }
};
