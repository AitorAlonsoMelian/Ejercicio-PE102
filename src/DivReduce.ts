import {Reduce} from './Reduce'

export class DivReduce extends Reduce {
  constructor(protected array: number[]){
    super(array)
    }
    /**
     * Implementación del método reduce que reduce en base a una división
     * @returns Retorna el array reducido
     */
    reduce(){
        let resultado: number = this.array[0];
        for( let i = 1; i < this.array.length; i++) {
            resultado = resultado / this.array[i]
        }

        return resultado
    }


}
