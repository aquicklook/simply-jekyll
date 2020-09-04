var active;
var sections = {};
var nav = {
	height: document.querySelector("nav").clientHeight,
	width: document.querySelector("nav").clientWidth
};

var swiper = new Swiper(".swiper-container", {
	slidesPerView: 1,
	spaceBetween: 0,
	grabCursor: true,
	slideToClickedSlide: true,
	on: {
		slideChange: function(e) {
			if(swiper.touches.diff) {
				console.log(swiper.touches.diff)
				console.log('TOUCH SLIDE')
				window.scrollTo(0, sections[swiper.activeIndex].start - nav.height);
			}
		},
	},
});

function getSections() {
	// get all sections
	active = swiper.activeIndex
	const elements = document.querySelectorAll("section");
	elements.forEach((el, i) => {
		/*returns the values as an object*/
		sections[i] = {
			id: el.dataset.id,
			height: el.clientHeight,
			start: el.offsetTop,
			end: el.offsetTop + el.clientHeight,
			progressEl: document.querySelector(
				`.swiper-slide[data-section='${el.dataset.id}'] > .progress`
			)
		};
	});
}

getSections();

/*this function checks if the element is in view and then sets the progress bar - remember to offset for the nav bar height*/
function progress(position) {
	Object.keys(sections).forEach(el => {
		if (position >= sections[el].start - nav.height && position <= sections[el].end - nav.height){
			console.log(`Section ${sections[el].id} is in view`);
			sections[el].progressEl.style.width = (position + nav.height - sections[el].start) / sections[el].height * 100 + "%";
			
			swiper.slideTo(sections[el].id - 1);
			active = swiper.activeIndex
			console.log(active)
		}
	});
}


window.addEventListener("scroll", e => {
	var position = window.scrollY;
	progress(position);
});
