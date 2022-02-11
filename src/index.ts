import express from 'express';
//import patientRouter from './routes/patients';
var cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors()) // Use this after the variable declaration

const PORT = 3000;

app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

//app.use('/api/patients', patientRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});