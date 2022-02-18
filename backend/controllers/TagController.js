const Product = require("../models/Product");
const Tag = require("../models/Tag");
const {validationResult} = require("express-validator");
const Admin = require("../models/Admin");

class TagController {
    async create(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessage = errors.errors.map(({param, msg}) => ({[param]: msg}))
                return res.status(400).json({message: "Validation error", errorMessage});
            }

            const {title, tagTypeId, slug} = req.body;
            const tagCandidate = await Tag.find({$and: [{title}, {slug}, {tagTypeId}]});
            if (tagCandidate.length) {
                return res.status(400).json({message: `Tag ${title} already created`});
            }
            const tag = await Tag.create({
                title,
                tagTypeId,
                slug,
            });
            return res.json({message: `Tag added`, tag});
        } catch (e) {
            console.log(e);
        }

        // #swagger.tags = ['tag']
    }

    async update(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessage = errors.errors.map(({param, msg}) => ({[param]: msg}))
                return res.status(400).json({message: "Validation error", errorMessage});
            }

            const {id: _id} = req.params;
            const {title, tagTypeId, slug} = req.body;
            const isUnique = await Tag.find({
                $and: [{_id: {$ne: _id}}, {title, tagTypeId, slug}],
            });
            if (isUnique.length) {
                return response.status(400).json({message: `Tag ${title} already created`})

            }
            const updatedTag = await Tag.findOneAndUpdate(
                {_id},
                {title, tagTypeId, slug},
                {new: true}
            );
            return res.json({message: `Tag updated`, updatedTag});
        } catch (e) {
            console.log(e);
        }

        // #swagger.tags = ['tag']
    }

    async delete(req, res) {
        try {
            const {id: _id} = req.params;
            const tag = await Tag.findOneAndDelete({_id});
            await Product.updateMany({}, {$pull: {tags: {$in: [_id]}}});
            return res.json({message: `Tag deleted`, tag});
        } catch (e) {
            console.log(e);
        }

        // #swagger.tags = ['tag']
    }

    async getAll(req, res) {
        const tags = await Tag.find();
        return res.json(tags);

        // #swagger.tags = ['tag']
    }

    async getOne(req, res) {
        const {id} = req.params;
        const tag = await Tag.findById(id);
        if (!tag) {
            res.status(400).json({message: "ID not found"});
        } else {
            return res.json(tag);
        }

        // #swagger.tags = ['tag']
    }
}

module.exports = new TagController();
