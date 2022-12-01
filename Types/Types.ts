// tipos por Inferência

//string
let nome = 'Iago'
console.log('nome: ' + nome)
// nome = 28

//numbers
//não faz diferenciação de ponto flutuante pra inteiro
let idade = 27
// idade ='Iago'
idade = 27.5
console.log('idade: ' + idade)

//boolean
let bool = false
// bool = 1
console.log('bool: ' + bool)

//tipos explícitos

let minhaIdade: number = 22
console.log(typeof minhaIdade)

//array
let array: string[] = ['a', 'b', 'c']
console.log(array[0])
console.log(typeof array)

//tuplas
let endereco: [string, number] = ['Rua A', 245]
console.log(endereco)

//enums
enum Cor {
    Vermelha,
    Verde,
    Azul
}

let corVermelha: Cor = Cor.Vermelha
console.log(corVermelha)
console.log(typeof corVermelha)

//any
let car: any = 'BMW'
console.log(car)
car = { brand: 'BMW', year: 2019 }
console.log(car)

//função
function returnName(): string {
    return nome
}

console.log(returnName())

function digaOi(): void {
    console.log('Oi')
}

digaOi()

function multiplicar(num1: number, num2: number): number {
    return num1 * num2
}

console.log(multiplicar(5.5, 8))

//tipo função

let calculo: (num1: number, num2: number) => number
calculo = multiplicar
console.log(calculo(4, 9))

//objetos
let usuario: { name: string, age: number } = {
    name: 'Iago',
    age: 22
}

console.log(usuario)

//desafio

type Funcionario = {
    nomes: string[],
    baterPonto: (hora: number) => string
}

let funcionario: Funcionario

function baterPonto(hora: number): string {
    if (hora <= 8) {
        return 'Ponto normal'
    } else return 'Fora do horário'
}

funcionario = {
    nomes: ['Iago', 'Rafaela'],
    baterPonto
}

console.log(funcionario.nomes)
console.log(baterPonto(8))
console.log(baterPonto(9))

//Union Types
let nota: number | string

nota = '10'
nota = 10

console.log(`Minha nota é ${nota}`)

//Never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Coca cola',
    preco: 10,
    validarProduto(){
        if(!this.nome || this.nome.trim().length === 0) {
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0){
            falha('Preço inválido')
        }
    }
}

produto.validarProduto()

//desafio
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3986,
    depositar(valor: number) {
        this.saldo += valor
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Iago Luiz',
    contaBancaria: contaBancaria,
    contatos: ['35765890', '98721132']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)