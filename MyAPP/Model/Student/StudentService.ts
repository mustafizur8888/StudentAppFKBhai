module App {
    export class StudentService {
        private httpService: angular.IHttpService;
        private qService: angular.IQService;


      

        static $inject: string[] = ["$http","$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            this.httpService = $http;
            this.qService = $q;

        }
        Save(data: Student): angular.IPromise<any> {
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
        }
    }
    angular.module("app").service("StudentService", StudentService);

}