## Entendendo Promises de uma vez por todas

Ministrado por Lucas Santos

Utilizando a ferramenta `promisees` conseguimos ver o fluxo da promise.

## Promises

As promises representam processos que podem ser encadeados como funções de retorno de chamada.

São fluxos assíncronos, ou seja, em se tratando de requisições, não existe sincronismo, podemos enviar diversas requisições em paralelo, onde cada resposta será retornada quando estiver pronta.

Em resumo, uma promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona.

Há uma diferença entre lançar um erro e rejeitar uma promise.
Lançar erro para a execução do código, é o equivalente a dar um `return` em uma função.
Rejeitar uma promise fará com que o código continue sendo executado posteriormente.

- Usados em:
  Request http,
  Leitura de arquivos,
  Acesso a serviço externo
  I/O;

- Vantagem:
  Ajuda a diminuir o tempo de execução e processamento de dados.

- Conteúdo prático:

  Criamos uma pasta chamada de `assets` e adicionamos alguns arquivos de um poema.

  Para fazer a leitura dos arquivos usando o nodejs, basta usar o diretório até a pasta promises.

  No console, tenho o /Desktop/Home/DIO/promises
  para rodar o arquivo, informo a partir da pasta source ou `src`.

  Ex: `node src/3-promises/1.promisify.js`

## Encadeamento:

Duas ou mais operações assíncronas consecutivas é uma necessidade recorrente.
Cada operação subsequente começa quando a operação anterior é bem sucedida, com o resultado do passo anterior, fazemos isso criando uma cadeia de promises.

Usamos os argumentos para `.then` e `catch`.

## Encadeando depois de um catch:

É possível encadear depois de uma falha. Usamos para realizar novas ações mesmo depois de uma falha no encadeamento.

## Mais conteúdo:

`Promisify` é uma lib do módulo de utilitários do node.js, serve para converter um método que retorna respostas usando uma função callback para retornar respostas em um objeto de promessa.

Obs: A maioria das libs externas não funcionam com o promisify.

Podemos envolver uma função problemática (callback) em uma promise.
Ex:

```javascript
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

`Lock` sõa um conceito necessário em um sistema multiencadeado. Ocorre quando temos o retorno de promise em outra promise, podemos aguardar o bloqueio antes de fazer algo, controlando manualmente nosso fluxo assíncrono.

## Composição

`Promise.resolve()` e `Promise.reject()` são atalhos para se criar manualmente uma promise que já foi resolvida ou rejeitada.

O `promise.all(iterable)` retorna uma única Promise que resolve quando todas as promises no argumento iterável forem resolvidas.

Se qualquer uma das promises passadas for rejeitada, Promise.all assincronamente é rejeitada com o valor da promise rejeitada, independentemente se outras promises foram resolvidas.

O `Promise.race(iterable)` retorna uma promise que resolve ou rejeita (o que acontecer primeiro) assim que uma das promises no iterável resolver ou rejeitar.

## Facilitando:

A modelagem de código de uma corrente de promise segue a maneira de como o código síncrono funciona, pois caso haja uma exceção, busca-se por `catch handlers` no lugar.

Essa simetria com código assíncrono resulta no syntactic sugar `async/await`.

## Para saber mais:

O link com o conteúdo ministrado está em um artigo do medium, porém o acesso está limitado aos membros, então outra forma de acessar o conteúdo completo é pelo link do site [dev](https://dev.to/_staticvoid/entendendo-promises-de-uma-vez-por-todas-44i7) e no [github](https://github.com/khaosdoctor/promises-talk)
