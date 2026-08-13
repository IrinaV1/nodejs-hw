import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import pinoHttp from 'pino-http';

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(pinoHttp());
app.use(cors());
app.use(express.json());

app.get('/notes', (req, res) => {
  res.status(200).json({
    message: 'Retrieved all notes',
  });
});

app.get('/notes/:noteId', (req, res) => {
  const id_param = req.params.noteId;
  res.status(200).json({
    message: `Retrieved note with ID: ${id_param}`,
  });
});

app.get('/test-error', (req, res) => {
  throw new Error('Simulated server error');
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
