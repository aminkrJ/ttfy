function Tt(){

  this.list = function(word){
    var $this = this;
    var links = $("a:contains('"+ word +"'):not(.ttfy)");

    var nodes = this.fetch(links);

    $(".tt-list").remove();

    var container = $("<ul style='margin:0;margin-top:10px;padding:0' class='tt-list'></ul>");
    $.each(nodes, function(i, link){
      var li = $("<li style='list-style-type:none'></li>");
      var clone = $(link).clone().addClass('ttfy');
      li.append(clone);
      container.append(li);
      $(".tt-container").append(container);
    });
  };

  this.fetch = function(links){
    $.cookie.json = true;
    //read cookie
    var linksInCookie = [];
    if (typeof $.cookie('links') === 'undefined'){
    }else{
      linksInCookie = $.cookie('links');
    }

    var current = [];
    //build from cookie
    $.each(linksInCookie, function(i, link){
      var a = $("<a></a>").attr('href', link.href).text(link.title);
      current.push(a);
    });

    var all = current.concat(links);
    all = $.unique(all);

    //store in cookie
    var linksForCookie = [];
    $.each(all, function(i, link){
      var a = {href: link.attr('href'), title: link.text()};
      linksForCookie.push(a);
    });

    $.cookie('links', linksForCookie);
    return all;
  };

  this.bind = function(){
    var $this = this;
    this.destroy();
    $(window).keypress(function(event){
      if(event.keyCode == 116){
        event.preventDefault();
        $this.append();
        $(window).off("keypress");
      }
    });
  };

  this.append = function(){
    var $this = this;
    var container = $("<div class='tt-container' style='position:absolute;z-index:999;background-color:#fff;top:30px;left:100px;padding:5px;width:200px'></div>");
    var input = $("<input style='height:100%;font-size:20px;padding:5px!important;width:190px;background-color:#fff;border:1px solid #fff!important;outline:none' type='text' class='tt-input'></input>");
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
