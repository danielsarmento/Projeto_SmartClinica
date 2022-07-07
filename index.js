require('dotenv').config(); 
const express = require('express')
const app = express()
const cors = require('cors');
const PORT = process.env.PORT;
const routes = require('./routes/routes')
const connectDB = require('./dataBase/dataBase')

//Conectando DB
connectDB();

//Configurando JSON
app.use(express.json());

//Configurando Recebimento de Paramatros pela URL
app.use(express.urlencoded({extended: true}))
app.use(cors());

//Configurando Rotas
app.use(routes);

app.listen(PORT, ()=> {
    console.log(`Servidor disponível na porta: ${PORT}`)
} )