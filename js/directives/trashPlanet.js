(function(){
    "use strict";
    angular
        .module("projectBlock")
        .directive("trashPlanet", function trashPlanet(){
            return {
                restrict: "E",
                templateUrl: "js/views/trashPlanet.html",
                link: function(scope, elem, attr){
                    $(document).ready(function(){

                        var walk = function(){
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

                        var initialize = function(){
                            $('#planet').css({'-webkit-animation-play-state': 'paused'});
                            $('#litter').css({'-webkit-animation-play-state': 'paused'});
                            $('#forward').css({'-webkit-animation-play-state': 'paused'});
                            document.getElementById('trashman').className = "trashman trashmanSurprise";
                            setTimeout(function() {
                                console.log(1);
                                document.getElementById('trashman').className = "trashman trashmanQuickWalk";
                                setTimeout(function(){
                                    console.log(2);
                                    document.getElementById('trashman').className = "trashman trashmanPickup";
                                    setTimeout(function(){
                                        console.log(3);
                                        document.getElementById('trashman').className = "trashman trashmanReset";
                                        setTimeout(function(){
                                            elem.css({"opacity": 1});
                                            document.getElementById('trashman').className = "trashman trashmanWalk";
                                            $('#planet').css({'-webkit-animation-play-state': 'running'});
                                            $('#litter').css({'-webkit-animation-play-state': 'running'});
                                            $('#forward').css({'-webkit-animation-play-state': 'running'});
                                            walk();
                                        },100)
                                    },100)
                                },100)
                            },100)
                        };

                        var loadImage = function(){
                            elem.css({"opacity": 0});
                            var img = new Image();
                            $('#planet').load(function(){
                                initialize();
                            });
                            img.src = "imgs/planet.jpg";
                        };

                        loadImage();
                    })
                }
            }

    })
})();