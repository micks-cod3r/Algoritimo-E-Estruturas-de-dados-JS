import defaultEquals from "../util"
import ListaLigada from "./ClassLinkedList"

const Compare = {
    LESS_THAN: -1,
    BIGGER_THEN: 1,
}
function defaultCompare(a,b){
    if(a===b){
        return 0
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THEN
}

class ListaOrdenada extends ListaLigada {
    constructor(equalsFn= defaultEquals,compareFn = defaultCompare){
        super(equalsFn)
        this.compareFn = compareFn

    }
    insert(element, index = 0){//aqui colocaremos o indice como se fosse 0 para evitar erros, a posição do elemetno vai ser controlada internamente no codigo
        if(this.isEmpty()){
            return super.insert(element,0)
        }
        const pos = this.getIndexNextSortedElement(element)
        return super.insert(element,pos)

    }

    getIndexNextSortedElement(element){
        let current = this.head
        let i = 0
        for(;i<this.size()&& current;i++){
            const comp = this.compareFn(element,current.element)
        }
    }
}