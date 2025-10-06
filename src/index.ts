import express,{Request,Response} from 'express';
import {connectDB} from './config/db';
import path from 'path';
import Router from './routes';
import adminRouter from './routes/admin';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// app.use(express.static(path.join(__dirname,'public')));
app.use(express.static('public'));
app.use('/',Router);
app.use('/admin',adminRouter);

    app.listen(PORT,()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
    });

// Connect to Database
// connectDB().then(()=>{

// }).catch((err)=>{
//     console.error("Failed to connect to the database",err);
// });
