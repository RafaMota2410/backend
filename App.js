const express = require("express");
const cors = require("cors");

const {request}=require("http");
const app = express();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
console.log('Server listening on PORT:', PORT);
});

app.get('/users',(request, response )=>{
const status = [{Name: "Rafa Mota",
Age: "30 años",
Ocupación: "Arquitecto",
Correo: "rafaamota24@gmail.com",
Teléfono: "22 81 64 79 36",
},
{Name: "Eliza Gonzalez Ponzi",
    Age: "29 años",
    Ocupación: "Contadora",
    Teléfono: "22 84 03 02 08",
    },]
response.send(status);
});


app.get('/users/:id', (req, res)=>{
const userId = req.params.id
response.send(userId);
})