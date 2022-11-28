document.getElementById("play-pause-button").onclick = function () {
    if (document.getElementById("videoPlay").paused) {
        $(this).removeClass('fa-play');
        $(this).addClass('fa-pause');
        document.getElementById("videoPlay").play();
    } else {
        $(this).removeClass('fa-pause');
        $(this).addClass('fa-play');
        document.getElementById("videoPlay").pause();
    }

    document.getElementById("videoPlay").onended = function() {
        $("#play-pause-button").removeClass('fa-pause');
        $("#play-pause-button").addClass('fa-play');
   };
}