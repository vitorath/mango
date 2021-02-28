import express from 'express';
import { MongoHelper } from './mongo-helper';

const app = express();

app.post('/', async (req, res) => {
  const userModel = await MongoHelper.instance.getColletion('user')
  userModel.insertOne({ name: 'Vitor' });
  res.send('Usuário criado');
});

app.get('/', async (req, res) => {
  const userModel = await MongoHelper.instance.getColletion('user')
  const users = await userModel.find().toArray();
  res.send({ users });
});

app.listen(5050, () => {
  console.log("Running");
});