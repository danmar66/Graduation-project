const express = require("express");
const TagTypeController = require("../controllers/TagTypeController");

const tagTypeRouter = new express.Router();

tagTypeRouter.post("/tag_type/create", TagTypeController.create);
tagTypeRouter.put("/tag_type/edit/:id", TagTypeController.update);
tagTypeRouter.delete("/tag_type/delete/:id", TagTypeController.delete);
tagTypeRouter.get("/tag_type", TagTypeController.getAll);
tagTypeRouter.get("/tag_type/:id", TagTypeController.getOne);

module.exports = tagTypeRouter;
