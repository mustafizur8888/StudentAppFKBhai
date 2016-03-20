module App {


    export class StudentController {
        Student: Student;
        static $inject = ["StudentService"];
        private studentService;
        constructor(studentService: StudentService) {

            this.Student = new Student();
            //console.log(studentService);
            this.studentService = studentService;

        }

        save() {
            if (this.Student.Phone == null) {
                alert('phone number is null');
            }
            else if (this.Student.Phone.length < 11) {
                alert('phone number is less then 11 digit');

            } else {
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

        }


    }

    angular.module("app").controller("StudentController", StudentController);
}