var $polystar = $('.post-image');

$polystar.on('mouseenter', function() {
    $polystar.get(0).play();
});
$polystar.on('mouseout', function() {
    $polystar.get(0).pause();
})