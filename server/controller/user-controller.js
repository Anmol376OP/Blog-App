import User from '../model/user.js';
import Token from '../model/token.js';
import bcrypt from 'bcrypt';
import { request } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const signupUser = async (request, response) => {
    try {
        // const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(request.body.password, 10);
        const user = {
            username: request.body.username,
            email: request.body.email,
            password: hashedPassword,
        };
        // const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        return response.status(200).json({ msg: 'Signup successfull' });
    } catch (error) {
        return response.status(500).json({ msg: 'Error while signing up user' });
    }
}

export const loginUser = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username });
        if (!user) {
            return response.status(400).json({ msg: 'Username does not match' });
        }
        try {
            let match = await bcrypt.compare(request.body.password, user.password);
            if (match) {
                const accessToken = jwt.sign(user.toJSON(), process.env.Access_key, { expiresIn: '15m' });
                const refreshToken = jwt.sign(user.toJSON(), process.env.Access_key);

                const newToken = new Token({ token: refreshToken });
                await newToken.save();

                return response.status(200).json({ accessToken: accessToken, refreshToken: refreshToken, username: user.username })
            } else {
                return response.status(400).json({ msg: 'Password does not match' })
            }
        } catch (e) {
            return response.status(400).json({ msg: "password did not match" })
        }


    } catch (e) {
        return response.status(500).json({ msg: 'Error while signing up user' });
    }
}