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

    if (Object.keys(profileData).length !== 0) {
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
        db.run(`
          UPDATE user
          SET balance = ?,
              name = ?,
              status = ?,
              tagname = ?,
              usdtbalance = ?
          WHERE address = ?
        `, [
          profileData.walletBalance,
          profileData.walletName,
          profileData.walletStatus,
          profileData.walletTagName,
          profileData.walletUSDTBalance,
          profileData.walletAddress
        ]);
      } else {
        db.run(`
          INSERT INTO user (address, addressClip, balance, name, status, tagname, usdtbalance)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `, [
          profileData.walletAddress,
          profileData.walletAddressClip,
          profileData.walletBalance,
          profileData.walletName,
          profileData.walletStatus,
          profileData.walletTagName,
          profileData.walletUSDTBalance
        ]);
      }

      db.close();
    }

    res.json(profileData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

const nftsDBPath = path.join(__dirname, 'data', 'database', 'nfts.db');
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
    const profileFilePath = path.join(__dirname, 'data', 'profileData.json');

    const data = await fs.readFile(filePath, 'utf8');
    const profileReadData = await fs.readFile(profileFilePath, 'utf8');

    const ownedData = data ? JSON.parse(data) : [];
    const profileData = profileReadData ? JSON.parse(profileReadData) : {};

    if (Object.keys(ownedData).length !== 0) {
      const db = new sqlite3.Database(nftsDBPath);

      db.run(`
        CREATE TABLE IF NOT EXISTS owned (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          address TEXT,
          image TEXT,
          name TEXT,
          description TEXT
        )
      `);

      for (const data of ownedData) {
        const existingData = await new Promise((resolve, reject) => {
          db.get(
            'SELECT * FROM owned WHERE address = ? AND image = ? AND name = ? AND description = ?',
            [profileData.walletAddress, data.image, data.name, data.description],
            (err, row) => {
              if (err) reject(err);
              resolve(row);
            }
          );
        });

        if (!existingData) {
          db.run(`
            INSERT INTO owned (address, image, name, description)
            VALUES (?, ?, ?)
          `, [
            profileData.walletAddress,
            data?.image,
            data.name,
            data.description,
          ]);
        }
      }

      db.close();
    }

    res.json(ownedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: error.message });
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
    const profileFilePath = path.join(__dirname, 'data', 'profileData.json');

    const data = await fs.readFile(filePath, 'utf8');
    const profileReadData = await fs.readFile(profileFilePath, 'utf8');

    const collectionsData = data ? JSON.parse(data) : [];
    const profileData = profileReadData ? JSON.parse(profileReadData) : {};


    if (Object.keys(collectionsData).length !== 0) {
      const db = new sqlite3.Database(nftsDBPath);

      db.run(`
        CREATE TABLE IF NOT EXISTS collections (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          address TEXT,
          image TEXT,
          symbol TEXT,
          name TEXT,
          amount TEXT
        )
      `);

      for (const data of collectionsData) {
        const existingData = await new Promise((resolve, reject) => {
          db.get(
            'SELECT * FROM collections WHERE address = ? AND symbol = ? AND name = ?',
            [profileData.walletAddress, data.symbol, data.name],
            (err, row) => {
              if (err) reject(err);
              resolve(row);
            }
          );
        });

        if (existingData) {
          db.run(`
            UPDATE collections
            SET image = ?,
                amount = ?
            WHERE address = ? AND symbol = ? AND name = ?
          `, [
            data?.image || "https://assets-global.website-files.com/62df25f03ad4d8fbbf70bb37/63dc9d9e8bd4a0a9f9e66e74_634abe01c54c303a88d683d0_OS_signal-p-1600.png",
            data?.amount || "1.00",
            profileData.walletAddress,
            data.symbol,
            data.name
          ]);
        } else {
          db.run(`
            INSERT INTO collections (address, image, symbol, name, amount)
            VALUES (?, ?, ?, ?, ?)
          `, [
            profileData.walletAddress,
            data?.image,
            data.symbol,
            data.name,
            data?.amount || "1.00"
          ]);
        }
      }

      db.close();
    }


    res.json(collectionsData);
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
