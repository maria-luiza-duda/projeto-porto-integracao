const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientesController.js");

router.get("/", controller.getAllClientes);
router.get("/compradores", controller.getByCompradores);
router.get("/:cpf", controller.getByCpf);
router.post("/", controller.postCliente);

module.exports = router;
