const helper = require("../helpers/Helpers");
const Admin = require("../models/Admin");
const { validationResult } = require("express-validator");

class AdminController {
  async create(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Registration error", errors });
      }
      const { username, email, password } = req.body;
      const candidate = await Admin.findOne({ $or: [{ username }, { email }] });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "An administrator with the same data already exists" });
      }
      const passwordHash = helper.passwordHash(password);
      await Admin.create({ username, email, password: passwordHash });
      res.json({ message: `Admin ${username} added successfully` });
    } catch (e) {
      console.log(e.message);
      res.status(424).json({ error: "Unknown error" });
    }
  }

  async update(req, res) {
    try {
      const { _id, username, email, password } = req.body;
      if (!_id) {
        res.status(400).json({ message: `ID ${_id} not found` });
      }
      await Admin.findByIdAndUpdate(
        _id,
        { username, email, password: helper.passwordHash(password) },
        { new: true }
      );
      return res.json({ message: `Admin with ID ${_id} edited` });
    } catch (e) {
      console.log(e.message);
      res.status(424).json({ error: "Unknown error" });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "ID not found" });
      }
      if (id.match(/^[0-9a-fA-F]{24}$/)) {
        const isDeleted = await Admin.findByIdAndDelete(id);
        console.log(isDeleted);
        if (isDeleted === null) {
          res.status(400).json({ message: "ID not found" });
        } else {
          res.json({ message: `Admin with ID ${id} deleted` });
        }
      }
      res.json({ message: `Enter valid ID` });
    } catch (e) {
      console.log(e.message);
      res.status(424).json({ error: "Unknown error" });
    }
  }

  async getAll(req, res) {
    try {
      const admins = await Admin.find();
      return res.json(admins);
    } catch (e) {
      console.log(e.message);
      res.status(424).json({ error: "Unknown error" });
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (id.match(/^[0-9a-fA-F]{24}$/)) {
        if (!id) {
          res.status(400).json({ message: "ID not found" });
        }
        const admin = await Admin.findById(id);
        return res.json(admin);
      }
      res.json({ message: `Enter valid ID` });
    } catch (e) {
      console.log(e.message);
      res.status(424).json({ error: "Unknown error" });
    }
  }

  async getUser(req, res) {
    try {
      const admin = await Admin.findById(req.user.id);
      return res.json({ Username: admin.username, Email: admin.email });
    } catch (e) {
      console.log(e.message);
      res.status(424).json({ error: "Unknown error" });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const admin = await Admin.findOne({ username });
      if (!admin) {
        return res.status(400).json({ message: `Admin ${username} not found` });
      }
      const passwordCheck = helper.passwordCheck(password, admin.password);
      if (!passwordCheck) {
        return res.status(400).json({ message: `Error. Type the correct password` });
      }
      const token = helper.generateAccessToken(admin._id);
      res.json({ token });
    } catch (e) {
      res.status(400).json({ message: "Login error" });
      console.log(e.message);
    }
  }
}

module.exports = new AdminController();
