const divs = document.querySelectorAll('div');

divs.forEach(div => {
  div.addEventListener("click", (e) => {
    const rect = div.getBoundingClientRect();
    console.log(rect);
    console.log(`pageX: ${e.pageX}`);
    console.log(`pageY: ${e.pageY}`);
    console.log(`clientX: ${e.clientX}`);
    console.log(`clientY: ${e.clientY}`);
  });
});