import type {Request, Response} from 'express';
import {passport} from './passport';
import {Router} from 'express';

const router = Router();
// Temporary 
async function insertUser(email, password) {
  console.info(`Email: ${email}`);
  console.info(`Password: ${password}`)
}
router.post('/register', async(req: Request, res: Response) => {
  try {
    if (req.body.password !== req.body.confirm) {
      res.status(401).json({ message: 'Passwords do not match.' })
    }
    await insertUser(req.body.email, req.body.password);
    res.status(201).json({messsage: "User was created."})
  } catch (error) {
    res.status(500).json({error: "Error registering user."})
  }
})

router.post('/login', passport.authenticate('local'))