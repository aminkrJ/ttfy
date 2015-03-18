function Tt(){

  this.list = function(word){
    var $this = this;
    var links = $("a:contains('"+ word +"'):not(.ttfy)");

    $(".tt-list").remove();

    var container = $("<ul style='margin:0;margin-top:10px;padding:0' class='tt-list'></ul>");
    $.each($.unique(links), function(i, link){
      var li = $("<li style='list-style-type:none'></li>");
      var clone = $(link).clone().addClass('ttfy');
      li.append(clone);
      container.append(li);
      $(".tt-container").append(container);
    });
  };

  this.bind = function(){
    var $this = this;
    this.destroy();
    $(window).keypress(function(event){
      if(event.keyCode == 116){
        $this.append();
        $(window).off("keypress");
      }
    });
  };

  this.append = function(){
    var $this = this;
    var container = $("<div class='tt-container' style='position:absolute;z-index:999;background-color:#fff;top:0;left:50%;padding:5px;width:200px'></div>");
    var input = $("<input style='width:190px' type='text' class='tt-input'></input>");
    input.keydown(function(event){
      if($(this).val().length > 2){
        $this.list($(this).val());
      }else{
      }
    });

    container.append(input);
    $("body").append(container);

    $(input).focus();
  };

  this.destroy = function(){
    $(".tt-container").remove();
  };

  this.init = function(){
    this.bind();
  }
};

$.expr[':'].contains = function(a, i, m) {
 return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};

var tt = new Tt();
tt.init();
