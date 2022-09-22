/**
 * PRICE CALCULATOR
 */
class MenuItemPriceCalculator {
    #laptop_price = 700;
    #phone_price = 500;
    constructor (laptop, phone) {
        this.laptop = laptop;
        this.phone  = phone;
    }
    purchaseTotal () {
        return ( (this.laptop * this.#laptop_price) + (this.phone * this.#phone_price));
    }
    get totalPrice () {
        return this.purchaseTotal ();
    }
};

let menu1 = new MenuItemPriceCalculator (4, 6);

console.log (menu1.totalPrice);