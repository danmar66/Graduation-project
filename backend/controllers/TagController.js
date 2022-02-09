const Product = require("../models/Product");
const Tag = require("../models/Tag");

class TagController {
  async create(req, res) {
    try {
      const { title, tagTypeId, slug } = req.body;
      const tagCandidate = await Tag.find({ $and: [{ title }, { slug }, { tagTypeId }] });
      if (tagCandidate.length) {
        return res.status(400).json({ message: `Tag ${title} already created` });
      }
      const tag = await Tag.create({
        title,
        tagTypeId,
        slug,
      });
      return res.json({ message: `Tag ${title} added`, tag });
    } catch (e) {
      console.log(e);
    }
  }

  async update(req, res) {
    try {
      const { id: _id } = req.params;
      const { title, tagTypeId, slug } = req.body;
      const isUnique = await Tag.find({
        $and: [{ _id: { $ne: _id } }, { title, tagTypeId, slug }],
      });
      if(isUnique.length) {
        return response.status(400).json({message: `Tag ${title} already created`})

      }
      const editedTag = await Tag.findOneAndUpdate(
        { _id },
        { title, tagTypeId, slug },
        { new: true }
      );
      return res.json({ message: `Tag ${title} updated`, editedTag });
    } catch (e) {
      console.log(e);
    }
  }

  async delete(req, res) {
    try {
      const { id: _id } = req.params;
      const tag = await Tag.findOneAndDelete({ _id });
      await Product.updateMany({}, { $pull: { tags: { $in: [_id] } } });
      return res.json({ message: `Tag ${tag.title} deleted`, tag });
    } catch (e) {
      console.log(e);
    }
  }

  async getAll(req, res) {
    const tags = await Tag.find();
    return res.json(tags);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const tag = await Tag.findOne({ _id: id });
    return res.json(tag);
  }
}

module.exports = new TagController();
