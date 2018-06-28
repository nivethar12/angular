app.controller("loginCtrl", function($scope, $http) {

    $scope.loginForm = function() {

        userCredentials = {};
        userCredentials["email_id"] = $scope.emailInput;
        userCredentials["password"] = $scope.pwdInput;

        var userCredentialsJson = JSON.stringify(userCredentials);
        
        $http.post('http://localhost:8082/user-management/login', userCredentialsJson).success(function(data, status, headers, config) {

            alert("success message: " + data.message + data.user);
            $scope.val = data.message;
        }).
        error(function(data, status, headers, config) {

            alert("failure message: " + data.message);
        });
    }

});

app.controller("registerCtrl", function($scope, $http, registerService) {

    $scope.submitForm = function() {

        userCreation = {};
        console.log($scope.emailInputRegister);
        userCreation["email_id"] = $scope.emailInputRegister;
        userCreation["password"] = $scope.pwdInputRegister;
        userCreation["username"] = $scope.userInputRegister;
        var userCreationJson = JSON.stringify(userCreation);
        /*$scope.value=registerService.myFunc(userCreationJson);
        registerService.myFunc(userCreationJson, function(data){
                  $scope.value = data;
             });*/
        registerService.myFunc(userCreationJson).then(function success(response) {
                $scope.value = response.data.message;
            },
            function error(response) {
                $scope.value = response.data.message;
            });
    }

});



app.service('registerService', function($http) {

    this.myFunc = function(userCreationJson) {

        return $http.post('http://localhost:8082/user-management/register', userCreationJson)
            .success(function(data, status, headers, config) {
                alert("success message: " + data.message);
                return data.message;
                // cb(data.message);
            }).
             error(function(data, status, headers, config) {
                alert("failure message: " + data.message);
            });
    }
});