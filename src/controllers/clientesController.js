const clientes = require("../models/clientes")

const getAllClientes = (req, res) => {
  console.log(req.url)
  cliente.find(function(err, clientes){
  if (err) {
      res.status(500).send({ message: err.message})
  }
   res.status(200).send(clientes)  
  })
};

const getByCompradores = (req, res) => {
  const clienteComprador = req.params.comprador
  clientes.find({ comprador }, function(err, clientes){
  if (err) {
      res.status(500).send({ message: err.message})
  }
  res.status(200).send(clientes)    
  })
};

const getByCpf = (req, res) => {
  const clienteCPF = req.params.cpf
  clientes.find({ cpf }, function(err, clientes){
  if (err) {
      res.status(500).send({ message: err.message})
  }
  res.status(200).send(clientes)    
  })
};

const postCliente = (req, res) => {
  console.log(req.body);
  let cliente = new clientes(req.body);
  cliente.save(function(err){
  if (err) {
      res.status(500).send({ message: err.message})
  }
      res.status(201).send(article.toJSON())
  })
};

module.exports = {
    getAllClientes,
    getByCompradores,
    getByCpf,
    postCliente
}
