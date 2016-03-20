var App;
(function (App) {
    var StudentService = (function () {
        function StudentService($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.httpService = $http;
            this.qService = $q;
        }
        StudentService.prototype.Save = function (data) {
            var self = this;
            console.log("from service ");
            var deffered = this.qService.defer();
            var successCallback = function (result) {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = function (error) {
                console.log(error);
                return deffered.reject(error);
            };
            self.httpService.post("/api/student", data)
                .then(successCallback, errorCallback);
            return deffered.promise;
        };
        StudentService.$inject = ["$http", "$q"];
        return StudentService;
    }());
    App.StudentService = StudentService;
    angular.module("app").service("StudentService", StudentService);
})(App || (App = {}));
//# sourceMappingURL=StudentService.js.map