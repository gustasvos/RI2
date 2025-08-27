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

    setTelefoneCelular = (novoDDD, novoTelefone) => {
       return this.telefoneCelular = new TelefoneCelular(novoDDD, novoTelefone)
    }
    setEmail = (novoEmail) => {
       return this.email = novoEmail
    }
    setNome = (novoEndereco) => {
       return this.nome = novoNome
    }
}

function TelefoneCelular(ddd, numero) {
    this.ddd = ddd
    this.numero = numero
}

function Endereco(estado, cidade, rua, numero) {
    this.estado = estado
    this.cidade = cidade
    this.rua = rua
    this.numero = numero
}

