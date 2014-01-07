module.exports = function(app) {
  
  /* Optionally include this to use this alternative template when wanting to create your own header and footer
  app.set("view options", {
    layout: "layout/layout-skills"
  });
  */
  
  app.get('/zpage', function(req, res){
    res.render(req.params.page, {});
  });
  app.get('/', function(req, res){
    res.render("index", {});
  });
  app.get('/blank', function(req, res){
    res.render("voila");
  });
}
