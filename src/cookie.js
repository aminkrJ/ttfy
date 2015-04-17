Cookies.json = true;

function Cookie(name){
  this.name = name;
  this.options = {
    //Cookies options
  };

  this.set = function(newNodes){
    // prevent duplication
    var oldNodes = this.fetch();
    this.remove();
    return Cookies.set(this.name, this.unique(newNodes.concat(oldNodes)), this.options);
  };

  this.unique = function(array){
    var stringified = [];
    $.each(array, function(i, value){
      stringified.push(value['title'] + ';' + value['href']);
    });

    var uniques = stringified.unique();

    return $.map(uniques, function(value, i) {
      var x = value.split(';');
      return {title: x[0], href: x[1]}
    })
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

Array.prototype.unique = function(){
  var n = {},r=[];
  for(var i = 0; i < this.length; i++){
    if (!n[this[i]]){
        n[this[i]] = true;
        r.push(this[i]);
    }
  }
  return r;
};
