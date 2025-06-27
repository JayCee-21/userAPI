// middleware

import { verify } from 'jsonwebtoken'
import { findById } from '../Model/userSchema.js'

const authMiddleware = async (req, res, next) => {

    const accessToken = rwq.cookies.accessToken
    const jwtSecret = process.env.JWT_SECRET

    if(!accessToken) {
        return res.status(401).json({message: 'Not authorized, please login first'})
    }
    try {
        const tokenWithSecret = verify(accessToken, jwtSecret)
        if(!tokenWithSecret) {
            return res.status(401).json({message: 'Invalid Token'})
        }
        
        const User = await findById(tokenWithSecret.userId).select('-password')
        if(!User) {
            return res.status(400).json({message: 'Invalid id' })
        }
        req.user = User
        next()
    } catch (error) {
        return res.status(500).json({message: 'Failed Token'})
    }
}

export default authMiddleware