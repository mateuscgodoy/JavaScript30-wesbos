document.addEventListener('DOMContentLoaded', () => {
  const keyDivs = Array.from(document.querySelectorAll('.key'));
  const audios = Array.from(document.querySelectorAll('audio'));

  document.addEventListener('keydown', ({ key }) => {
    const audio = audios.find(
      (audio) => audio.dataset.key.toLowerCase() === key.toLowerCase()
    );
    const keyDiv = keyDivs.find(
      (keyDiv) => keyDiv.dataset.key.toLowerCase() === key.toLowerCase()
    );

    if (!audio) return;

    reproduceAudioInstantly(audio.src);

    keyDiv.classList.add('playing');
    setTimeout(() => {
      keyDiv.classList.remove('playing');
    }, 100);

    // audio.play();
  });
});

function reproduceAudioInstantly(src) {
  const audio = new Audio(src);
  audio.play();
}
