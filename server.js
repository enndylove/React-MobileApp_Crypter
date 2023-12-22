const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs/promises');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/profile', async (req, res) => {
  try {
    const profileData = req.body;
    console.log('Received profile data:', profileData);

    await fs.mkdir(path.join(__dirname, 'data'), { recursive: true });

    const filePath = path.join(__dirname, 'data', 'profileData.json');
    await fs.writeFile(filePath, JSON.stringify(profileData, null, 2));

    res.json({ status: 'success' });
  } catch (error) {
    console.error('Error in /api/profile:', error);
    res.status(500).json({ status: 'error' });
  }
});

app.get('/api/profile', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'data', 'profileData.json');
    const data = await fs.readFile(filePath, 'utf8');
    const profileData = JSON.parse(data);

    res.json(profileData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error' });
  }
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.get('/connectWallet', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
