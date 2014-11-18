(function(){
    "use strict";
    angular
        .module("projectBlock")
        .directive("trashPlanet", function trashPlanet(){
            return {
                restrict: "E",
                templateUrl: "js/views/trashPlanet.html",
                link: function(scope, elem, attr){
                    console.log("heyo");
                    $(document).ready(function(){
                        var walk = function(){
                            console.log("What?");
                            setTimeout(function(){
                                //Surpise for 1000
                                document.getElementById('trashman').className = "trashman trashmanSurprise";
                                $('#planet').css({'-webkit-animation-play-state': 'paused'});
                                $('#litter').css({'-webkit-animation-play-state': 'paused'});
                                $('#forward').css({'-webkit-animation-play-state': 'paused'});
                                setTimeout(function(){
                                    //Quick walk for 1000
                                    document.getElementById('trashman').className = "trashman trashmanQuickWalk";
                                    $('#planet').css({'-webkit-animation-play-state': 'running'});
                                    $('#litter').css({'-webkit-animation-play-state': 'running'});
                                    $('#forward').css({'-webkit-animation-play-state': 'running'});
                                    setTimeout(function(){
                                        //Pickup for 1200
                                        $('#planet').css({'-webkit-animation-play-state': 'paused'});
                                        $('#litter').css({'-webkit-animation-play-state': 'paused'});
                                        $('#forward').css({'-webkit-animation-play-state': 'paused'});
                                        document.getElementById('trashman').className = "trashman trashmanPickup";
                                        setTimeout(function(){
                                            $('#litter').removeClass("litter");
                                            setTimeout(function(){
                                                $('#litter').addClass("litter");
                                            }, 100)
                                        }, 1100);
                                        setTimeout(function(){
                                            //Reset for 2000
                                            document.getElementById('trashman').className = "trashman trashmanReset";
                                            setTimeout(function(){
                                                document.getElementById('trashman').className = "trashman trashmanWalk";
                                                $('#planet').css({'-webkit-animation-play-state': 'running'});
                                                $('#litter').css({'-webkit-animation-play-state': 'running'});
                                                $('#forward').css({'-webkit-animation-play-state': 'running'});
                                                walk();
                                            }, 2000)
                                        }, 1600)
                                    }, 1000)
                                }, 1000)
                            }, 13000);
                        };
                        walk();

                    })
                }
            }

    })
})();