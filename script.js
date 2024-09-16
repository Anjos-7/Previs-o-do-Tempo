const key = "1f45a0e678d1cc2d84c1391a84710132";

function cliquenobotao() {
    const input = document.querySelector(".cidade-input").value;
    buscar(input);
}

async function buscar(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
        .then(resposta => resposta.json());

    colocardados(dados);
}

function colocardados(dados) {
    document.querySelector(".cidade1").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".nubl").innerHTML = dados.weather[0].description;
    document.querySelector('.Umidade').innerHTML = "Umidade: " + dados.main.humidity + "%";
}
