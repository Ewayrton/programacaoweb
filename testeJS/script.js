const h2Subst = document.getElementById("h2Subst");
const btSubst = document.getElementById("btSubst");
const h2Subst2 = document.getElementById("h2Subst2")
const btSubst2 = document.getElementById("btSubst2")

btSubst.onclick = () => {
    var numero = Math.floor(Math.random() * 100) + 1;
    h2Subst.innerHTML = "Número Sorteado: " + numero;
};

btSubst2.onclick = () => {
    var numero = Math.floor(Math.random() * 10) + 1;
    h2Subst2.innerHTML = "Número Sorteado: " + numero;
};