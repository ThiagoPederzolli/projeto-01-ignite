<h1>Fundamentos do TypeScript</h1>
<p>O TypeScript nasceu como um superset, um conjunto ferramental em cima da linguagem JS. Para conseguir adicionar tipagem estática, em cima de algo que possui tipagem dinâmica.</p>
<p>O JS tem tipagem dinâmica, o que significa que podemos alterar o tipo do valor que armazenamos em uma variável:</p>
<pre>
let name = "Thiago";

name = 3;
</pre>
<p>No JavaScript, no código acima não possui nenhum erro, pois sua tipagem é dinâmica. Isso é bom porque traz flexibilidade e dinamismo para a aplicação, porém é ruim porque abre portas para muitos erros ao longo da aplicação.</p>
<p>O TypeScript nos ajuda no momento do desenvolvimento porque ele traz inteligência para o editor de código.</p>
<p>O TypeScript também tem um funcionamento interno, chamado inferência de tipos. Ele é capaz de inferir, através do entendimento do código, a tipagem necessária. Por exemplo, se armazenarmos em uma variável o retorno de uma função que executa um cálculo e retorna um número, o TypeScript sabe que o tipo da variável será number.</p>