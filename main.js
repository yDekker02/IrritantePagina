let count = 0;

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    count++
    console.log(count)

    if(count >= 5) {
    window.scrollTo(scroll - 50, scroll - 50);
    count = 0;
}
});
