import {CharacterObject} from "./Character.type";

export class CharacterDto {
    public id: string
    public name: string
    public size: string
        
    constructor(character: CharacterObject) {
        this.id = character.id
        this.name = character.name
        this.size = character.size
        }
    
    static basic = (character: CharacterObject) => {
        return new CharacterDto(character)
    }
}