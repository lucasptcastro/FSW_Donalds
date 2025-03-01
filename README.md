### Anotações

---

### Prisma:

- Há uma convenção para o formato dos nomes das migrations ao rodar o `npx prisma migrate dev` que diz que precisa ser utilizado o snakeCase (ex.: add_database_tables)
- No arquivo `.prisma/schema.prisma` tem algumas dicas sobre relações
- Se rodar `npx prisma migrate dev` as alterações já são enviadas ao banco sem precisar fazer commit
- No arquivo `.prisma/schema.prisma` tem uma dica sobre onDelete: cascade (que serve basicamente para remover dados referentes a coluna referenciada caso ela seja deletada) <b style="color: red;">INTERESSANTE!</b>
- O arquivo `.prisma/seed.ts` serve para rodar um script que preencha as tabelas do banco com os dados que estão no arquivo

### ShadCN:

#### Biblioteca de componentes bem interessante. Ela é integrada com o TailwindCss é diferente das outras bibliotecas de componentes, quando você instala não vem nenhum componente nativo. Você precisa instalar cada componente que for usar, deixando assim o projeto mais leve e instalando de fato os únicos componentes que forem ser utilizados no projeto.

### Eslint:

- Adicionado o plugin `eslint-plugin-simple-import-sort` que faz com que o eslint ordene as importações de um projeto (precisa configurar o eslint.config.mjs e o .vscode - caso queira que o código seja formatado sempre que for salvado) <b style="color: red;">INTERESSANTE!</b>
