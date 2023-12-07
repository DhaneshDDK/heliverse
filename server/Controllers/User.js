const user = require('../Models/user');

exports.getAllUsers = async (req,res)=>{
    try {
        const data = await user.find({}).sort({id:1});
        // console.log(data);
        res.json({
            message : "success",
            data : data
        })
    } catch (error) {
        res.send({message : error.message});
    }
}

exports.createUser = async (req,res)=>{
    try {
        const {id,first_name,last_name,email,gender,avatar,domain,available} = req.body;
        if(!id || !first_name || !last_name || !email || !gender || !domain || available==null) {
            res.json({
                message : "Please fill all necessary details"
            })
        }

        const data = await user.findOne({id: id});
        console.log(data);
        if(data) {
            res.json({
                success : "false",
                message : "User already exists"
            })
        }
       
     else{

       const newuser = await user.create({
        id, first_name, last_name, email, gender, avatar, domain, available
       });

       res.json({
        success : "true",
        message : "User created successfully"
       })

    }

    } catch (error) {
        res.json({
            success : "false",
            message : error.message,
        })
    }
}

exports.findUser = async (req,res)=>{
     try {
         const {id} = req.body;
         const data = await user.findOne({id: id});
         res.json({
            message : "success",
            data : data
         })
     } catch (error) {
         res.json({
            message : "error", 
            error : error.message
         })
     }
}
exports.findByFilters = async (req,res)=>{
     try {
         const {gender,domain,available,name,id} = req.body;
         console.log(gender,domain,available,name)
         const filter = {};
         if(id) filter.id = id;
         else {
         if(gender) filter.gender = gender;
         if(available) filter.available = (available==='yes')?true:false;
         if(domain) filter.domain = domain;
         if (name) {
            filter.$or = [
                { first_name: { $regex: new RegExp(name, 'i') } },
                { last_name: { $regex: new RegExp(name, 'i') } }
              ];
          }
        }
         const data = await user.find(filter).sort({id:1});
         res.json({
            message : "success",
            data : data
         })
     } catch (error) {
         res.json({
            message : "error", 
            error : error.message
         })
     }
}

exports.findUserByName = async (req,res)=>{
     try {
         const {name} = req.body;
        //  console.log(name)
         const data = await user.find({
            $or : [
                {first_name : { $regex: name, $options: "i" }},
                {last_name : { $regex: name, $options: "i" }},
                {email : { $regex: name, $options: "i" }},
            ]
         });
         res.json({
            message : "success",
            data : data
         })
     } catch (error) {
         res.json({
            message : "error", 
            error : error.message
         })
     }
}

exports.updateUser = async (req,res)=>{
    try {
        const {id,first_name,last_name,email,gender,avatar,domain,available} = req.body;
        const updateduser = {};
        if(first_name) updateduser.first_name = first_name;
        if(last_name) updateduser.last_name = last_name;
        if(email) updateduser.email = email;
        if(gender) updateduser.gender = gender;
        if(avatar)  updateduser.avatar = avatar; 
        if(domain) updateduser.domain = domain;
        if(available) updateduser.available = available; 
        const data = await user.findOneAndUpdate( {id:id}, updateduser, {new:true});
        if(!data){
            res.json({
                message : "Couldn't find user"
            })
        }else {
           res.json({
            success: true,
            message : "User updated successfully",
            data : data
           })
        }
    } catch (error) {
        res.json({
            success: false,
            message : "Error updating user: " + error.message
        })
    }
}

exports.deleteUser = async (req,res)=>{
    try {
        const {id} = req.body;
        const data = await user.findOneAndDelete({id: id});
        if(data){
            res.send({
                success : true,
                message : "User deleted successfully",
                user : data
            })
        }else {
            res.send({
                success : false,
                message : "User not found",
            })
        }
    } catch (error) {
        res.send({
              message : "error: " + error.message
        })
    }
}