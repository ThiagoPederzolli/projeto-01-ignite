<h1>Iterando no JSX</h1>
<p>Uma coisa que devemos ter cuidado, é evitar que o Back-end mande conteúdo HTML. Porque se o Back-end está retornando HTML e você vai exibir esse HTMl em tela, fica muito mais fácil você deixar seu site aberto para vulnerabilidades, porque se de alguma forma um usuário mal-intencionado resolve jogar uma tag script dentro do conteúdo e você mostra isso em tela, você está executando um script que foi outro usuário que criou e que pode fazer coisas maliciosas com quem está acessando o site</p>
<p>Então o correto é recebermos o conteúdo bruto e usarmos estruturas de formatação, como markdown, que é uma das mais famosas.</p>
<p>Outra coisa importante é o método que usamos para fazer essas iterações. Não é possível fazer através do método <b>forEach</b> pois o mesmo não possui um retorno, é por isso que as iterações se dão utilizando o método <b>map</b>.

<h1>Estados useState</h1>
<p>Como é muito não performático para o React monitorar todas variáveis existentes na aplicação para quando seu valor for alterado, atualizar algum elemento, temos o <b>useState</b> que é um estado local que é monitorado pelo React.</p>


<h1>Programação Imperativa x Declarativa</h1>
<p>Dentro do React, procuramos evitar o uso da programação Imperativa, para usar a Declarativa.</p>
<h2>Imperativa</h2>
<p>Dizemos para nosso software O que deve ser feito. Por exemplo, quando vamos fazer a receia de bolo:</p>
<ol>
  <li>Preparar a massa</li>
  <li>Pré aquecer o forno</li>
  <li>Abrir o forno</li>
  <li>Colocar a massa no forno</li>
</ol>
<p>Ou seja, precisamos dizer o passo a passo do que deve ser feito. E é o tipo de programação mais comum.</p>
<h2>Declarativa</h2>
<p>Dizemos para o nosso software o resultado esperado. Quais as condições para termos os resultados finais. Seguindo no exemplo da receita de bolo, é como se ao invés de falarmos o passo a passo, falasse condições para o bolo ficar pronto.</p>
<ul>
  <li>O forno precisa estar a 180º</li>
  <li>Quando o forno estiver quente, pode ser colocada a massa</li>
  <li>Quando a massa estiver pronta, pode ser retirada do forno</li>
</ul>

<h1>Entendendo a Key</h1>
<p>O que se faz necessário no React é que, quando a gente faz uso de uma lista, cada elemento tenha proriedade chamada <b>Key</b> que aceita qualquer valor(number, string...), porém esse valor necessariamente tem que ser um valor único, ela serve como um identificador de cada elemento iterado.</p>
<h2>Por que única?</h2>
<p>Existem 3 momemtnos em que um componente é renderizado novamente no react:</p>
<ul>
  <li>Quando algum estado altera.</li>
  <li>Quando alguma propriedade é alterada.</li>
  <li>Quando o componente pai renderiza novamente.</li>
</ul>
<p>Esse fluxo de renderização pode ser lento, principalmente em um cenário que podemos estar lidando com listas com muitos elementos.</p>
<p>É por isso que adicionamos a Key, estamos falando que tinhamos aqueles elementos. E ai se em algum momento o React precisar renderizar o elemento novamente, ele não irá renderizar todos os elementos da lista de novo, ele irá comparar a key dos elementos que já estavam em tela anteriormente, com os possíveis novos itens da lista que podem ter surgido.</p>
<h2>Por que não usar o index do array?</h2>
<p>O index de um array também é único. Então imagine que temos um array com 5 itens e por algum motivo qualquer, alguns desses itens são trocados de posição. Por exemplo o item no index 4 é trocado com o do index 2.</p>
<p>Isso acarreta um problema, porque o index não muda de posição, então o React ao analisar novamente o array, fica confuso, pois o conteúdo do item index 2, não é mais o mesmo, já que o index não mudou de posição e, com isso, o React acaba recriando tudo, porque ele entende que houve mudança nos conteúdos.</p>

<h1>Imutabilidade</h1>
<p>As variáveis não sofrem mutação. Nós nunca alteramos uma variável na memória da nossa aplicação, nós criamos um novo espaço na memória.</p>
<p>Isso quer dizer, por exemplo, que quando modificamos o valor de um state, não estamos atualizando o valor que estava armazenado naquele state, na verdade, estamos substituindo aquele valor por um novo.</p>
<p>A imutabilidade nos permite ser mais performático, principalmente dentro do React que precisa, muitas vezes, ficar comparando variáveis para ver se elas mudaram de valor ou não. Criar um novo valor na memória é mais rápido para o React fazer a comparação de se aquilo mudou ou não do que alterar um valor que já está na memória.</p>

<h1>Entendendo closures no React</h1>
<p>É necessário entender a questão de contextos de criação dos componentes. Peguemos o exemplo de um contador que tem um state inicial de 0. Se dentro de uma função chamarmos mais de uma vez o método que atualiza o valor desse state, passando como argumento o valor do state +1, mesmo que tenhamos essa chamada do método mais de uma vez, a atualização do componente será que o state terá valor 1.</p>
<p>Isso ocorre porque no contexto em que a função está sendo executada, o state inicial vai ter valor 0 em todas as chamadas do método de atualização, não é como se na primeira chamada atualizasse já o valor do state. É só no fim da execução total da função que o React irá gerar um novo contexto daquele componente onde o valor do state do contador será 1.</p>
<p>Para contornar esse problema, caso você precise do valor atualizado antes do fim da execução da função, pode se tomar algumas medidas:</p>
<p>- Armazenar o resultado dessa atualização de state em uma variável dentro do escopo da função que está sendo executada.</p>
<p>- O React permite que seja passada uma função como argumento para o método de atualização de estado. Podendo acessar o valor mais atual do state daquele método:</p>
<pre>
function Counter() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount((state) => {
      return state + 1
    })
    setCount((state) => {
      return state + 1
    })
  }
}
</pre>
<p>E com o modelo acima, ai sim também teríamos em cada chamada do setCount acesso ao valor mais atual do state e o contador, assim, seria aumentado de 2 em 2.</p>
<p>🚨Sempre que você for atualizar uma informação e essa informação depende do valor que ela tinha anteriormente, ou seja, depende dela mesma, é sempre legal fazer a atualização do state usando o padrão de funções(exemplo de código acima).</p>