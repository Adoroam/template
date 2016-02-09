/* service to get db data */
/*
app.factory('serv', function($http, $cookies) {
    var promise;
    var jsondata = {
        get: function() {
            if (!promise) {
                var promise = $http.post('/db').success(function(response) {
                    return response;
                });
                return promise;
            }
        }
        return jsondata;
    };
});
*/