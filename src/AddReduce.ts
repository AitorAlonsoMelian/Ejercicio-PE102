import {Reduce} from './Reduce'

export class AddReduce extends Reduce {
  constructor(protected array: number[]){
    super(array)
    }
    /**
     * Implementación del método reduce que reduce en base a una suma
     * @returns Retorna el array reducido
     */
    reduce(){
        let resultado: number = 0;
        for( let i in this.array) {
            resultado = resultado + this.array[i]
        }

        return resultado
    }


}

