/** @description - Card inside menu slider */
class CardMenu extends HTMLElement {
    constructor() {
        super();
        this.color  = ''
        this.img    = ''
        this.text   = ''
        this.attr   = ''
    }

    connectedCallback() {
        this.color = this.getAttribute('color')
        this.img = this.getAttribute('img')
        this.text = this.getAttribute('text')
        this.attr = this.getAttribute('attr')

        this.innerHTML = `
            <div class="fo-slider__card fo-slider__card--bg-${this.color}">
                <label for="categories_slider_${this.attr}" class="trigger"></label>
                <span class="fo-slider__img-wrapper">
                    <img src="${this.img}" alt="${this.text}" class="fo-slider__img">
                </span>
                <span class="fo-slider__text">${this.text}</span>
            </div><!-- end of card -->
        `
    }
}

/*** @description - Custom component for set of menus */
class ProductMenus extends HTMLElement {
    constructor() { 
        super(); 
        this.set = ''
        this.count = 0
        this.tags = ['Specials', 'Offers', 'Fitlab']
    }

    connectedCallback() {
        let min = 3, max = 7;
        this.count = Math.floor(Math.random() * (max - min)) + min;
        this.set = this.getAttribute('set')

        this.render()
    }

    /** @param {number} count */
    generateMenu(count) {
        let temp = '';

        for(let i = 0; i <= count; i++) {
            let tag = this.tags[Math.floor(Math.random() * (2 - 0)) + 0];
            temp += `
                <div class="fo-menu__card" data-item-tag="${tag}">
                    <!-- default state -->
                    <div class="fo-menu__card-wrapper">
                        <div class="fo-menu__card-content">
                            <h3 class="fo-menu__card-title">Tähtsate ninade pizza</h3>
                            <p class="fo-menu__card-info">With pepperoni, mozzarella cheese and Vapiano tomato sauce. Garnish with cherry tomatoes and basil.</p>
                            <span class="fo-menu__card-price">7,50 €</span>
                        </div>

                        <div class="fo-menu__card-img">
                            <img src="https://picsum.photos/500/300?random=${this.set}" alt="Tähtsate ninade pizza">
                            <div class="fo-menu__card-qty">
                                <label for="product_modal" class="fo-menu__card-add">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 6.16699C12.75 5.75278 12.4142 5.41699 12 5.41699C11.5858 5.41699 11.25 5.75278 11.25 6.16699V11.2502H6.16663C5.75241 11.2502 5.41663 11.586 5.41663 12.0002C5.41663 12.4145 5.75241 12.7502 6.16663 12.7502H11.25V17.8337C11.25 18.2479 11.5858 18.5837 12 18.5837C12.4142 18.5837 12.75 18.2479 12.75 17.8337V12.7502H17.8333C18.2475 12.7502 18.5833 12.4145 18.5833 12.0002C18.5833 11.586 18.2475 11.2502 17.8333 11.2502H12.75V6.16699Z" fill="currentColor"></path>
                                    </svg>                                                    
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }

        return temp;
    }

    render () {
        this.parentElement.innerHTML = this.generateMenu(this.count)
    }
}

customElements.define('card-menu', CardMenu)
customElements.define('product-menus', ProductMenus)