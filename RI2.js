function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome
    this.telefoneCelular = telefoneCelular
    this.email = email
    this.endereco = endereco

    // getters

    this.getNome = () => {
        return this.nome
    }

    this.getTelefoneCelular = () => {
        return this.telefoneCelular
    }

    this.getEmail = () => {
        return this.email
    }

    this.getEndereco = () => {
        return this.endereco
    }

    // setters

    this.setNome = (novoNome) => {
        return this.nome = novoNome
    }

    this.setTelefoneCelular = (novoTelefone) => {
        return this.telefoneCelular = novoTelefone
    }
    this.setEmail = (novoEmail) => {
        return this.email = novoEmail
    }
    this.setNome = (novoEndereco) => {
        return this.endereco = novoEndereco
    }

    // atributos em letra maiscula
    this.getNomeUpper = () => {
        return this.nome.toUpperCase()
    }
    this.getTelefoneCelularUpper = () => {
        return this.telefoneCelular.toUpperCase()
    }
    this.getEmailUpper = () => {
        return this.email.toUpperCase()
    }
    this.getEnderecoUpper = () => {
        return this.endereco.toUpperCase()
    }

    // atributos em letra minuscula
    this.getNomeLower = () => {
        return this.nome.toLowerCase()
    }
    this.getTelefoneCelularLower = () => {
        return this.telefoneCelular.toLowerCase()
    }
    this.getEmailLower = () => {
        return this.email.toLowerCase()
    }
    this.getEnderecoLower = () => {
        return this.endereco.toLowerCase()
    }

    // saída formatada
    this.getInfo = () => {
        return('-----------------\n'+
            'Informações do Cliente:\n'+
            this.nome +
            '\n-----------------')
        }
}

function TelefoneCelular(ddd, numero) {
    this.ddd = ddd
    this.numero = numero

    // getters
    this.getDDD = () => {
        return this.ddd
    }

    this.getNumero = () => {
        return this.numero
    }

    // setters
    this.setDDD = (novoDDD) => {
        return this.ddd = novoDDD
    }

    this.setNumero = (novoNumero) => {
        return this.numero = novoNumero
    }

    // saida formatada telefone
    this.getTelefone = () => {
        return('-----------------\n'+
            'Telefone:\n'+
            'DDD: '+ this.ddd +
            '\nNúmero: '+ this.numero + 
            '\n-----------------')
    }
}

function Endereco(estado, cidade, rua, numero) {
    this.estado = estado
    this.cidade = cidade
    this.rua = rua
    this.numero = numero

    // getters
    this.getEstado = () => {
        return this.estado
    }
    this.getCidade = () => {
        return this.cidade
    }
    this.getRua = () => {
        return this.rua
    }
    this.getNumero = () => {
        return this.numero
    }

    // setters
    this.setEstado = (novoEstado) => {
        return this.estado = novoEstado
    }

    this.setCidade = (novoCidade) => {
        return this.cidade = novoCidade
    }

    this.setRua = (novoRua) => {
        return this.rua = novoRua
    }

    this.setNumero = (novoNumero) => {
        return this.numero = novoNumero
    }

    // atributos em letra maiscula
    this.getEstadoUpper = () => {
        return this.estado.toUpperCase()
    }

    this.getCidadeUpper = () => {
        return this.cidade.toUpperCase()
    }

    this.getRuaUpper = () => {
        return this.rua.toUpperCase()
    }

    // atributos em letra minuscula
    this.getEstadoLower = () => {
        return this.estado.toLowerCase()
    }

    this.getCidadeLower = () => {
        return this.cidade.toLowerCase()
    }

    this.getRuaLower = () => {
        return this.rua.toLowerCase()
    }


    // saída formatada endereco
    this.getEndereco = () => {
        return ('-----------------\n'+
            'Endereço:\n'+
            'Rua: ' + this.rua +
            '\nNúmero: ' + this.numero +
            '\nCidade: ' + this.cidade +
            '\nEstado: ' + this.estado +
            '\n-----------------')
    }

}


let telefone1 = new TelefoneCelular('11', '999999999')
let telefone2 = new TelefoneCelular('12', '888888888')
let telefone3 = new TelefoneCelular('13', '777777777')
let telefone4 = new TelefoneCelular('14', '666666666')

let endereco1 = new Endereco('SP', 'São Paulo', 'Rua 10', '54')
let endereco2 = new Endereco('SP', 'São José dos Campos', 'Rua 11', '821')
let endereco3 = new Endereco('SP', 'Santos', 'Rua 9', '86')
let endereco4 = new Endereco('SP', 'Marilia', 'Rua 2', '543')

let cliente1 = new Cliente('Gustavo', telefone1, 'gustavo@email.com', endereco1)
let cliente2 = new Cliente('Ana', telefone2, 'ana@email.com', endereco2)
let cliente3 = new Cliente('Gabriel', telefone3, 'gabriel@email.com', endereco3)
let cliente4 = new Cliente('João', telefone4, 'joao@email.com', endereco4)

// exemplos de saída das descrições de cada objeto e seus atributos
console.log(cliente1.getInfo())
console.log(telefone1.getTelefone())
console.log(endereco1.getEndereco())


// ordenar clientes por nome
const ordena = (c) => {
    c.sort((a, b) => {
        if (a.getNomeUpper() < b.getNomeUpper()) return -1
        if (a.getNomeUpper() < b.getNomeUpper()) return 1
        return 0
    })
    return c.map(cliente => cliente.getNome())
}


let clientes = [cliente1, cliente2, cliente3, cliente4]
console.log(ordena(clientes))
