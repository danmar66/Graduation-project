const express = require("express");
const TagTypeController = require("../controllers/TagTypeController");
const authMiddleware = require("../middlewares/authMiddleware");
const {check} = require("express-validator");
const validatingMongoIdMiddleware = require('../middlewares/validatingMongoIdMiddleware')

const tagTypeRouter = new express.Router();

tagTypeRouter.post("/tag_type/create",
    authMiddleware,
    [
        check('title', 'Title must be filled').notEmpty(),
        check('slug', 'Slug be filled').notEmpty(),
    ],
    TagTypeController.create);

tagTypeRouter.put("/tag_type/edit/:id",
    // authMiddleware,
    validatingMongoIdMiddleware,
    [
        check('title', 'Title must be filled').notEmpty(),
        check('slug', 'Slug be filled').notEmpty(),
    ],
    TagTypeController.update);

tagTypeRouter.delete("/tag_type/delete/:id",
    // authMiddleware,
    validatingMongoIdMiddleware,
    TagTypeController.delete);

tagTypeRouter.get("/tag_type",
    TagTypeController.getAll);

tagTypeRouter.get("/tag_type/all",
    TagTypeController.getAllWithoutPagination);

tagTypeRouter.get("/tag_type/:id",
    validatingMongoIdMiddleware,
    TagTypeController.getOne);

module.exports = tagTypeRouter;
