document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('promo-video');
    var overlay = document.querySelector('.video-overlay');

    // Hide overlay when video plays
    video.addEventListener('play', function () {
        overlay.classList.add('hidden');
    });

    // Show overlay when video is paused
    video.addEventListener('pause', function () {
        overlay.classList.remove('hidden');
    });

    // Show overlay if video ends
    video.addEventListener('ended', function () {
        overlay.classList.remove('hidden');
    });

    // Hide overlay when hovering over the video
    video.addEventListener('mouseover', function () {
        overlay.classList.add('hidden');
    });

    // Show overlay when not hovering over the video and it's paused
    video.addEventListener('mouseout', function () {
        if (video.paused) {
            overlay.classList.remove('hidden');
        }
    });
});
