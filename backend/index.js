const express = require('express');
const cors = require('cors');
const UserRouter = require('./routers/userRouter');
const AppointmentRouter = require('./routers/appointmentRouter');

const app = express();
const port = 5500;

app.use(cors({
    origin: '*'
}))
app.use(express.json());

app.use('/user', UserRouter);
app.use('/appointment', AppointmentRouter);

app.get('/', (req, res) => {
    console.log('response from express');
})

app.listen(port, () => {
    console.log('server started');
})