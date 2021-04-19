//animation for homepage

var heading = {};
heading.opacityIn = [0,1];
heading.scaleIn = [0.2, 1];
heading.scaleOut = 3;
heading.durationIn = 800;
heading.durationOut = 600;
heading.delay = 500;

const homeAnim=anime.timeline({loop: true})
  .add({
    targets: '.heading .intro-1',
    opacity: heading.opacityIn,
    scale: heading.scaleIn,
    duration: heading.durationIn
  }).add({
    targets: '.heading .intro-1',
    opacity: 0,
    scale: heading.scaleOut,
    duration: heading.durationOut,
    easing: "easeInExpo",
    delay: heading.delay
  }).add({
    targets: '.heading .intro-2',
    opacity: heading.opacityIn,
    scale: heading.scaleIn,
    duration: heading.durationIn
  }).add({
    targets: '.heading .intro-2',
    opacity: 0,
    scale: heading.scaleOut,
    duration: heading.durationOut,
    easing: "easeInExpo",
    delay: heading.delay
  }).add({
    targets: '.heading .intro-3',
    opacity: heading.opacityIn,
    scale: heading.scaleIn,
    duration: heading.durationIn
  }).add({
    targets: '.heading .intro-3',
    opacity: 0,
    scale: heading.scaleOut,
    duration: heading.durationOut,
    easing: "easeInExpo",
    delay: heading.delay
  }).add({
    targets: '.heading',
    opacity: 0,
    duration: 500,
    delay: 500
  });