class Card {
constructor() {
    this.badge = documen.getElementById("cart-badge");
    this.list = [];

    if (localStorage.cart) {
        this.list = JSON.parse(localStorage.getItem("cart"));
        this.reloadBadge();
    }
}
getList() {
    return this.list;
}

reloadBadge() {
    this.badge.innerText = this.list.length;

    if (this.list.length > 0) {
        this.badge.style.display = "flex";
    } else {
        this.badge.style.display = "nome";
    }
}
}