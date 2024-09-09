const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const personRoutes = require('./routes/personRoutes');
const sequelize = require('./config/database');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', personRoutes);

app.listen(port, async () => {
  console.log(`Servidor rodando na porta ${port}`);
  await sequelize.sync(); 
});
