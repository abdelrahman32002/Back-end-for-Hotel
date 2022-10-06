import express,{Request,Response} from 'express';

import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/',(req:Request,res:Response)=>{
  res.send('done');
});












const port = 3000;


app.listen(port,()=> {
  console.log("The app listening to 'http://localhost:3000'")
});
