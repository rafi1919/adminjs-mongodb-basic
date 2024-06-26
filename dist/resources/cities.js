import mongoose from 'mongoose';
import { citiesSchema } from './schemas/cities.js'; 

const City = mongoose.model('City', citiesSchema);

export default City;