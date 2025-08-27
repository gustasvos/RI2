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
}

