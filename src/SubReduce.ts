import {Reduce} from './Reduce'

export class SubReduce extends Reduce {
  constructor(protected array: number[]){
    super(array)
    }
    /**
     * Implementación del método reduce que reduce en base a una resta
     * @returns Retorna el array reducido
     */
    reduce(){
        let resultado: number = 0;
        for( let i in this.array) {
            resultado = resultado - this.array[i]
        }

        return resultado
    }


}

