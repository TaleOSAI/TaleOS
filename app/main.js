import express from 'express';
import routes from './api/routes.js';
import config from './config/config.js';

const app = express();
const PORT = config.port || 3001;

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`TaleOS API running on port ${PORT}`);
});
