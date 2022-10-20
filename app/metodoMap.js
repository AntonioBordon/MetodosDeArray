function aplicarDesconto(livros) {
  const desconto = 0.3
  livrosComDesconto = livros.map(livro => {
    return {...livro, preco: livro.preco - (livro.preco * desconto)}
          // faz uma copia do array de livro, e defini o preço : com o desconto
  })
  return livrosComDesconto
}