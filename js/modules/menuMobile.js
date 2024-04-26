export default class menuMobile{
    constructor(toggle,menu,icon){
        this.toggle=document.querySelector(toggle);
        this.menu=document.querySelector(menu);
        this.icon=document.querySelector(icon);
        this.activeClass="open";
    };


    menuOpen(event){
        if(event.type === "touchstart"){
            event.preventDefault();
        };

        this.menu.classList.toggle(this.activeClass);
        this.icon.classList.toggle(this.activeClass);
    };


    eventMobile(){
        this.toggle.addEventListener('click', this.menuOpen);
        this.toggle.addEventListener('touchstart', this.menuOpen);
    };


    bindEvent(){
        this.menuOpen = this.menuOpen.bind(this);
    };


    init(){
        if(this.menu){
            this.bindEvent();
            this.eventMobile();
        };
    };
}