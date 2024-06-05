export class Card {
    public containerElement: HTMLDivElement
    public element: HTMLDivElement
    
    constructor() {
        this.containerElement = document.getElementById('app') as HTMLDivElement
        this.element = document.createElement('div')
    }
    
    static basic = (nameClass: string) => {
        const instance = new Card()
        instance.addClass(nameClass)
        return instance
    }
    
    addClass = (className: string) => {
        this.element.classList.add(className)
    }
    
    addAttribute = (attribute: string, value: string) => {
        this.element.setAttribute(attribute, value)
    }
    
    addElement = (element: HTMLElement) => {
        this.element.appendChild(element)
    }

    addCardInContainer = () => {
        this.containerElement.appendChild(this.element)
    }
}