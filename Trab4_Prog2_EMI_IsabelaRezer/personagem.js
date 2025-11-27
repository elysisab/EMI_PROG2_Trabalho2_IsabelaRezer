let listaPersonagem =  JSON.parse(localStorage.getItem('lista-personagens')) || [];
if(listaPersonagem.length > 0){
    listaPersonagem = listaPersonagem.map(d => new Personagem(d.nome, d.desc, d.elemento, d.caminho, d.nivel, d.faccao, d.raca));
}

// Mostrar campos conforme tipo
function mostrarCampos() {
    document.getElementById("camposPersonagem").style.display = "none";
    if("personagem") document.getElementById("camposPersonagem").style.display = "block";
}

carregarItem();

document.getElementById("btnAddItem").addEventListener("click", addItem);

function addItem(){
    if("personagem"){
        let nome = document.getElementById("titulo").value;
        let desc = document.getElementById("desc").value;
        
        let elemento = document.getElementById("elemento").value;
        let caminho = document.getElementById("caminho").value;
        let nivel = document.getElementById("nivel").value;
        let raca = document.getElementById("raca").value;
        let faccao = document.getElementById("faccao").value;
        
        const obj = new Personagem(nome, desc, elemento, caminho, nivel, faccao, raca);
        listaPersonagem.push(obj);
        localStorage.setItem('lista-personagens', JSON.stringify(listaPersonagem));
        carregarItem();
    } 
}

function carregarItem(){
    const ulPersonagem = document.getElementById("listaPersonagem");

    ulPersonagem.innerHTML = "";

    for(let i = 0; i < listaPersonagem.length; i++){
        let li = document.createElement("li");
        li.innerHTML = listaPersonagem[i];

        ulPersonagem.appendChild(li);

        let btnRemover = document.createElement("button");
        btnRemover.innerHTML = "Remover";
        btnRemover.setAttribute("onclick", `removerItemPersonagem(${i})`);
        li.appendChild(btnRemover); 

        let btnInfo = document.createElement("button");
        btnInfo.innerHTML = "Info";
        btnInfo.setAttribute("onclick", `informAcaoPersonagem(${i})`);
        li.appendChild(btnInfo);
    }
}

// Funções remover + info
function removerItemPersonagem(indice) {
    listaPersonagem.splice(indice, 1);
    localStorage.setItem('lista-personagens', JSON.stringify(listaPersonagem));
    carregarItem();
}
function informAcaoPersonagem(indice){
    alert(listaPersonagem[indice].exibirDados());
}