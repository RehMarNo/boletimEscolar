
const urlAluno = "http://localhost:3000/Alunos"

class Aluno {

    constructor(id, nome, idade, genero, dataNasc, fone, serie, turma){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
        this.dataNasc = dataNasc;
        this.fone = fone;
        this.serie = serie;
        this.turma = turma;
    }

    salvar() {
        console.log(this)
        fetch(urlAluno, {
            method: "POST",
            body: JSON.stringify(this),
            headers: {'Content-Type': 'application/json'}
        })
        .catch(erro => console.log(erro))
    }
}