const express = require("express");
const TagController = require("../controllers/TagController");
const authMiddleware = require("../middlewares/authMiddleware");
const {check} = require("express-validator");

const tagRouter = new express.Router();

tagRouter.post("/tag/create", [
    check('title', 'Title must be filled').isEmpty(),
    check('tagTypeId', 'Parent type must be filled').isEmpty(),
    check('slug', 'Slug be filled').isEmpty(),
], authMiddleware, TagController.create);
tagRouter.put("/tag/edit/:id", [
    check('title', 'Title must be filled').isEmpty(),
    check('tagTypeId', 'Parent type must be filled').isEmpty(),
    check('slug', 'Slug be filled').isEmpty(),
], authMiddleware, TagController.update);
tagRouter.delete("/tag/delete/:id", authMiddleware, TagController.delete);
tagRouter.get("/tag", TagController.getAll);
tagRouter.get("/tag/:id", TagController.getOne);

module.exports = tagRouter;
