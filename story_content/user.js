function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6drUJugxE5o":
        Script1();
        break;
  }
}

function Script1()
{
  var x = document.getElementsByClassName("scrollarea-area");

$(window).resize(function(){
var newHeight = x[0].scrollHeight - x[0].offsetHeight;
var player = GetPlayer();
var height = newHeight;
player.SetVar("height",newHeight);
});

x[0].onscroll = function(){
var height = x[0].scrollHeight - x[0].offsetHeight;
var player = GetPlayer();
player.SetVar("num",x[0].scrollTop/height*100);
player.SetVar("height",height);
};
}

