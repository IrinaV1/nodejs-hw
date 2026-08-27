import { Segments, Joi } from 'celebrate';
import { TAGS } from '../constants/tags';
import { isValidObjectId } from 'mongoose';

const ValidObjectId = (value, helpers) => {
  isValidObjectId(value)
    ? value
    : helpers.error({
        message: 'Invalid noteId',
      });
};

export const getAllNotesSchema = {
  [Segments.PARAMS]: Joi.object({
    page: Joi.number().min(1).default(1),
    perPage: Joi.number().min(5).max(20).default(10),
    tag: Joi.string()
      .valid(...TAGS)
      .default(TAGS[0]),
    search: Joi.string().required(),
  }),
};

export const noteIdSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(ValidObjectId),
  }),
};

export const createNoteSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(ValidObjectId),
  }),
  [Segments.BODY]: Joi.object({
    title: Joi.string().required(),
    content: Joi.string(),
    tag: Joi.string().valid(...TAGS),
  }),
};

export const updateNoteSchema;
