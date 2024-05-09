document.addEventListener('DOMContentLoaded', () => {
  const keyDivs = Array.from(document.querySelectorAll('.key'));
  const audios = Array.from(document.querySelectorAll('audio'));

  keyDivs.forEach(key => key.addEventListener('transitionend', removeTransition));
  document.addEventListener('keydown', playSound);

  function removeTransition(e){
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('playing');
  }
  
  function playSound({key}) {
    const audio = audios.find(
      (audio) => audio.dataset.key.toLowerCase() === key.toLowerCase()
    );
    const keyDiv = keyDivs.find(
      (keyDiv) => keyDiv.dataset.key.toLowerCase() === key.toLowerCase()
    );

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    keyDiv.classList.add('playing');    
  }
});
