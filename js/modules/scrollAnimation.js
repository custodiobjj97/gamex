export default class scrollAnimation{
    constructor(sections){
        this.sections = document.querySelectorAll(sections);
        this.activeClass="visible";
    };

    handleScroll(){
        this.sections.forEach((item) =>{
            const sectionTop = item.getBoundingClientRect().top;
            const halfHeight = window.innerHeight * 0.8;
            const isSection = (sectionTop - halfHeight) < 0;
            if(isSection){
                item.classList.add(this.activeClass);
            }else{
                item.classList.remove(this.activeClass);
            };
        });
    };


    eventScroll(){
        window.addEventListener('scroll', this.handleScroll);
    };

    bindEvent(){
        this.handleScroll = this.handleScroll.bind(this);
    };

    start(){
       if(this.sections.length){
        this.bindEvent();
        this.eventScroll();
        this.handleScroll();
       }
    }
}