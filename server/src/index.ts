import express, { Request, Response } from 'express';
import { connectDB, User } from './config';

const app = express();
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Healthy Server' });
});

app.get('/users', async (req: Request, res: Response) => {
  const users = await User.find();

  res.status(200).json({ users });
});

app.post('/users', async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const newUser = await User.create({ name, email, password });

  res.status(201).json({ message: 'User created successfully', newUser });
});

app.listen(3000, async () => {
  await connectDB();
  console.log('Server started....');
});
