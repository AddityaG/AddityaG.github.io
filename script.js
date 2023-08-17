function navclickfunc(element) {
    document.getElementsByClassName("nav-link active")[0].className = "nav-link";
    // console.log(getElementsByClassName("nav-link active"))
    element.className = "nav-link active";
  }

document.body.onscroll = () => {
    var current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (300 >= sectionTop ) {
        current = section.getAttribute("id"); }
    });
  
    navLi.forEach((li) => {
      li.className("nav-link");
      if (li.classList.contains(current)) {
        li.className("nav-link active");
      }
    });
};