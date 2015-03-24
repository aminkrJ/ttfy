$.cookie.json = true;

function Cookie(name){
  this.name = name;
  this.options = {
    expires: 365
  };

  this.set = function(newNodes){
    var oldNodes = this.fetch();
    return $.cookie(this.name, $.unique(oldNodes.concat(newNodes)), this.options);
  };

  this.fetch = function(){
    var content = $.cookie(this.name);
    if(content == undefined){
      return [];
    }else{
      return content;
    };
  };

  this.remove = function(){
    return removeCookie(this.name);
  };
};
