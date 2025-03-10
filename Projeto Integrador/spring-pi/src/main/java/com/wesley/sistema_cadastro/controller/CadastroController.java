package com.wesley.sistema_cadastro.controller;

import com.wesley.sistema_cadastro.model.*;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/cadastros")
public class CadastroController {

    private List<PessoaFisica> pessoasFisicas = new ArrayList<>();
    private List<PessoaJuridica> pessoasJuridicas = new ArrayList<>();
    private List<Professor> professores = new ArrayList<>();
    private List<Fornecedor> fornecedores = new ArrayList<>();
    private List<Aluno> alunos = new ArrayList<>();

    // Cadastro de Pessoa Física
    @PostMapping("/pessoa-fisica")
    public String cadastrarPessoaFisica(@RequestBody PessoaFisica pessoaFisica) {
        pessoasFisicas.add(pessoaFisica);
        return "Pessoa física cadastrada com sucesso!";
    }

    // Cadastro de Pessoa Jurídica
    @PostMapping("/pessoa-juridica")
    public String cadastrarPessoaJuridica(@RequestBody PessoaJuridica pessoaJuridica) {
        pessoasJuridicas.add(pessoaJuridica);
        return "Pessoa jurídica cadastrada com sucesso!";
    }

    // Cadastro de Professor
    @PostMapping("/professor")
    public String cadastrarProfessor(@RequestBody Professor professor) {
        professores.add(professor);
        return "Professor cadastrado com sucesso!";
    }

    // Cadastro de Fornecedor
    @PostMapping("/fornecedor")
    public String cadastrarFornecedor(@RequestBody Fornecedor fornecedor) {
        fornecedores.add(fornecedor);
        return "Fornecedor cadastrado com sucesso!";
    }

    // Cadastro de Aluno
    @PostMapping("/aluno")
    public String cadastrarAluno(@RequestBody Aluno aluno) {
        alunos.add(aluno);
        return "Aluno cadastrado com sucesso!";
    }
}