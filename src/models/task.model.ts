export class Task{
    /**
     *Vai ser passado número, titulo, descrição ao adicionar uma nova nota. 
     */
    constructor(
        public id: Number,
        public title: String,
        // public description: String,
        public done: Boolean
    ) { }
}