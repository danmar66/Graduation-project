const Order = require("../models/Order");

class OrderController {
  async create(req, res) {
    try {
      const {deliveryAddress, customerName, customerPhone, customerEmail} = req.body
      const order = await Order.create({deliveryAddress, customerName, customerPhone, customerEmail})
      res.json(order)
    } catch (e) {
      console.log(e.message); res.status(424).json({error: 'Unknown error'});
    }
  }

  async getAll(req, res) {
    try {

    } catch (e) {
      console.log(e.message); res.status(424).json({error: 'Unknown error'});
    }
  }
  async getOne(req, res) {
    try {

    } catch (e) {
      console.log(e.message); res.status(424).json({error: 'Unknown error'});
    }
  }
  async update(req, res) {
    try {

    } catch (e) {
      console.log(e.message); res.status(424).json({error: 'Unknown error'});
    }
  }
  async delete(req, res) {
    try {
      
    } catch (e) {
      console.log(e.message); res.status(424).json({error: 'Unknown error'});
    }
  }
}

module.exports = new OrderController();
