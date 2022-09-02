const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const Notes = require("./../models/Notes");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Route 1: Get all notes using : GET 'api/notes/getnotes' Login required
router.get("/getnotes", fetchuser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
});
// Route 2: add notes using : POST 'api/notes/addnote' Login required
router.post(
  "/addnotes",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      } else {
        const { title, description, tag } = req.body;
        const notes = new Notes({
          title,
          description,
          tag,
          user: req.user.id,
        });
        const saveNote = await notes.save();
        res.json(saveNote);
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error..");
    }
  }
);

// Route 3: update notes using : PUT 'api/notes/updatenotes' Login required
router.put("/updatenotes/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // find the note and update it by id
    let notes = await Notes.findById(req.params.id);
    if (!notes) {
      return res.status(400).send("Not Found");
    }
    console.log('notes.user=>', notes.user);
    if (notes.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    notes = await Notes.findByIdAndUpdate(req.params.id, {$set:newNote}, {new:true});
    res.json(notes)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error..");
  }
});

// Route 4: delete notes using : DELETE 'api/notes/deletenotes' Login required
router.delete("/deletenotes/:id", fetchuser, async (req, res) => {
    try { 
      // find the note and update it by id
      let notes = await Notes.findById(req.params.id);
      if (!notes) {
        return res.status(400).send("Not Found");
      } 
      if (notes.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
      } 
      notes = await Notes.findByIdAndDelete(req.params.id);
      res.json({message:'Note has been deleted', notes: Notes})
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error..");
    }
  });
module.exports = router;
