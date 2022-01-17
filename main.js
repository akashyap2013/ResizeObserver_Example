const fixedWidth = document.querySelector(".fixedWidth");

const obs = new ResizeObserver(entries => {
 
    const fixedWidth = entries[0];
    const flag = fixedWidth.contentRect.width <= 250
    fixedWidth.target.style.backgroundColor = flag ?  "#0a9396" : "#f1faee";
    fixedWidth.target.style.transform = flag ? "translate(50%, -150%)": "";
    // console.log(entries);
})

obs.observe(fixedWidth);