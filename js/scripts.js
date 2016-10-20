// Initialize Lettering JS
$('h1').lettering();

// Make Backstretch Go
$.backstretch('../img/bg.jpg');

//Make Masonry Go
$('article').masonry({
    itemSelector: 'h1',
    columnWidth: 0,
    gutter: 10,
    transitionDuration: '1s'
})