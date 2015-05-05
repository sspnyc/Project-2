console.log("loaded")

function list(){
  var $body = $('body');
  $body.empty();

  var $html = $("<p><table class='small ui table'><thead><tr><th>phone</th><th>e-mail</th><th>city</th></tr></thead><tbody><tr><td>312-345-5421</td><td>NJP3000@hotmail.com</td><td>New York City</td></tr></tbody></table><div class='small ui buttons'><div class='red ui button'><i class='black remove user icon'></i>remove</div><div class='ui button'><i class='blue edit icon'></i>update</div><div class='green ui button'><i class='black add user icon'></i><href='#/home' class='home'>add</div></div></p>")

  $body.append($html);
};

function home(){
  var $body = $('body');
  $body.empty();

  var $html = $("")

  $body.append($html);
};

function about(){
  var $body = $('body');
  $body.empty();

  var $html = $("")

  $body.append($html);
};
function details(){
  var $body = $('body');
  $body.empty();

  var $html = $("")

  $body.append($html);
};

var routes = {
    "/list": list,
    "/home": home,
    "/about": about
    "/details": details

}

var router = Router(routes);

router.init();
