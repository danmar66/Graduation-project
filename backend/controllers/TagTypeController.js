const Product = require("../models/Product");
const Tag = require("../models/Tag");
const TagType = require("../models/TagType");
const {validationResult} = require("express-validator");

class TagTypeController {
    async create(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessage = errors.errors.map(({param, msg}) => ({[param]: msg}))
                return res.status(400).json({message: "Validation error", errorMessage});
            }

            const {title, slug} = req.body;
            const typeCandidate = await TagType.findOne({$or: [{title}, {slug}]});
            if (typeCandidate) {
                return res.status(400).json({message: `Tag type ${title} already exist`});
            }
            const type = await TagType.create({title, slug: title});
            return res.status(200).json({message: `Type added`, type});
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }
    }

    async update(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessage = errors.errors.map(({param, msg}) => ({[param]: msg}))
                return res.status(400).json({message: "Validation error", errorMessage});
            }

            const {id: _id} = rerq.body;
            const {title, slug} = req.body;
            const isUnique = await TagType.find({$and: [{_id: {$ne: _id}}, {title, slug}]});
            if (isUnique.length) {
                return response.status(400).json({message: `Type ${title} already created`});
            }
            const updatedType = await TagType.findOneAndUpdate({_id}, {title, slug}, {new: true});
            return res.json({message: `Type updated`, updatedType});
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }
    }

    async delete(req, res) {
        try {
            const {id: _id} = req.params;
            const type = await TagType.findOneAndDelete({_id}); // @todo try-catch???
            const tags = await Tag.find({tagTypeId: _id});
            const tagsArr = tags.map((type) => {
                return type._id;
            });
            const deleteTags = await Tag.deleteMany({tagTypeId: _id});
            const updateProduct = await Product.updateMany({}, {$pullAll: {tags: [...tagsArr]}});
            console.log("Deleted tags : ", tagsArr);
            console.log("Product updated : ", updateProduct);
            console.log("Remove type : ", type.title);
            return res.json({message: `Type deleted`, type});
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }
    }

    async getAll(req, res) {
        try {
            return res.json(await TagType.find());
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }
    }

    async getOne(req, res) {
        try {
            const {id: _id} = req.params;
            if (_id.match(/^[0-9a-fA-F]{24}$/)) {
                if (!_id) {
                    res.status(400).json({message: "ID not found"});
                }
                const tagType = await TagType.findById(_id);
                return res.json(tagType);
            }
            res.json({message: `Enter valid ID`});
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }
    }
}

module.exports = new TagTypeController();
