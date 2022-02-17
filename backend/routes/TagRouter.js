const express = require("express");
const TagController = require("../controllers/TagController");
const authMiddleware = require("../middlewares/authMiddleware");
const {check} = require("express-validator");
const validatingMongoIdMiddleware = require('../middlewares/validatingMongoIdMiddleware')

const tagRouter = new express.Router();

tagRouter.post("/tag/create",
    authMiddleware,
    [
        check('title', 'Title must be filled').isEmpty(),
        check('tagTypeId', 'Parent type must be filled').isEmpty(),
        check('slug', 'Slug be filled').isEmpty(),
    ],
    TagController.create);

tagRouter.put("/tag/edit/:id",
    authMiddleware,
    validatingMongoIdMiddleware,
    [
        check('title', 'Title must be filled').isEmpty(),
        check('tagTypeId', 'Parent type must be filled').isEmpty(),
        check('slug', 'Slug be filled').isEmpty(),
    ],
    TagController.update);

tagRouter.delete("/tag/delete/:id",
    authMiddleware,
    validatingMongoIdMiddleware,
    TagController.delete);

tagRouter.get("/tag",
    TagController.getAll);

tagRouter.get("/tag/:id",
    validatingMongoIdMiddleware,
    TagController.getOne);

module.exports = tagRouter;
