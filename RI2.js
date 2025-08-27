function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome
    this.telefoneCelular = telefoneCelular
    this.email = email
    this.endereco = endereco

    // getters

    getNome = () => {
        return this.nome
    }

    getTelefoneCelular = () => {
        return this.telefoneCelular
    }

    getEmail = () => {
        return this.email
    }

    getEndereco = () => {
        return this.endereco
    }

    // setters

    setNome = (novoNome) => {
        return this.nome = novoNome
    }

    setTelefoneCelular = (novoTelefone) => {
        return this.telefoneCelular = novoTelefone
    }
    setEmail = (novoEmail) => {
        return this.email = novoEmail
    }
    setNome = (novoEndereco) => {
        return this.endereco = novoEndereco
    }

    // atributos em letra maiscula
    getNomeUpper = () => {
        return this.nome.toUpperCase()
    }
    getTelefoneCelularUpper = () => {
        return this.telefoneCelular.toUpperCase()
    }
    getEmailUpper = () => {
        return this.email.toUpperCase()
    }
    getEnderecoUpper = () => {
        return this.endereco.toUpperCase()
    }

    // atributos em letra minuscula
    getNomeLower = () => {
        return this.nome.toLowerCase()
    }
    getTelefoneCelularLower = () => {
        return this.telefoneCelular.toLowerCase()
    }
    getEmailLower = () => {
        return this.email.toLowerCase()
    }
    getEnderecoLower = () => {
        return this.endereco.toLowerCase()
    }
}

function TelefoneCelular(ddd, numero) {
    this.ddd = ddd
    this.numero = numero

    // getters
    getDDD = () => {
        return this.ddd
    }

    getNumero = () => {
        return this.numero
    }

    // setters
    setDDD = (novoDDD) => {
        return this.ddd = novoDDD
    }

    setNumero = (novoNumero) => {
        return this.numero = novoNumero
    }
}

function Endereco(estado, cidade, rua, numero) {
    this.estado = estado
    this.cidade = cidade
    this.rua = rua
    this.numero = numero

    // getters
    getEstado = () => {
        return this.estado
    }
    getCidade = () => {
        return this.cidade
    }
    getRua = () => {
        return this.rua
    }
    getNumero = () => {
        return this.numero
    }

    // setters
    setEstado = (novoEstado) => {
        return this.estado = novoEstado
    }

    setCidade = (novoCidade) => {
        return this.cidade = novoCidade
    }

    setRua = (novoRua) => {
        return this.rua = novoRua
    }

    setNumero = (novoNumero) => {
        return this.numero = novoNumero
    }

    // atributos em letra maiscula
    getEstadoUpper = () => {
        return this.estado.toUpperCase()
    }

    getCidadeUpper = () => {
        return this.cidade.toUpperCase()
    }

    getRuaUpper = () => {
        return this.rua.toUpperCase()
    }

    // atributos em letra minuscula
    getEstadoLower = () => {
        return this.estado.toLowerCase()
    }

    getCidadeLower = () => {
        return this.cidade.toLowerCase()
    }

    getRuaLower = () => {
        return this.rua.toLowerCase()
    }

}

