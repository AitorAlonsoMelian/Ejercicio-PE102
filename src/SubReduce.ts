import {Reduce} from './Reduce'

export class SubReduce extends Reduce {
  constructor(protected array: number[]){
    super(array)
    }

    reduce(){
        let resultado: number = 0;
        for( let i in this.array) {
            resultado = resultado - this.array[i]
        }

        return resultado
    }


}

