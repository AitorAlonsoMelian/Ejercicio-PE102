export abstract class Reduce {
    constructor(protected array: number[]){
    }

    public run(){
        this.reduce()
    }

    protected abstract reduce(): void;

}

