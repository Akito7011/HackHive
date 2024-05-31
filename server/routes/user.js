import express from 'express';
import bycrypt from 'bcrypt';
import { User } from '../Models/User.js';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
const router = express.Router();
const PORT=process.env.PORT;

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.findOne({ email });
    if (user) {
        return res.json({ message: 'User already exists' });
    }
    const hashpassword = await bycrypt.hash(password, 17);
    const newUser = new User({
        name,
        email,
        password: hashpassword
    });
    await newUser.save();
    return res.json({ status: true,message: 'User created successfully' });
    }catch (err) {
        console.log(err);
        return res.json({ message: 'Something went wrong' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try { 
        const user = await User.findOne({ email });
    if (!user) {
        return res.json({ message: 'User does not exist' });
    }
    const isValid = await bycrypt.compare(password, user.password);
    if (!isValid) {
        return res.json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ name: user.name }, process.env.KEY, { expiresIn: '1h' });
    res.cookie('token', token, { maxAge: 3600000, httpOnly: true });
    return res.json({ status: true, message: 'Login successful' });
    } catch (err) {
        console.log(err);
        return res.json({ message: 'Something went wrong' });
    
    }
});
router.post('/forgot-password', async (req, res) => {
    const {email} = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: 'User does not exist' });
        }

        const token=jwt.sign({id:user._id},process.env.KEY,{expiresIn:'2m'});
        var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourmail@gmail.com',
    pass: 'supersecretpassword'
  }
});

var mailOptions = {
  from: 'lifelessmeat@gmail.com',
  to: email,
  subject: 'Reset password link',
  text:'http://localhost:5173/ResetPassword/'+token
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    return res.json({message:'Error sending email'});
  } else {
    return res.json({status:true,message:'Email sent: ' + info.response});
  }
});

        
    }catch (err) {  
        console.log(err);
        return res.json({ message: 'Something went wrong' });
    }
})

router.post('/reset-password/:token', async (req, res) => { 
    const { token } = req.params;
    const { password } = req.body;
    try { 
        const decoded = await jwt.verify(token, process.env.KEY);
        const id = decoded.id;
        const hashpassword = await bycrypt.hash(password, 17);
        await User.findByIdAndUpdate({ _id: id }, { password: hashpassword });
        return res.json({ status: true, message: 'Password updated successfully' });
    }catch (err) {
        console.log(err);
        return res.json({ message: 'invalid Token' });
    }
})
export { router as userRouter };