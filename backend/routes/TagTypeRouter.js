const express = require("express");
const TagTypeController = require("../controllers/TagTypeController");
const authMiddleware = require("../middlewares/authMiddleware");
const {check} = require("express-validator");


const tagTypeRouter = new express.Router();

tagTypeRouter.post("/tag_type/create", [
    check('title', 'Title must be filled').isEmpty(),
    check('slug', 'Slug be filled').isEmpty(),
], authMiddleware, TagTypeController.create);
tagTypeRouter.put("/tag_type/edit/:id", [
    check('title', 'Title must be filled').isEmpty(),
    check('slug', 'Slug be filled').isEmpty(),
], authMiddleware, TagTypeController.update);
tagTypeRouter.delete("/tag_type/delete/:id", authMiddleware, TagTypeController.delete);
tagTypeRouter.get("/tag_type", TagTypeController.getAll);
tagTypeRouter.get("/tag_type/:id", TagTypeController.getOne);

module.exports = tagTypeRouter;
