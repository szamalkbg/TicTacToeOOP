export default class Elem{
    #ertek="";
    #szuloElem;
    constructor(ertek, szuloElem){
        this.#ertek=ertek;
        this.szuloElem=szuloElem
        this.#megjelenit()
        /* eseménykezelő a divre */
        this.#divElem=this.#szuloElem.children("div:last-child")
        //console.log(this.#divElem)
        this.#divElem.on("click",function(){
            /* this - példány */
            console.log(this)
        })
    }

    #megjelenit(){
        let txt=`<div><p>${this.#ertek}</p></div>`
        this.#szuloElem.append(txt);
    }
}