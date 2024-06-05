import {CharacterDto} from "../Character/CharacterDto.ts";
import {Card} from "../Component/Card.ts";
import {ContentCard} from "../Component/ContentCard.ts";

export class DisplayInterface {

    static createCharacterElements(characters: CharacterDto[]) {
        characters.forEach(character => {
          
            const card = Card.basic('card')

            const contentCard = ContentCard.basicWithAddContent(
                character.id,
                character.name,
                character.size
            )
            card.addElement(contentCard.container)
            card.addCardInContainer()
        })
    }
}