import User, { findOne, find, findById, findByIdAndUpdate, findByIdAndDelete } from '../Models/userSchema.js';
import { genSaltSync, hashSync } from 'bcryptjs';



export const createUser = async (req, res) => {
       const { username, gmail, password } = req.body
if(!username || !gmail || !password) {
    res.status(400).json({message: 'Please provide all fields'})
    return
}
    try {
        const returnedgmail = await User.findOne({gmail });
        if(returnedgmail) {
            return res.status(400).json({message: 'Gmail Already Exits!'});
        }
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        if(gmail === 'lucy@gmail.com' || gmail === 'christina@gmail.com') {
            const newUser = new User({...req.body, password: hashedPassword, admin: true})
            await newUser.save()
        }
        const newUser = new User({...req.body, password:hashedPassword})
        await newUser.save();
        return res.status(201).json({message: 'New User Created Successfully'});
        } catch (error) {
        console.log(error);
        res.status(500).json({errormessage: error.message});
    }
}


export const readUsers = async (req, res) => {
    try {
        const users = await find()
         res.status(200).json(users)
    } catch (error) {
        console.log(error.message);
    }
}


export const getOneUser = async (req, res) => {
    const { id } = req.params;
   try {
    const user = await User.findById(id);
    if(!user) {
          return res.status(200).json({message: 'No user found!'});
    }
    res.json(user);
    } catch (error) {
        console.log(error.message);
    }
}

export const editUser = async (req, res) => {
    const { id } = req.params;
    const reqId = req.user._id
    const { username, gmail, password } = req.body;
    if(id === reqId) {
        try {
         const user = await findByIdAndUpdate(id, req.body, { new: true});
        if (!user) {
            return res.status(404).json({ message: `No user with the id ${id}` });
        }
        res.json({message: 'User updated successfully!'})
    } catch (error) {
        res.status(500).json(error)
    }
    } else {
        return res.status(401).json({message: "You are not authorized to edit this user"})
    }
}

export const editProfile = async (req, res) => {
    const { id } = req.params
    const reqId = req.user._id
    const { country, Number, Street, Bio} = req.body
    if (id === reqId) {
        try {
            await findByIdAndUpdate(id, {
                 $set: {
                     'profile.country': country,
                     'profile.Number': Number,
                     'profile.Street': Street,
                     'profile.Bio': Bio,
                 }
            }, {new: true })
             res.status(200).json({message: 'User updated successfully'})
        } catch (error) {
             res.status(500).json(error)
        }
    } else {
        return res.status(401).json({message: "You are not authorized to edit this user"})
    }
}


export const deleteUser = async (req, res) => {
    const { id } = req.params
    const {_id, admin } = req.user
    if (id === _id || admin === true ) {
        try {
            await findByIdAndDelete(id)
            res.status(200).json({message: "User deleted successfully"})
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        return res.status(401).json({message: "You are not authorized to delete this user"})
    }
}

