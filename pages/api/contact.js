import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    console.log('Received data:', req.body); // Log the incoming request data

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      console.log('Invalid input data');
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    // const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.ntrwp.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    const connectionString = `mongodb+srv://earlclaro:July82001Claro@cluster0.myucw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    console.log('MongoDB Connection String:', connectionString); // Log the MongoDB connection string for debugging

    try {
      console.log('Connecting to MongoDB...');
      client = await MongoClient.connect(connectionString);
      console.log('Connected to MongoDB successfully');
    } catch (error) {
      console.error('Could not connect to database:', error);
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db();

    try {
      console.log('Inserting message into MongoDB...');
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
      console.log('Message inserted successfully:', newMessage);
    } catch (error) {
      console.error('Failed to store message:', error);
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    console.log('Response:', { message: 'Successfully stored message!', message: newMessage });
    res.status(201).json({ message: 'Successfully stored message!', message: newMessage });
  }
}

export default handler;
