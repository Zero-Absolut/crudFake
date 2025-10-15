# CRUD Fake com Node.js e Express

## Sobre este projeto

Este projeto foi criado como um exercício didático para aprender e praticar a estruturação de uma API RESTful utilizando Node.js e Express. O foco principal está na implementação correta de rotas, controllers, middlewares e no fluxo básico de uma aplicação backend.

Durante o desenvolvimento, optei por não utilizar banco de dados real nem implementar validações rigorosas, sanitização ou autenticação. Isso foi uma escolha consciente para manter o projeto simples e permitir um aprendizado mais direto sobre o funcionamento das rotas e o fluxo das requisições e respostas.

O objetivo é demonstrar compreensão dos conceitos fundamentais do backend, mostrando como conectar as diferentes camadas da aplicação, como receber parâmetros, processar dados e enviar respostas apropriadas.

---

## Arquitetura e abordagem

- Os dados são mantidos em um array na memória para simular um "banco de dados fake".  
- As rotas foram organizadas em um módulo separado, seguindo a prática de modularização.  
- Middlewares foram implementados para validar os parâmetros básicos das requisições (como existência de nomes e IDs).  
- Os controllers orquestram as chamadas aos métodos que manipulam os dados, mantendo a separação de responsabilidades.  
- A comunicação entre as camadas foi pensada para facilitar a manutenção e a escalabilidade futura.  

---

## Motivações e próximos passos

Este projeto teve como motivação principal o aprendizado da estrutura básica de uma API em Node.js, focando no fluxo e na organização do código, sem se preocupar inicialmente com detalhes de segurança e tratamento avançado de dados.

Reconheço a importância de implementar validações completas, sanitização, tratamento de erros e segurança em aplicações reais. Por isso, planejo evoluir para um CRUD real que contará com banco de dados, validações robustas e práticas recomendadas de segurança.

Este repositório serve como um registro do meu processo de aprendizado, demonstrando minha capacidade de estruturar um backend funcional e organizado.

---

## Considerações finais

Este CRUD fake representa uma etapa inicial na minha jornada de migração de PHP para Node.js, focando em consolidar os fundamentos essenciais para desenvolvimento backend moderno.  

Estou aberto a feedbacks e sugestões para melhorar tanto este projeto quanto os futuros.

---

## Autor

Mateus — https://www.linkedin.com/in/mateus-fbs

---

## Licença

MIT License
