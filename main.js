const divs = document.querySelectorAll('div');
const redbox = document.querySelector('.box');

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

const btns = document.querySelectorAll('button');

btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    switch (e.target.innerHTML) {
      case "Scroll by 100px(Y)":
        window.scrollBy({left: 0, top: 100, behavior: "smooth"});
        break;
      case "Scroll to 100px(Y)":
        window.scrollTo({left: 0, top: 100, behavior: "smooth"});
        break;
        case "Scroll into redbox":
          redbox.scrollIntoView({behavior: "smooth"});
        break;
      default:
        break;
    }
  });
});
