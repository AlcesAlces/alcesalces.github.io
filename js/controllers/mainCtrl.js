app.controller('MainCtrl', function ($scope, MainServ) {

    //Contain all of your non-shared functionality to this controller.
    $scope.vm = MainServ;
    //Always call init or clear with this model
    $scope.vm.init();

    $scope.test = function() {
        var cloud = $('#cloud');

        var toToggle = 'sheep';
        var other = 'frog';
        var sheep = $('#sheep');

        if(sheep.hasClass('hidden')){
            toToggle = 'frog';
            other = 'sheep';
        }

        cloud.fadeIn("slow", function() {
            var sec = $('#'+toToggle);
            var prim = $('#'+other);
            prim.removeClass('hidden');
            sec.addClass('hidden');
            cloud.fadeOut('slow');
        });
        cloud.removeClass('hidden');

        // //Is hidden
        // if(cloud.hasClass('hidden')){
        //     cloud.fadeIn("slow");
        //     cloud.removeClass('hidden');
        // }
        // //Is not hidden
        // else{
        //     cloud.fadeOut("slow");
   
        //     cloud.addClass('hidden');
        // }
    }
});