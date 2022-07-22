class PageClient {
    constructor() {
        this.elementTarget = document.getElementById("products-list");
        this.init()
    
        const target = document.getElementById("loading");
        "loading"
        .split("")
        .map((p) => {
            const s = document.createElement("span");
            s.innerText = p.toUpperCase();
            return s;
    })

    .forEach((s) => target.append(s));

    document.getElementById("go-to-register").onclick = () => {
        document.getElementById("cart").style.display = "none";
        document.getElementById("register").style.display = "flex";
    };
    }

    init() {

    }

    render(products) {

    }


}

const pageClient = new PageClient();