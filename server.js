const express = require('express');
const app = express()
const PORT = 8000

const rappers ={ 
'21 Savage':{
    'age':29,
     'birthName':'Sheyaa Bin Abraham-Joseph',
     'birthLocation': 'London , England'
},
'Chance the Rapper':{
    'age':29, 
    'birthName': 'Chancelor Bennete', 
    'birthLocation': 'Chicago, ILLionis'
}, 
'unknown':{
    'age':0,
    'birhtName':'unknown', 
    'birthlocation':'unknown'
}

}
app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api',(request,response) =>{
    const rappersName = request.params.name.toLowerCase()
    if (rappers[rappersName]) {
        response.json(rappers[rappersName]) 
        
    }else {
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, ()=> {
    console.log(`The server is now running on port ${PORT}! Betta 
    go Catch it` )
})