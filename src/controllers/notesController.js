// import { TAGS } from '../constants/tags.js';
import { Note } from '../models/note.js';
import createHttpError from 'http-errors';

export const getAllNotes = async (req, res) => {
  const { page = 1, perPage = 10, tag, search } = req.query;
  
  const skip = (page - 1) * perPage;

  const notesQuery = Note.find({userId: req.user._id});

  if (tag) {
    notesQuery.where('tag').equals(tag);
  }
  if (search) {
    notesQuery.where({
      $or: [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
      ],
    });
  }

  const [totalNotes, notes] = await Promise.all([
    notesQuery.find().clone().countDocuments(),
    notesQuery.find().skip(skip).limit(perPage).populate('userId', 'username'),
  ]);

  const totalPages = Math.ceil(totalNotes / perPage);

  res.status(200).json({ page, perPage, totalNotes, totalPages, notes });
};

export const getNoteById = async (req, res) => {
  const { noteId } = req.params;
  const {_id: userId} = req.user;
  const note = await Note.findOne({_id: noteId, userId});
  if (!note) {
    throw createHttpError(404, 'Note not found');
  }
  res.status(200).json(note);
};

export const createNote = async (req, res) => {
  const newNote = await Note.create({ ...req.body, userId: req.user._id, });
  await newNote.populate('userId', 'username');
  
  res.status(201).json(newNote);
};

export const deleteNote = async (req, res) => {
  const { noteId } = req.params;
  const {_id: userId} = req.user;
  const delNote = await Note.findOneAndDelete({_id: noteId, userId});
  if (!delNote) {
    throw createHttpError(404, 'Note not found');
  }
  res.status(200).json(delNote);
};

export const updateNote = async (req, res) => {
  const { noteId } = req.params;
  const {_id: userId} = req.user;
  const updatedNote = await Note.findOneAndUpdate({_id: noteId, userId}, req.body, {
    returnDocument: 'after',
  });
  if (!updatedNote) {
    throw createHttpError(404, 'Note not found');
  }
  res.status(200).json(updatedNote);
};
