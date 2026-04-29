const service = require('../services/itemService');

async function create(req, res) {
  try {
    const data = await service.createItem(req.body.name);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function list(req, res) {
  try {
    const data = await service.getItems();
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  create,
  list
};