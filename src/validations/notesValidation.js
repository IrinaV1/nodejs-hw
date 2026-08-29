import { Segments, Joi } from 'celebrate';
import { TAGS } from '../constants/tags.js';
import { isValidObjectId } from 'mongoose';

const ValidObjectId = (value, helpers) => {
  return isValidObjectId(value)
    ? value
    : helpers.message('Invalid noteId format');
};

export const getAllNotesSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(5).max(20).default(10),
    tag: Joi.string().valid(...TAGS),
    search: Joi.string().default(''),
  }),
};

export const noteIdSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(ValidObjectId).required(),
  }),
};

export const createNoteSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).required(),
    content: Joi.string().default(''),
    tag: Joi.string()
      .valid(...TAGS)
      .default(TAGS[0]),
  }),
};

export const updateNoteSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(ValidObjectId),
  }),
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1),
    content: Joi.string().default(''),
    tag: Joi.string()
      .valid(...TAGS)
      .default(TAGS[0]),
  }),
};
