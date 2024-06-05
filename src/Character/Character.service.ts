import {http} from "../Http/axios.instance.ts";
import {CharacterApi, CharacterObject} from "./Character.type.ts";
import {CharacterDto} from "./CharacterDto.ts";

export class CharacterService {

    static getCharacters = async () => {
        try {
            const response = await http.get<CharacterApi[]>('/characters/en')
            return response.data
        } catch (error) {
            console.log("ERROR => ", error)
            throw error
        }
    }
    

    static mappingCharacterApiToCharacterObject = (character: CharacterApi):CharacterObject => {
        return {
            id: character.id ?? "",
            name: character.name ?? "",
            size: character.size ?? "",
            }
    }

    static createArrayCharacterDtoFromCharacterObject = (charactersObject: CharacterObject[]): CharacterDto[] => {
        return charactersObject.map(characterObject => {
            return CharacterDto.basic(characterObject)
        })
    }
}