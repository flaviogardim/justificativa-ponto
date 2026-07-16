const API_URL = "https://script.google.com/macros/s/AKfycbyTYr2hI0JL4ZSDSn6jZOT5zDnCNHjCP6tWoPPrdnWCWYfZ5iquCopPuUbp6FqYKlM/exec";

async function testarAPI() {

    const dados = {

        nome: "Teste",

        data: "2026-07-16",

        horario1: "08:00",

        horario2: "",

        justificativa: "Teste de comunicação"

    };

    const resposta = await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(dados)

    });

    const retorno = await resposta.json();

    console.log(retorno);

    alert(JSON.stringify(retorno));

}

window.onload = testarAPI;
