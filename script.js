// Array de Objetos
const livrosEncontrados = [
    { id: 1, titulo: "Diário de um Banana (Um)", autor: "Jeff Kinney", disponivel: true },

    { id: 2, titulo: "Rodrick é o Cara (Dois)", autor: "Jeff Kinney", disponivel: false },

    { id: 3, titulo: "A Gota D'Água (Três)", autor: "Jeff Kinney", disponivel: true },
    
    { id: 4, titulo: "Dias de Cão (Quatro)", autor: "Jeff Kinney", disponivel: true }
];

// elementos do DOM
const containerResultados = document.getElementById('resultadosBusca');

// exibe os livro
function exibirLivros(livros) {
    // limpa container 
    containerResultados.innerHTML = "";

    livros.forEach(livro => {
        const card = document.createElement('div');
        card.classList.add('card-livro');

        const titulo = document.createElement('h3');
        titulo.textContent = livro.titulo;

        const autor = document.createElement('p');
        autor.classList.add('autor');
        autor.textContent = livro.autor;

        const status = document.createElement('p');
        status.classList.add('status');
        
        const botao = document.createElement('button');
        botao.setAttribute('data-id', livro.id);

        if (livro.disponivel) {
            status.textContent = "Disponível";
            status.classList.add('disponivel');
            botao.textContent = "Reservar";
        } else {
            status.textContent = "Indisponível";
            status.classList.add('indisponivel');
            botao.textContent = "Indisponível";
            botao.disabled = true;
        }

        botao.addEventListener('click', () => {
            livro.disponivel = false;

            botao.textContent = "Reservado!";
            botao.disabled = true;

            status.textContent = "Indisponível";
            status.classList.remove('disponivel');
            status.classList.add('indisponivel');

            console.log(`Sucesso: O livro "${livro.titulo}" agora está Indisponível.`);
        });

        card.appendChild(titulo);
        card.appendChild(autor);
        card.appendChild(status);
        card.appendChild(botao);

        containerResultados.appendChild(card);
    });
}
exibirLivros(livrosEncontrados);
