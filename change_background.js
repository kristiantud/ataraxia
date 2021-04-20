window.onload = function () {
    var num = Math.floor(Math.random() * 5);
    var vid1_source = "video_backgrounds/background_mountains.mp4";
    var vid2_source = "video_backgrounds/background_beach.mp4";
    var vid3_source = "video_backgrounds/background_rain.mp4";
    var vid4_source = "video_backgrounds/background_rain2.mp4";
    var vid5_source = "video_backgrounds/background_waterfall.mp4";
    if (num == 0){
        // play mountains
        $('#background_video').animate({opacity : '1' },4000);
        $("#background_video").html('<source src=' + vid1_source  +' type="video/mp4"></source>' );
        $("#background_video source")[0].load();
    } else if (num == 1) {
        // play beach
        $('#background_video').animate({opacity : '1' },4000);
        $("#background_video").html('<source src=' + vid2_source  +' type="video/mp4"></source>' );
        $('.title_content').css({color:'black'});
        $('.arrow-down').css({borderColor: 'black'});
        $("#background_video source")[0].load();
    } else if (num == 2){
        // play rain
        $('#background_video').animate({opacity : '1' },4000);
        $("#background_video").html('<source src=' + vid3_source  +' type="video/mp4"></source>' );
        $("#background_video source")[0].load();
    } else if (num == 3){
        // play rain2
        $('#background_video').animate({opacity : '1' },4000);
        $("#background_video").html('<source src=' + vid4_source  +' type="video/mp4"></source>' );
        $("#background_video source")[0].load();
    } else {
        $('#background_video').animate({opacity : '1' },4000);
        
        $("#background_video").html('<source src=' + vid5_source  +' type="video/mp4"></source>' );
        $("#background_video source")[0].load();  
    } 
};