const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs/promises');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
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

const usersDBPath = path.join(__dirname, 'data', 'database', 'users.db');

app.get('/api/profile', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'data', 'profileData.json');
    const data = await fs.readFile(filePath, 'utf8');
    const profileData = data ? JSON.parse(data) : {};
    const db = new sqlite3.Database(usersDBPath);
    db.run(`
      CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        address TEXT,
        addressClip TEXT,
        balance TEXT,
        name TEXT,
        status TEXT,
        tagname TEXT,
        usdtbalance TEXT
      )
    `);

    const existingData = await new Promise((resolve, reject) => {
      db.get('SELECT * FROM user WHERE address = ?', [profileData.walletAddress], (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    });
    if (existingData) {
      const stmt = db.prepare(`
        UPDATE user
        SET balance = ?,
            name = ?,
            status = ?,
            tagname = ?,
            usdtbalance = ?
        WHERE address = ?
      `);
      stmt.run(
        profileData.walletBalance,
        profileData.walletName,
        profileData.walletStatus,
        profileData.walletTagName,
        profileData.walletUSDTBalance,
        profileData.walletAddress
      );
      stmt.finalize();
    } else {
      const stmt = db.prepare(`
        INSERT INTO user (address, addressClip, balance, name, status, tagname, usdtbalance)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `);
      stmt.run(
        profileData.walletAddress,
        profileData.walletAddressClip,
        profileData.walletBalance,
        profileData.walletName,
        profileData.walletStatus,
        profileData.walletTagName,
        profileData.walletUSDTBalance
      );
      stmt.finalize();
    }
    db.close();
    res.json(profileData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error' });
  }
});

app.post('/owned/profile', async (req, res) => {
  try {
    const nftsData = req.body;
    console.log('Received profile data:', nftsData);

    await fs.mkdir(path.join(__dirname, 'data'), { recursive: true });

    const filePath = path.join(__dirname, 'data', 'ownedData.json');
    await fs.writeFile(filePath, JSON.stringify(nftsData, null, 2));

    res.json({ status: 'success' });
  } catch (error) {
    console.error('Error in /nfts/profile:', error);
    res.status(500).json({ status: 'error' });
  }
});

app.get('/owned/profile', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'data', 'ownedData.json');
    const data = await fs.readFile(filePath, 'utf8');
    const nftsData = JSON.parse(data);

    res.json(nftsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error' });
  }
});

app.post('/collections/profile', async (req, res) => {
  try {
    const nftsData = req.body;
    console.log('Received profile data:', nftsData);

    await fs.mkdir(path.join(__dirname, 'data'), { recursive: true });

    const filePath = path.join(__dirname, 'data', 'collectionsData.json');
    await fs.writeFile(filePath, JSON.stringify(nftsData, null, 2));

    res.json({ status: 'success' });
  } catch (error) {
    console.error('Error in /nfts/profile:', error);
    res.status(500).json({ status: 'error' });
  }
});

app.get('/collections/profile', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'data', 'collectionsData.json');
    const data = await fs.readFile(filePath, 'utf8');
    const nftsData = JSON.parse(data);

    res.json(nftsData);
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
