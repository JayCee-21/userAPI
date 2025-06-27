import { sign } from 'jsonwebtoken';

const getToken = (userId) => {
    return sign({userId}, process.env.JWT_SECRET,{expiresIn:'5m'} )
}

export default getToken;