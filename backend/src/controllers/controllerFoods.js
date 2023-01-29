const { servicesFoods } = require('../services/servicesFoods');
const { httpstatuscode } = require('../utils/httpstatuscode');

const controllerFoods = {
    resgister: async (req, res, next) => {
    try {
      if (req.file) {
        const { nome, valor, categoria, ingredientes } = req.body;
        const image = req.file.filename;
        const newFood = { nome, valor, categoria, image, ingredientes };
        await servicesFoods.register(newFood);
        return res.status(httpstatuscode.OK).json({ message: "Comida Cadastrada com sucesso !!" });
      }else {
        next('NO_PHOTO')
      }
    } catch (err) {
      next(err);
    }
  },
};

module.exports = { controllerFoods }