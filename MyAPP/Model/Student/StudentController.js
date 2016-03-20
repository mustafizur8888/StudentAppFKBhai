var App;
(function (App) {
    var StudentController = (function () {
        function StudentController(studentService) {
            this.Student = new App.Student();
            //console.log(studentService);
            this.studentService = studentService;
        }
        StudentController.prototype.save = function () {
            if (this.Student.Phone == null) {
                alert('phone number is null');
            }
            else if (this.Student.Phone.length < 11) {
                alert('phone number is less then 11 digit');
            }
            else {
                var self = this;
                console.log(self.Student);
                var success = function (result) {
                    console.log(result);
                };
                var error = function (result) {
                    console.log(result);
                };
                self.studentService.Save(self.Student).then(success, error);
            }
        };
        StudentController.$inject = ["StudentService"];
        return StudentController;
    }());
    App.StudentController = StudentController;
    angular.module("app").controller("StudentController", StudentController);
})(App || (App = {}));
//# sourceMappingURL=StudentController.js.map