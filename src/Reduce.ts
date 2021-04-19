export abstract class Reduce {
    /**
     * Superclase Reduce a partir de la cual se definiran las subclases
     * @param array Recibe un array que reducir como parámetro
     */
    constructor(protected array: number[]){
    }

    /**
     * Método template.
     */
    public run(){
        this.beforeReduce()

        const result = this.reduce()

        this.afterReduce()

        return result
    }

    /**
     * Metodo que tienen que implementar las subclases
     */
    protected abstract reduce(): void;

    /**
     * Métodos hook
     */
    protected beforeReduce(){}
    protected afterReduce(){}


}
