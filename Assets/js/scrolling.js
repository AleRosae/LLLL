const percentLabel = document.querySelector("#percent");
const originalTitle = document.title;

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scrollTop / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);
  percentLabel.innerHTML = scrollPercentRounded;
  document.title = `(${scrollPercentRounded}%) ${originalTitle}`;
});