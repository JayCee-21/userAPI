import { findOne } from '../../Models/userSchema.js';
import getToken from '../../jwt/getToken.js';
import { compare } from 'bcryptjs';




export const loggingIn = async (req, res) => {
         const {gmail, password} = req.body
         if(!gmail || !password) {
            res.status(401).json({message: 'Please Provide all fields'})
            return
            } else {
        try {
            const user = await findOne({ gmail})
            if(!user) {
                res.status(400).json({message: ' User not found. Please register first to continue'})
                return;
            }
            const compared = await compare(password, user.password)
            if(!compared) {
                res.status(401).json({message:'Invalid password or gmail'})
                return;
            }
            const token = getToken(user._id)
            return res
                .cookie('accessToken', token, { httpOnly: true, sameSite: 'strict'})
                .status(200)
                .json({message: 'Login Successful'})
        } catch (error) {
            res.status(500).json(error)
        }
   }   
}


export const loggingOut = async (req, res) => {
            return res
                .clearCookie('accessToken', token, { httpOnly: true, sameSite: 'strict'})
                .status(200)
                .json({message: 'Logout Successful'})

}
