const express = require("express");
const TagController = require("../controllers/TagController");

const tagRouter = new express.Router();

tagRouter.post("/tag/create", TagController.create);
tagRouter.put("/tag/edit/:id", TagController.update);
tagRouter.delete("/tag/delete/:id", TagController.delete);
tagRouter.get("/tag", TagController.getAll);
tagRouter.get("/tag/:id", TagController.getOne);

module.exports = tagRouter;
