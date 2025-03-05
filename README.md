### Anotações

---

### Next:

- No arquivo `next.confi.ts` tem uma configuração de permissão de domínio de imagens que basicamente diz ao Next um domínio que tem imagens hospedadas nele e que o Next pode confiar e exibir no projeto

### Prisma:

- Há uma convenção para o formato dos nomes das migrations ao rodar o `npx prisma migrate dev` que diz que precisa ser utilizado o snakeCase (ex.: add_database_tables)
- No arquivo `.prisma/schema.prisma` tem algumas dicas sobre relações
- Se rodar `npx prisma migrate dev` as alterações já são enviadas ao banco sem precisar fazer commit
- No arquivo `.prisma/schema.prisma` tem uma dica sobre onDelete: cascade (que serve basicamente para remover dados referentes a coluna referenciada caso ela seja deletada) <b style="color: yellow;">INTERESSANTE!</b>
- O arquivo `.prisma/seed.ts` serve para rodar um script que preencha as tabelas do banco com os dados que estão no arquivo
- O arquivo `src/lib/prisma.ts` tem um código que serve para que o prisma verifique se o projeto está apontado para produção. Se estiver, vai fazer uma conexão com o banco de dados sempre que tiver alterações. Se não, se o projeto estiver apontado pra desenvolvimento, vai usar cache para que o banco não seja requisitado várias vezes

### ShadCN:

#### Biblioteca de componentes bem interessante. Ela é integrada com o TailwindCss é diferente das outras bibliotecas de componentes, quando você instala não vem nenhum componente nativo. Você precisa instalar cada componente que for usar, deixando assim o projeto mais leve e instalando de fato os únicos componentes que forem ser utilizados no projeto.

- No arquivo `src/app/[slug]/menu/components/categories.tsx` é usado um componente de scroll parecido com o ScrollView/FlatList do react native <b style="color: red;">MUITO INTERESSANTE!</b>
- No arquivo `src/app/[slug]/menu/components/cart-sheet.tsx` é usado um componente de sheet que funciona como um modal que é exibido na lateral da página toda com um efeito ao ser aberto e que pode ser fechado teclando ESC <b style="color: red;">MUITO INTERESSANTE!</b>

### Eslint:

- Adicionado o plugin `eslint-plugin-simple-import-sort` que faz com que o eslint ordene as importações de um projeto (precisa configurar o eslint.config.mjs e o .vscode - caso queira que o código seja formatado sempre que for salvado) <b style="color: yellow;">INTERESSANTE!</b>

### Genérico:

- No arquivo `./src/app/[slug]/page.tsx` tem um exemplo de como coletar parâmetro pela URL no formato mais atualizado do NextJS <b style="color: yellow;">INTERESSANTE!</b>
- No arquivo `src/app/[slug]/components/consumption-method-option.tsx` tem uma dica bacana sobre o uso de um <Link/> dentro de um <Button/>
- No arquivo `src/app/[slug]/menu/components/header.tsx` tem uma dica sobre como usar o Pick do typescript <b style="color: yellow;">INTERESSANTE!</b>
- No arquivo `src/app/[slug]/components/consumption-method-option.tsx` tem uma dica sobre como adicionar uma imagem sem que ela perca muita resolução
- No arquivo `src/app/[slug]/menu/components/products.tsx` tem uma dica sobre como formatar valores monetários com javascript sem precisar instalar bibliotecas extras <b style="color: yellow;">INTERESSANTE!</b>
- No arquivo `src/app/globals.css` tem a sintaxe @apply que serve para aplicar o css em toda tag que está sendo referenciada no @apply <b style="color: yellow;">INTERESSANTE!</b>
