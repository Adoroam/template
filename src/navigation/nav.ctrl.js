/* CONTROLLER FOR NAVIGATION */
app.controller('navCtrl', ['$location', function($location) {
    nav = this;
    if ($location.search()) {
        //find query to convert
        var addr = $location.search();
        addr = addr.in;
        $location.path(addr);
        //remove query from path
        var url = $location.url();
        var qy = url.indexOf("?");
        var str = url.substring(0, qy);
        $location.url(str);
    };

    nav.list = [
        {name: 'home', path: '/home', active: false},
        {name: 'aa', path: '/pagetwo', active: false},
        {name: 'ab', path: '/pagethree', active: false},
    ];

    nav.pathUpdate = function(index) {
        for (x in nav.list) {
            nav.list[x].active = false;
        };
        nav.list[index].active = true;
    };
    nav.path = $location.path();
    if (nav.path == '/') nav.path = '/home';
    for (x in nav.list) {
        if (nav.list[x].path == nav.path) nav.list[x].active = true;
    };


}]);
