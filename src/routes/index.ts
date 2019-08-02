import { Router } from 'express';
import { userLogin, createUser } from '../controllers/';

const router = Router();

router.post('/signup', async function(req, res) {
  try {
    await createUser(req.body);
    res.status(201).json({ success: 'user created' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/login', async function(req, res) {
  try {
    const token = await userLogin({
      email: req.body.email,
      password: req.body.password
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
