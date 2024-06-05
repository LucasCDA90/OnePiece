export class ContentCard {
    public id: HTMLParagraphElement
    public name: HTMLParagraphElement
    public size: HTMLParagraphElement
    public container: HTMLDivElement
    
    constructor() {
        this.id = document.createElement('p')
        this.name = document.createElement('p')
        this.size = document.createElement('p')
        this.container = document.createElement('div')
    }

    static basicWithAddContent = (
        id: string,
        name: string,
        size: string,
    ) => {
        const instance = new ContentCard()
        instance.id.textContent = id
        instance.name.textContent = name
        instance.size.textContent = size
        instance.addElementInContainer()
        return instance
    }
    
    private addElementInContainer = () => {
        this.container.appendChild(this.id)
        this.container.appendChild(this.name)
        this.container.appendChild(this.size)
    }
}