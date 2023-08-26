// array de objetos com o nome e a nota dos alunos

const alunos = [
    {
        nome: 'Alan',
        nota: 6
    },
    {
        nome: 'Luísa',
        nota: 7
    },
    {
        nome: 'Marina',
        nota: 5
    },
    {
        nome: 'Juca',
        nota: 6
    },
    {
        nome: 'Rodrigo',
        nota: 3
    },
    {
        nome: 'Julia',
        nota: 8
    },
    {
        nome: 'Roberta',
        nota: 6
    }
];

// console.log(alunos);

function exibeAprovados(alunos) {
    
    const filtrarAprovados = aluno => aluno.nota >= 6;

    alunosAprovados = alunos.filter(filtrarAprovados);

    return alunosAprovados;
}

console.log(exibeAprovados(alunos));