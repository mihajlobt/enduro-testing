define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"video-wrapper\">\r\n    <video autoplay loop>\r\n        <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1["video-link"] : stack1), depth0))
    + "\" type=\"video/mp4\">\r\n    </video>\r\n</div>\r\n";
},"useData":true}); });