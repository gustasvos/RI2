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


let telefone = new TelefoneCelular('12', '999999999')
let endereco = new Endereco('SP', 'São José dos Campos', 'Rua 10', '54')
let cliente = new Cliente('Gustavo', telefone, 'gustavo@email.com', endereco)

console.log(cliente.getInfo())
console.log(telefone.getTelefone())
console.log(endereco.getEndereco())