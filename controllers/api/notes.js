const Note = require("../../models/note");

module.exports = {
    create
};

async function create(req, res) {
    try {
        const note = await Note.create(req.body);
        const allNotes = await Note.find({user: req.body.user});
        res.json(allNotes);
    } catch (err) {
        console.log(err);
    }
}