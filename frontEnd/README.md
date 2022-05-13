## state 
-> e uma memória temporária que so esta disponivel enquanto a aplicação esta rodando.

const [valor, setValor] = useState(0)  -> O starte tem 3 informaçoes 
1-) o valor do elemnto 
2-) uma função na qual podemos setar novos valores para o elemnto 
3-) Dentro do useState(valorInicial) fica o valor inicial que o valor tera 


## Maneiras de estilizar um elemento em react 
1-) Inline -> coloca o estilo no propio elemento 
    -  Dificil manutenção 
2-) Classe -> Usando um arquivo .css 
    - Dificil manutenção 
    - Pouca flexibilidade
    - Conflitos com nomes 

3-) Css in JS -> npm -save styled-componentes -> è uma abordagem na qual o js cria as classes para nós 
    -Boa performançe 
    - Estilos Dinamicos 
    - Manutenção relativamente facil 
    - injeção automatica de prefixos 

## Stateful vs Stateless 
Stateful -> Usa estados 
    - Possui gerenciamento de estados no componente 
    - Construido usando classes em js 
    - Possue um ciclo de vida 
        - inicializaçao
        - Montagem
        - Update 
        - Desmontagem 
Stateles -> não usa estados 
        - Construido usando funções 
        - Não usa o state 

## Formulário em react 
- em html o input, textArea,select tem um estado interno 
- Esse estado pode ser controlado por `state é setState`
- Porém o dom eo react possuem seu própio estado 
    - Existe 2 forma de trabalhar com esses estados 
        1-) O Input ou text area aceitam um atribute value
            - O valor pode ser mudado usando o atributo onChange 
            



