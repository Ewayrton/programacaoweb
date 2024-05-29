const h2Subst = document.getElementById("h2Subst");
const btSubst = document.getElementById("btSubst");

btSubst.onclick = () => {
    var numero = Math.floor(Math.random() * 100) + 1;
    h2Subst.innerHTML = "Número Aleatório: " + numero;
};