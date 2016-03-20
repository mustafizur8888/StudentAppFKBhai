module App {
    export class AppConfig {
        private stateProvider: angular.ui.IStateProvider;
        private urlProvider: angular.ui.IUrlRouterProvider;
        static $inject = ["$stateProvider", "$urlRouterProvider"];

        constructor($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
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
                   templateUrl:"partials/home/home.tpl.html"
                }).state("root.phone-entry", {
                    url: "/student-entry",
                    templateUrl: "partials/student/Student-Entry.tpl.html",
                    controller: "StudentController",
                    controllerAs:"vm"
                });

        }
    }

    angular.module("app", ["ui.router", "ngResource"]);
    angular.module("app").config(AppConfig);
} 