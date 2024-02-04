let headerAnime = () => {

    let t = gsap.timeline();

    t.to(".header-up", {
        y: -900,
        scrollTrigger: {
            trigger: "header-up",
            scrub: 0.2,
            end:"bottom 20%"
            // markers:true
        }
    }, "simul")

    t.to(".header-down", {
        y: 900,
        scrollTrigger: {
            trigger: "header-down",
            scrub: 0.2,
            end:"bottom 20%"
            // markers:true
        }
    }, "simul")

    t.to("#header-text", {
        display:"none",
        opacity:0,
        scrollTrigger: {
            trigger: "header-down",
            scrub: 2,
            end:"bottom 80%"
        }
    }, "erase")

    t.to("#header-tag", {
        display:"none",
        opacity:0,
        scrollTrigger: {
            trigger: "header-down",
            scrub: 2,
            end:"bottom 80%"
        }
    }, "erase")

    t.to("#head-img", {
        display:"none",
        opacity:0,
        scrollTrigger: {
            trigger: "header-down",
            scrub: 2,
            end:"bottom 80%"
        }
    }, "erase")

    t.from("#section2 p", {
        y:10,
        stagger:0.1,
        opacity:0,
        ease:5,
        scrollTrigger: {
            trigger: "section2",
            scrub: 1,
            start:"bottom 50%",
            end:"bottom 10%",
            // markers:true
        }
    })

}
headerAnime();

let page1Anime = () => {
    let elems = document.querySelectorAll(".elem");
    let page1 = document.querySelector("#page1")
    elems.forEach((e) => {
        e.addEventListener("mouseenter", () => {
            let bgImg = e.getAttribute("data-img");
            page1.style.backgroundImage = `url(${bgImg})`;
        })
    })
}
page1Anime();




