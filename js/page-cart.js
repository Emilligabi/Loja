class PageClient {
  constructor() {
    this.elementTarget = document.getElementById("products-list");
    this.init();

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

    document.getElementById("client").onsubmit = (event) => {
      event.preventDefault();
      const value = document.getElementById("name").value.trim();

      if (!value) {
        alert("Preencha o nome corretamente!");
        return;
      }

      target.classList.add("active");

      localStorage.removeItem("cart");
      setTimeout(() => {
          alert("compra efetuada com sucesso!");
          location.href = "/";
      }, 3000);

    };
  }

  init() {}

  render(products) {}
}

const pageClient = new PageClient();
