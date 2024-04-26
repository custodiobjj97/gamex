import menuMobile from "./modules/menuMobile.js";
import scrollAnimation from "./modules/scrollAnimation.js";
import SlideNav from "./modules/slidenav.js";

const menu = new menuMobile('.toggle','.list-menu','.line')

menu.init()

const scroll = new scrollAnimation('.js-scroll')

scroll.start()

const slide = new SlideNav('.slide','.slide-wrapper')


slide.start();

slide.addControl('.custom-control')

