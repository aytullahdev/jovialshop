const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = 5000;
const cors = require('cors');
const app = express();

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}));
const uri = `mongodb+srv://admin:admin123@cluster0.paohq3k.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const userCollection = client.db("jovialshop").collection('products');
        
        // Add Product
        app.post('/addproduct',async (req,res)=>{
            const tempdata = req.body;
            const data = {name:tempdata.name,price:tempdata.price,quan:tempdata.quan,img:tempdata.img,desc:tempdata.desc}
            const result = await userCollection.insertOne(data);
            res.send(result);
        })
        // Get All products
        app.get('/products',async (req,res)=>{
            const querry={};
            let cursor = userCollection.find(querry);
            const products = await cursor.toArray();
            res.send(products);
        })
        // Get Single Products
        app.get('/products/:id',async(req,res)=>{
            if(req.params.id && ObjectId.isValid(req.params.id)){
                const querry={_id: ObjectId(req.params.id)};
                const result = await userCollection.findOne(querry);
                
                res.send(result);
            }else{
                res.status(400);
                res.send("Not valid id");
            }
           
        })
        // Update an product
        app.post('/updates',async(req,res)=>{
            const id = req.body._id;
            const newdetails = req.body;
            const querry={_id:ObjectId(id)};
            const newvalue = {$set: {name:newdetails.name,price:newdetails.price,quan:newdetails.quan,img:newdetails.img,desc:newdetails.desc}};
            const result = await userCollection.updateOne(querry,newvalue);
            // console.log(newdetails)
            res.send(result);
        })
        // Update quan
        app.post('/update',async (req,res)=>{
            const id = req.body._id;
            
            const newquan = req.body.quan;
            // console.log(newquan);
            // console.log(id);
            const querry={_id:ObjectId(id)};
            const newvalue = {$set: {quan:newquan}};
            const result = await userCollection.updateOne(querry,newvalue);
            res.send(result);
        })
        // Delete a product 
        app.post('/products',async(req,res)=>{
            // console.log(req.body);
            const querry={_id: ObjectId(req.body._id)};
            const result = await userCollection.deleteOne(querry);
            res.send(result);
        })

    }finally{

    }
}

run().catch(console.dir);
app.listen(port,()=>{
    console.log("Server is working");
    
})