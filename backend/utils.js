import jwt from 'jsonwebtoken'

export const generateToken = (user) =>{
    return jwt.sign({
        id:user.id,
        name:user.name,
        phone:user.phone
    }, process.env.JWT_SECRET, {
        expiresIn: '30d', 
    })
}