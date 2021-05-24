const GroceryItem = require("../models/GroceryItem");

const addNewGroceryItem = (req, res) => {
  const newGroceryItemData = new GroceryItem({
    importance: req.body.importance,
    name: req.body.name,
    amount: req.body.amount,
    done: req.body.done,
  });
  newGroceryItemData.save(() => {
    res.json("New grocery item added!");
  });
};
const deleteController = (req, res) => {
  const groceryId = req.body.removeItemId;
  GroceryItem.findByIdAndDelete(groceryId, (err, doc) => {
    res.json("Item Deleted");
  });
};

const updateDoneController = (req, res) => {
  const updateDoneId = req.body.doneItemId;
  GroceryItem.findByIdAndUpdate(
    updateDoneId,
    {
      done: true,
    },
    (err, updatedItem) => {
      if (updatedItem) {
        res.json(updatedItem);
      } else {
        res.status(404).send("Item not found");
      }
    }
  );
};
const updateNotDoneController = (req, res) => {
  const notDoneItemId = req.body.notDoneItemId;
  GroceryItem.findByIdAndUpdate(
    notDoneItemId,
    {
      done: false,
    },
    (err, updatedItem) => {
      if (updatedItem) {
        res.json(updatedItem);
      } else {
        res.status(404).send("Item not found");
      }
    }
  );
};

const updateGetController = (req, res) => {
  const updateId = req.params.id;
  GroceryItem.findById(updateId, (err, groceryItem) => {
    res.json(groceryItem);
  });
};
const updatePostController = (req, res) => {
  const updateId = req.params.id;
  GroceryItem.findByIdAndUpdate(
    updateId,
    {
      importance: req.body.importance,
      name: req.body.name,
      amount: req.body.amount,
      done: req.body.done,
    },
    (err, updatedItem) => {
      if (updatedItem) {
        res.json(updatedItem);
      } else {
        res.status(404).send("Item not found");
      }
    }
  );
};

const showGroceryItems = (req, res) => {
  GroceryItem.find((err, docs) => {
    res.json(docs);
  });
};
module.exports = {
  addNewGroceryItem,
  showGroceryItems,
  deleteController,
  updateDoneController,
  updateNotDoneController,
  updateGetController,
  updatePostController,
};
