const User = require('../models/user.js')

exports.home = (req, res) => {
    res.send('Hello World!');
}

exports.login = async (req, res) => {
    // console.log(req.body);
    try {
        const { email, password } = req.body;
        console.log(req.body);

        if (!email || !password) {
            throw new Error("Name and email are required")
        }

        const user = await User.findOne({ email });
        console.log(user);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not exist'
            })
        }
        else if (user.password === password) {
            return res.status(200).json({
                success: true,
                user,
                message: 'Login success fully'
            })
        }

        return res.status(404).json({
            success: false,
            message: "Wrong assword",
            user
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}


exports.signUp = async (req, res) => {
    // extract info
    console.log(req.body);
    try {
        const { name, email, phone, password } = req.body


        if (!name || !email || !phone || !password) {
            throw new Error("Name and email are required")
        }

        const user = await User.create({
            name,
            email,
            phone,
            password,
        })


        res.status(201).json({
            success: true,
            message: "User created Successfully",
            user
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({})

        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

exports.editUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success: true,
            message: "User updated successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}