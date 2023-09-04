import { gsap } from "gsap"

const invertSection = (sectionSelector, toggleClassSettings) => {
  gsap.to('html', {
    "--main-color": "#000000",
    "--sub-color": "#ffffff",
    scrollTrigger: {
      toggleActions: "play reverse play reverse",
      trigger: sectionSelector,
      start: "top center", // when the top of the trigger hits the top of the viewport
      end: "bottom 40%", // end after scrolling 500px beyond the start
      toggleClass: {...toggleClassSettings}
    }
  })
}

export default invertSection