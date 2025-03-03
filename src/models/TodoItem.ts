import {randomUUID, UUID} from "node:crypto";

export type SimpleTodoItem = {
    id: UUID;
    title: string;
    completed: boolean;
}

export default class TodoItem{
    id: UUID;
    title: string;
    completed: boolean;
    constructor(title: string, completed: boolean = false){
        this.id = randomUUID();
        this.title = title;
        this.completed = completed;
    }
    toSimpleObject():SimpleTodoItem{
        return {
            id: this.id,
            title: this.title,
            completed: this.completed
        }
    }

    toggle(){
        this.completed = !this.completed;
    }
}