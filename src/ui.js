function Ui(){
  this.container = $("<div class='tt-container' style='position:absolute;z-index:999;background-color:#fff;top:30px;left:100px;padding:5px;width:200px'></div>");
  this.input = $("<input style='height:100%;font-size:20px;padding:5px!important;width:190px;background-color:#fff;border:1px solid #fff!important;outline:none' type='text' class='tt-input'></input>");
  this.result = $("<ul class='tt-list'></ul>");

  this.hook = function(callback){
    var $this = this;
    this.input.keydown(function(event){
      if($(this).val().length > 2){
        callback($(this).val());
      }
    });

    this.container.append(this.input);
    $("body").append(this.container);
    this.input.focus();
  };

  this.result = function(nodes){
    //this.result.empty().hide();
    $.each(nodes, function(i, node){
      var li = $("<li style='list-style-type:none'></li>");
      li.append(node);
      this.result.append(li);
    });
  };
};
