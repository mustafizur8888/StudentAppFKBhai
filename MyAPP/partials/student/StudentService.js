var App;
(function (App) {
    var StudentService = (function () {
        function StudentService($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.$http = $http;
            this.$q = $q;
        }
        StudentService.prototype.Save = function (data) {
            var self = this;
            var defferd = this.qService.defer();
            var success = function (result) {
                console.log(result);
                return defferd.resolve(result);
            };
            var error = function (error) {
                console.log(error);
                return defferd.resolve(error);
            };
            self.httpService.post("/api/Student", data).then(success, error);
            return defferd.promise;
        };
        StudentService.$inject = [""];
        return StudentService;
    }());
    App.StudentService = StudentService;
})(App || (App = {}));
//# sourceMappingURL=StudentService.js.map