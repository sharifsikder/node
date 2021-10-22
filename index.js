const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())


const port = 4000;



app.get('/', (req, res) => {
    res.send('Hello World! Sharif, How are You.')
  });


const users = [
    {id:0, name:'Sharif', email:'Sharif@gmail.com', phone:'01742088325'},
    {id:1, name:'Sakib', email:'Sakib@gmail.com', phone:'01742088325'},
    {id:2, name:'Sahin', email:'Sahin@gmail.com', phone:'01742088325'},
    {id:3, name:'Sayem', email:'Sayem@gmail.com', phone:'01742088325'},
    {id:4, name:'Selim', email:'Selim@gmail.com', phone:'01742088325'},
    {id:5, name:'Sajid', email:'Sajid@gmail.com', phone:'01742088325'},
]

app.get('/users', (req, res) => {

    const search = req.query.search;
    if(search){
            const seacrhResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
            res.send(seacrhResult)
    }
    else{
        res.send(users)
    }
    
})

// app.Mehtid

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})



app.get('/fruits', (req, res) => {
 
    res.send(['mango', 'banana'])
})


app.get('/fruits/mango/fazil', (req, res) => {
    res.send('Yummy tok markalk fazil')
})


  app.listen(port, () => {
    console.log('listing to port', port)
  })