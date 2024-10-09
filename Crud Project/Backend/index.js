import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from "./userModel.js";
import cors from "cors"


mongoose.connect("mongodb+srv://jenil:jenil1234@cluster1.fxpsv.mongodb.net/?retryWrites=true&w=majority&appName=cluster1")
.then(() => {
    const app = express();
    // app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors())
        
        
    app.get('/users',async(req,res)=>{
        const users = await User.find();
        res.send(users)
    });

    app.get('/users/:name', async (req, res) => {
        
        const user = await User.findOne({ name: req.params.name });
        res.send(user);
        });
    
        app.post('/users', async (req, res) => {
            
                const user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    address: req.body.address
                });
        
                await user.save(); 
                res.send(user); 
           
        });
    
    app.delete('/users/:name',async(req,res)=>{
        try{
                const user = await User.findOne({name:req.params.name})
                await user.delete()
                res.send(user)
        } catch{
            res.status(404)
            res.send({error : "user doen't exit"})
        }
    })

    app.patch('/users/:name',async(req,res)=>{
        try{
            const user = await User.findOne({name:req.params.name})
            if (req.body.name) user.name = req.body.name;
        if (req.body.email) user.email = req.body.email;
        if (req.body.address) user.address = req.body.address;
            
            await user.save()
            res.send(user);
        }catch{
            res.status(404)
            res.send({error : "user doesn't exist !"})
        }
    })

    app.listen(3001, () => {
            console.log("Server has started on port 3001");
        });
    })
    .catch(err => {
        console.error("Database connection error:", err);
});
