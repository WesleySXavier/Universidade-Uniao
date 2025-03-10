# Universidade-Uniao
  ## Atores:
   
  Administrador: Resposável por realiazar os cadastros no sistema.
 
  Sistema: Responsável por processar e validar os dados.

##  Casos de uso:

  1.Cadastro de Pessoa Física 
  
  2.Cadastro de Pesssoa jurídica
  
  3.Cadastro de Professores
  
  4.Cadastro de Fornecedores
  
  5.Cadastro de alunos 
  
  ![minha imagem](https://github.com/WesleySXavier/Universidade-Uniao/blob/9e3ede3601e74dad337b25eb546093fad568d42b/Diagrama%20de%20uso.png?raw=true)


 ## Descrição dos Cenários dos Casos de Uso 
  

### Caso de Uso 1: Cadastro de Pessoa Física 

 

#### Cenário Principal: 

O administrador acessa o sistema. 

O sistema exibe a tela de cadastro de pessoa física. 

O administrador insere os dados (nome, CPF, endereço). 

O sistema valida os dados. 

O sistema salva os dados e exibe uma mensagem de sucesso. 

 

#### Cenário Alternativo 1 (CPF inválido): 

O administrador insere um CPF inválido. 

O sistema exibe uma mensagem de erro: "CPF inválido." 

O administrador corrige o CPF e repete o processo. 

 

#### Cenário Alternativo 2 (Dados incompletos): 

O administrador deixa campos obrigatórios em branco. 

O sistema exibe uma mensagem de erro: "Preencha todos os campos obrigatórios." 

O administrador completa os dados e repete o processo. 

 

#### Pré-condição: O administrador deve estar logado no sistema. 
#### Pós-condição: A pessoa física é cadastrada no sistema. 

 

### Caso de Uso 2: Cadastro de Pessoa Jurídica 

 

#### Cenário Principal: 

O administrador acessa o sistema. 

O sistema exibe a tela de cadastro de pessoa jurídica. 

O administrador insere os dados (CNPJ, razão social, endereço). 

O sistema valida os dados. 

O sistema salva os dados e exibe uma mensagem de sucesso. 

 

#### Cenário Alternativo 1 (CNPJ já cadastrado): 

O administrador insere um CNPJ já cadastrado. 

O sistema exibe uma mensagem de erro: "CNPJ já cadastrado." 

O administrador corrige o CNPJ e repete o processo. 

 

#### Cenário Alternativo 2 (Razão social inválida): 

O administrador insere uma razão social com caracteres inválidos. 

O sistema exibe uma mensagem de erro: "Razão social inválida." 

O administrador corrige a razão social e repete o processo. 

 

#### Pré-condição: O administrador deve estar logado no sistema. 
#### Pós-condição: A pessoa jurídica é cadastrada no sistema. 

 

### Caso de Uso 3: Cadastro de Professores 

 

#### Cenário Principal: 

O administrador acessa o sistema. 

O sistema exibe a tela de cadastro de professores. 

O administrador insere os dados (nome, CPF, departamento, titulação). 

O sistema valida os dados. 

O sistema salva os dados e exibe uma mensagem de sucesso. 

#### Cenário Alternativo 1 (Departamento inexistente): 

O administrador insere um departamento que não existe. 

O sistema exibe uma mensagem de erro: "Departamento inexistente." 

O administrador seleciona um departamento válido e repete o processo. 

#### Cenário Alternativo 2 (Titulação inválida): 

O administrador insere uma titulação inválida. 

O sistema exibe uma mensagem de erro: "Titulação inválida." 

O administrador corrige a titulação e repete o processo. 

#### Pré-condição: O administrador deve estar logado no sistema. 
#### Pós-condição: O professor é cadastrado no sistema. 

 

### Caso de Uso 4: Cadastro de Fornecedores 

#### Cenário Principal: 

O administrador acessa o sistema. 

O sistema exibe a tela de cadastro de fornecedores. 

O administrador insere os dados (CNPJ, razão social, área de atuação). 

O sistema valida os dados. 

O sistema salva os dados e exibe uma mensagem de sucesso. 

#### Cenário Alternativo 1 (Área de atuação inválida): 

O administrador insere uma área de atuação inválida. 

O sistema exibe uma mensagem de erro: "Área de atuação inválida." 

O administrador corrige a área de atuação e repete o processo. 

#### Cenário Alternativo 2 (CNPJ inválido): 

O administrador insere um CNPJ inválido. 

O sistema exibe uma mensagem de erro: "CNPJ inválido." 

O administrador corrige o CNPJ e repete o processo. 

#### Pré-condição: O administrador deve estar logado no sistema. 
#### Pós-condição: O fornecedor é cadastrado no sistema. 

 

### Caso de Uso 5: Cadastro de Alunos 

#### Cenário Principal: 

O administrador acessa o sistema. 

O sistema exibe a tela de cadastro de alunos. 

O administrador insere os dados (nome, CPF, curso). 

O sistema valida os dados. 

O sistema salva os dados e exibe uma mensagem de sucesso. 

#### Cenário Alternativo 1 (Curso inexistente): 

O administrador insere um curso que não existe. 

O sistema exibe uma mensagem de erro: "Curso inexistente." 

O administrador seleciona um curso válido e repete o processo. 

#### Cenário Alternativo 2 (CPF já cadastrado): 

O administrador insere um CPF já cadastrado. 

O sistema exibe uma mensagem de erro: "CPF já cadastrado." 

O administrador corrige o CPF e repete o processo. 

#### Pré-condição: O administrador deve estar logado no sistema. 

#### Pós-condição: O aluno é cadastrado no sistema. 

   ![minha imagem](https://github.com/WesleySXavier/Universidade-Uniao/blob/9e3ede3601e74dad337b25eb546093fad568d42b/Diagrama%20de%20classe.png?raw=true)

#LINKS DA SEGUNDA ENTREGA

##   CODIGO HTML

### ![link](https://github.com/WesleySXavier/Universidade-Uniao/blob/main/Projeto%20Integrador/Pi.html) 

## CODIGO JAVASCRIPT

### ![link](https://github.com/WesleySXavier/Universidade-Uniao/blob/main/Projeto%20Integrador/script.js)

## CODIGO CSS

### ![link](https://github.com/WesleySXavier/Universidade-Uniao/blob/main/Projeto%20Integrador/styles.css)

## LINK PARA O CODIGOS DO BACKEND

### ![link]([https://github.com/WesleySXavier/Universidade-Uniao/tree/main/Projeto%20Integrador/spring-pi](https://github.com/WesleySXavier/Universidade-Uniao/tree/main/Projeto%20Integrador/spring-pi/src/main/java/com/wesley/sistema_cadastro)

   

 
  

  
  

