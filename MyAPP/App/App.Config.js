var App;
(function (App) {
    var AppConfig = (function () {
        function AppConfig($stateProvider, $urlRouterProvider) {
            console.log('i m in appconfig.ts');
            this.stateProvider = $stateProvider;
            this.urlProvider = $urlRouterProvider;
            $stateProvider
                .state("root", {
                abstract: true,
                url: "",
                template: "<div ui-view class=\"container-fluid slide\"></div>",
            })
                .state("root.home", {
                url: "/",
                templateUrl: "partials/home/home.tpl.html"
            }).state("root.phone-entry", {
                url: "/student-entry",
                templateUrl: "partials/student/Student-Entry.tpl.html",
                controller: "StudentController",
                controllerAs: "vm"
            });
        }
        AppConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
        return AppConfig;
    }());
    App.AppConfig = AppConfig;
    angular.module("app", ["ui.router", "ngResource"]);
    angular.module("app").config(AppConfig);
})(App || (App = {}));
//# sourceMappingURL=App.Config.js.map