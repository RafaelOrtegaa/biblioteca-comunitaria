// Lista de livros
const livrosEncontrados = [
    { id: 1, titulo: "Diário de um Banana (Um)", autor: "Jeff Kinney", disponivel: true, imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_655974-MLU50516803001_062022-F.webp" },
    { id: 2, titulo: "Rodrick é o Cara (Dois)", autor: "Jeff Kinney", disponivel: false, imagem: "https://m.media-amazon.com/images/I/71+fh2vstSL._SY522_.jpg" },
    { id: 3, titulo: "A Gota D'Água (Três)", autor: "Jeff Kinney", disponivel: true, imagem: "https://m.media-amazon.com/images/I/81T9BY8yEnL._SY522_.jpg" },
    { id: 4, titulo: "Dias de Cão (Quatro)", autor: "Jeff Kinney", disponivel: true, imagem: "https://upload.wikimedia.org/wikipedia/pt/0/0c/Dias-de-cao.jpg" }
];

// Pega a div do HTML
const containerResultados = document.getElementById('resultadosBusca');

// Função que mostra os livros na tela
function exibirLivros(livros) {

    // Limpa a tela
    containerResultados.innerHTML = "";

    // Passa por cada livro
    livros.forEach(livro => {

        // Cria o card
        const card = document.createElement('div');

        // Cria a imagem
        const img = document.createElement('img');
        img.src = livro.imagem;

        // Cria o título
        const titulo = document.createElement('h3');
        titulo.textContent = livro.titulo;

        // Cria o autor
        const autor = document.createElement('p');
        autor.textContent = livro.autor;

        // Cria o status
        const status = document.createElement('p');

        // Cria o botão
        const botao = document.createElement('button');

        // Verifica se está disponível
        if (livro.disponivel) {
            status.textContent = "Disponível";
            botao.textContent = "Reservar";
        } else {
            status.textContent = "Indisponível";
            botao.textContent = "Indisponível";
            botao.disabled = true;
        }

        // Quando clicar no botão
        botao.addEventListener('click', () => {
            livro.disponivel = false; // muda o estado
            botao.textContent = "Reservado!";
            botao.disabled = true;
            status.textContent = "Indisponível";
        });

        // Monta o card
        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(autor);
        card.appendChild(status);
        card.appendChild(botao);

        // Mostra na tela
        containerResultados.appendChild(card);
    });
}

// Chama a função
exibirLivros(livrosEncontrados);