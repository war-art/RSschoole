const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require("express-validator")
const Student = require('../models/Student')
const config = require('config')
const Mentor = require('../models/Mentor')
const router = Router()


router.post(
    '/register', 
    [
        check('email', 'Invalid email').isEmail(),
    ],
    async(req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({ 
                errors: errors.array(),
                message: 'Invalid data while registration' })
        }

        const { username, firstName, lastName, location, email, password} = req.body

        const candidate = await Student.findOne({ email })

        if (candidate) { 
            return res.status(400).json({ message: 'User already exist' })
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = new Student({ username, firstName, lastName, location, email, root: false, password: hashedPassword, role: 'Student'})

        await user.save() 

        res.status(201).json({ message: 'User has been created' })

    } catch(e) { 
        console.log(e); 
        res.status(500).json({ message: 'Something went wrong. Try it again'})
    }
})

router.post(
    '/registerMentor', 
    [
        check('email', 'Invalid email').isEmail(),
    ],
    async(req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({ 
                errors: errors.array(),
                message: 'Invalid data while registration' })
        }

        const { username, firstName, lastName, location, email} = req.body

        const candidate = await Mentor.findOne({ email })

        if (candidate) { 
            return res.status(400).json({ message: 'User already exist' })
        }

        const user = new Mentor({ username, firstName, lastName, location, email, root: true, password: 'admin123', role: 'Mentor'})

        await user.save() 

        res.status(201).json({ message: 'User has been created' })

    } catch(e) { 
        console.log(e); 
        res.status(500).json({ message: 'Something went wrong. Try it again'})
    }
}) 

router.post(
    '/login', 
    [
        check('email', 'Please write a correct email').normalizeEmail().isEmail(),
        check('password', 'Write a password').exists()
    ],
    async(req, res) => { 
    try {

        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({ message: 'Invalid data while login' })
        }

        const {email, password} = req.body 
        
        const user = await Student.findOne({ email }) 

        if(!user) {
            return res.status(400).json({ message: 'User doesn\'t found' })
        }

        const isMatch = await bcrypt.compare(password, user.password) 

        if(!isMatch) {
            return res.status(400).json({ message: 'Password isn\'t correct' })
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '72h' }
        )

        res.json({ token, userId: user.id, root: user.root })

    } catch(e) {
        console.log(e); 
        res.status(500).json({ message: 'Something went wrong. Try it again'})
    }
})

router.post(
    '/loginMentor', 
    [
        check('email', 'Please write a correct email').normalizeEmail().isEmail(),
        check('password', 'Write a password').exists()
    ],
    async(req, res) => { 
    try {

        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({ message: 'Invalid data while login' })
        }

        const {email, password} = req.body 
        
        const user = await Mentor.findOne({ email }) 

        if(!user) {
            return res.status(400).json({ message: 'User doesn\'t found' })
        }
        
        if(password !== user.password) {
            return res.status(400).json({ message: 'Password isn\'t correct' })
        }


        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '72h' }
        )

        res.json({ token, userId: user.id, root: user.root })

    } catch(e) {
        console.log(e); 
        res.status(500).json({ message: 'Something went wrong. Try it again'})
    }
})

module.exports = router