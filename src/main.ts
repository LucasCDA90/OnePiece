import './style.css'
import {CharacterService} from "./Character/Character.service.ts";
import {Character} from "./Character/Character.ts";
import {DisplayInterface} from "./DisplayInterface/DiscplayInterface.ts";

(async ()=>{
    try {
        // on recupere les characters de l'api
        const charactersApi = await CharacterService.getCharacters()
        
        // on map les characters de l'api en object character, pour etre sur des données que l'on a
        const charactersObject = charactersApi.map(character => CharacterService.mappingCharacterApiToCharacterObject(character))
        
        // on creer un tableau de characterDto maintenant
        // que l'on a des données exploitable dans l'application avec CharacterObject
        const tabCharacters = new Character(CharacterService.createArrayCharacterDtoFromCharacterObject(charactersObject))
        
        // on creer les elements de l'interface et on les affiche
        DisplayInterface.createCharacterElements(tabCharacters.characters)
    }catch (error) {
        console.log("ERROR => ", error)
    }
})()