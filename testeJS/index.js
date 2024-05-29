const h2Subst = document.getElementById("h2Subst");
const btSubst = document.getElementById("btSubst");

btSubst.onclick = () => {
    var numero = Math.floor(Math.random() * 100) + 1;
  
    // Exibe o número aleatório na página
    document.getElementById("numeroAleatorio").innerHTML = "Número Aleatório: " + numero;
};