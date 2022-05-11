# :book: Poemas de Camões

- [Acessar o site](https://augusto-davi.github.io/poemas-de-camoes/)

## Recursos

- Os poemas foram retirados deste site: <http://users.isr.ist.utl.pt/~cfb/VdS/camoes.html>
- O logo pode ser encontrado aqui: [WorldVectorLogo](https://worldvectorlogo.com/pt/logo/instituto-camoes).

## Sobre o projeto

- Visitando o site original, pensei em criar uma versão moderna do mesmo, aplicando o que venho estudando sobre `JavaScript, HTML e CSS`.

### JavaScript

- Gerei a lista de poemas dinamicamente utilizando o método `map`, a fim de percorrer um array que contém objetos com o nome do poema e seu arquivo correspondente.
- Ao ser clicado, o arquivo do poema em questão é acessado através de um `fetch` e exibido na mesma página.
- Para dispositivos com dimensões de tela menores, é fornecido um menu hambúrguer que expande/recolhe o menu com a listagem de poemas. Esta é uma das partes deste projeto que mais precisam ser melhor trabalhadas.

### HTML e CSS

- Procurei organizar as tags de maneira simples, dispondo os elementos com o apoio de `flexbox` e utilizando nomes de classes inspiradas no padrão `BEM`.
