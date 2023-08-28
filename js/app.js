$(document).ready(function(){
    $('.collapse_btn').click(function(){
        $('.menu').slideToggle(600);
    }); 
});

// VenoBox img
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
// Venobox video
new VenoBox({
    selector: '.my-video-links',
});