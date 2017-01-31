var app = angular.module('polyint', [
  'ngRoute'
]);

app.config(['$routeProvider', function ($routeProvider) {
  // Using the default route provider you are stuck with including all of your scripts up front :(
  $routeProvider
    //Should be default location.
    .when("/", {templateUrl: "views/main.html", controller: "MainCtrl"})
    //You can use a 404 page, or just have it redir to your main view, depending on your flow.
    .otherwise("/404", {templateUrl: "partials/404.html"});
}]);