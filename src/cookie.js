Cookies.json = true;

function Cookie(name){
  this.name = name;
  this.options = {
  };

  this.set = function(newNodes){
    this.remove();
    return Cookies.set(this.name, newNodes, this.options);
  };

  this.fetch = function(){
    var content = Cookies.get(this.name);
    if(content == undefined){
      return [];
    }else{
      return content;
    };
  };

  this.remove = function(){
    return Cookies.remove(this.name);
  };
};
