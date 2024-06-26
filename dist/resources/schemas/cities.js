import { Schema } from 'mongoose';

export const citiesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    street: String,
    number: Number,
    postcode: String,
});
