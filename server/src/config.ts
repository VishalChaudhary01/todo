import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://mongo:27017/todo-db');
    console.log('MongoDB connected!');
  } catch (error) {
    console.log('Failed to connect to db', error);
    process.exit(1);
  }
};

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const User = mongoose.model('User', userSchema);
