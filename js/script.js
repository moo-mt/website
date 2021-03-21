window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  console.log(`'beforeinstallprompt' event was fired and popup blocked`);
});

new TypeIt("#heroTyper", {
  speed: 75,
  loop: true,
  waitUntilVisible: true,
  cursorChar: '_'
})
  .type("<strong>reliable</strong> solutions", {delay: 1500}).move(-10).delete(-8)
  .type("<strong>ingenious</strong>", {delay: 1500}).delete(-9)
  .type("<strong>cutting edge</strong>", {delay: 1500}).delete(-12)
  .type("<strong>scalable</strong>", {delay: 1500}).delete(-8)
  .type("<strong>innovative</strong>", {delay: 10000})
  .go();