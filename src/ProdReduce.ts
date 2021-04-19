import {Reduce} from './Reduce'

export class ProdReduce extends Reduce {
  constructor(protected array: number[]){
    super(array)
    }

    reduce(){
        let resultado: number = this.array[0];
        for( let i = 1; i < this.array.length; i++) {
            resultado = resultado * this.array[i]
        }

        return resultado
    }


}
