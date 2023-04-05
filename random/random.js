// Define a protected endpoint that requires a valid JWT to access
/*
app.get('/protected', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).send({ message: 'No authorization header provided' });
    }
  
    const token = authHeader.split(' ')[1];
    try {
      const decodedToken = jwt.verify(token, JWT_SECRET);
      res.send({ message: `Hello, user ${decodedToken.id}` });
    } catch (error) {
      res.status(401).send({ message: 'Invalid token' });
    }
  });

  app.post('/api/users', async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ message: 'Please provide a username and password' });
    }
  
    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
  
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
      });
      res.status(201).json({ message: 'User created' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ message: 'Please provide a username and password' });
    }
  
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
      });
      res.status(200).json({ message: 'Login successful' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.get('/test', (req, res) =>{

    const token = jwt.sign({ name: "Turtle Rock" }, JWT_SECRET, { expiresIn: '1h' });
  
    res.send({ token });
  })

// Example users array (this should be stored in a database)
const users = [
    {
      id: 1,
      username: 'johndoe',
      password: '$2a$10$5ll5d5RlKjDp1Ih20/P8f.WPm9XN7fsfjKzhlF8yv1cz6.1e6j/0W'
    }
  ];
  */