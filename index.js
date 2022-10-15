const express = require('express');
var cors = require('cors');
const app = express();
const port = 8080;
const overviewRoutes = require('./src/routes/overview.routes');
const columnRoutes = require('./src/routes/column.routes');

// Invasores podem utilizar este cabeçalho (que fica ativado por padrão) para detectar aplicativos executando o Express e então iniciar ataques especificamente direcionados a eles.
app.disable('x-powered-by');

app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});

app.get('/health', (req, res, next) => {
  res.send('OK => ' + new Date());
});

app.use('/ptm-server/overview/', overviewRoutes);
app.use('/ptm-server/task/', columnRoutes);

app.listen(port, () => {
  console.log(`Priority Task Manager listening at http://localhost:${port}`);
});
