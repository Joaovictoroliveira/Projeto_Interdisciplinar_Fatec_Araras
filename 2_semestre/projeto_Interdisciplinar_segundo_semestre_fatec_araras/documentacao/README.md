# Documentação do Projeto

## Introdução
Ter conhecimento sobre o nosso organismo e estar consciente sobre como o funcionamento do mesmo anda, é um dos segredos para manter uma vida saudável. Através dos anos, a medicina e a ciência vem estabelecendo métodos e padrões com o objetivo de medir as condições de saúde das pessoas, para que assim, elas tenham mais controle sobre seu corpo e possam viver com mais saúde e tranquilidade.

## Objetivo
Prover testes online sobre saúde para que as pessoas possam entender melhor como anda o funcionamento do seu corpo, e através dos resultados indicar especialistas para haver um direcionamento sobre como essas pessoas devem agir para melhorar sua saúde ou mantê-lá, além de algumas dicas simples sobre exercícios e alimentação que podem ser seguidas logo após a realização dos testes.

## Escopo
*	O site proverá testes como calculadora de índice de massa corporal, calculadora de índice de risco cardíaco, calculadora de peso ideal e calculadora de gasto de calorias por dia;
*	Para cada teste, haverá uma explicação sobre o seu funcionamento;
*	Através dos resultados, o usuário será redirecionado para os especialistas (médicos, nutricionistas, educadores físicos), para que possa iniciar seu acompanhamento;
* Dicas em formato de texto e vídeos sobre exercícios e alimentação feitos pelos especialistas também serão disponibilizados.

## Requisitos do sistema

### Requisitos funcionais
* Cadastro de usuário por meio de um formulário
* Realização de testes de saúde
* Geração dos resultados dos testes
* Especialistas postarem conteúdos relacionados aos testes e a saúde em geral

### Requisitos não-funcionais
* Usabilidade - facilidade de uso do sistema pelos usuários
* Manutenibilidade - facilidade em relação a correção de bugs e da melhoria das funcionalidades
* Confiabilidade - probabilidade de não ocorrer um erro no sistema em um determinado período de tempo
* Desempenho - resposta de tempo após a execução de uma determinada funcionalidade
* Portabilidade - facilidade de transferência do sistema de um software computacional para outro
* Segurança - acessos não autorizados não serão permitidos

## Interação entre usuário e sistema
Para acessar as funcionalidades do sistema, o usuário primeiro terá que realizar um cadastro e escolher o tipo de perfil ao qual ele se
encaixa, um usuário comum(que deseja realizar os testes) ou voluntário(especialista). A partir disso, ele terá acesso a sua respectiva área, podendo
no caso de um usuário comum, realizar os testes e ter acesso as informações referentes dos mesmos(funcionamento, resultado, dicas etc) e no caso dos
voluntários acrescentar conteúdo relevante ao sistema ou prover assistência ao usuário comum.
<img src="https://github.com/Joaovictoroliveira/projeto_integrador_segundo_semestre_fatec_araras/blob/main/diagramas/diagrama_de_casos_de_uso.png" alt="Diagrama de casos de uso"/>

## Telas
### Cadastro
<img src="https://github.com/Joaovictoroliveira/projeto_integrador_segundo_semestre_fatec_araras/blob/main/Telas/Tela%20de%20Cadastro.jpg" alt="Tela de cadastro"/>

### Cálculo IMC
<img src="https://github.com/Joaovictoroliveira/projeto_integrador_segundo_semestre_fatec_araras/blob/main/Telas/Tela%20da%20Calculadora.jpg" alt="Calculo de IMC"/>

### Guia de referência e dicas
<img src="https://github.com/Joaovictoroliveira/projeto_integrador_segundo_semestre_fatec_araras/blob/main/Telas/Tela%20de%20Guia.jpg" alt="Guia de referência"/>

## Testes
O sistema será sujeitado a testes de performance, segurança e integração. Os testes serão realizados tanto de forma manual como automatizada.

### Performance
Irá medir o tempo de resposta para obtenção, atualização, inserção de dados e para execução de funcionalidades do sistema.
* Realiza as operações do sistema com um ou mais usuários simultaneamente.
* Verifica as operações do sistema em condições distintas de rede, hardware e software.

### Segurança
Irá conferir se as restrições especificadas a cada tipo de usuário estão sendo cumpridas de forma devida.
* Identifica os usuários e suas permissões
* Verifica se as funções que usuário tem acesso funcionam de forma correta.
* Verifica o bloqueio da operação e a emissão de mensagem de aviso caso o usuário tente efetuar uma função com o qual ele não tenha permissão.

### Integração
Irá verificar a integração entre componentes do sistema.
* Verifica como um componente se porta agindo individualmente, e seu comportamento quando ele se comunica com outro componente.

### Tecnologias Utilizadas
Backend: Ruby on Rails
Frontend: HTML, CSS, JS e Bootstrap
Banco de dados: Postgresql
Versionamento: Git

### Sistema Desenvolvido
<a href="http://projeto-inter-2-grupo-3.herokuapp.com/">Sistema hospedado</a>
<a href="https://github.com/MateusVS/PI-2-Fatec-Araras">Repositório do Sistema</a>

## Referências
* Teste e Calculadoras. https://www.tuasaude.com/testes-e-calculadoras/
* Testes online. https://www.boasaude.com.br/calculadora/
* Diferença entre fases de teste, tipos de teste e formas de execução. https://www.zup.com.br/blog/fases-de-teste-tipos-de-teste
* Teste de Software: Teste Funcional e demais tipos de teste. https://www.testar.me/teste-de-software
* Requisitos funcionais e não funcionais: o que são?. https://mestresdaweb.com.br/fabrica-de-software/requisitos-funcionais-e-nao-funcionais-o-que-sao/
