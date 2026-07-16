const API_URL = "https://script.google.com/macros/s/AKfycbyTYr2hI0JL4ZSDSn6jZOT5zDnCNHjCP6tWoPPrdnWCWYfZ5iquCopPuUbp6FqYKlM/exec";

window.onload = async function () {

    try {

        const resposta = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: "Teste GitHub",
                data: "2026-07-15",
                horario1: "08:00",
                horario2: "",
                justificativa: "Primeiro teste"
            })
        });

        const resultado = await resposta.json();

        alert(JSON.stringify(resultado));

    } catch (e) {

        alert(e.message);

    }

};
