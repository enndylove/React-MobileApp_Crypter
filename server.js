const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// eslint-disable-next-line no-unused-vars
const fs = require('fs/promises');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/profile', async (req, res) => {
  try {
    const profileData = req.body;
    profileData.address = profileData.walletAddress;
    profileData.addressClip = profileData.walletAddressClip;
    profileData.balance = profileData.walletBalance;
    profileData.usdtbalance = profileData.walletUSDTBalance;
    profileData.name = profileData.walletName;
    profileData.tagname = profileData.walletTagName;
    profileData.status = profileData.walletStatus;


    const user = await prisma.user.create({
      data: {
        address: profileData.address,
        addressClip: profileData.addressClip,
        balance: profileData.balance,
        usdtbalance: profileData.usdtbalance,
        name: profileData.name,
        tagname: profileData.tagname,
        status: profileData.status,
      },
    });
    res.json({ status: 'success' });
    console.log(user)
  } catch (error) {
    console.error('Error in /api/profile:', error);
    res.status(500).json({ status: 'error' });
  }
});

app.get('/api/profile', async (req, res) => {
  const { address } = req.query;

  try {
    const user = await prisma.user.findFirst({
      where: { address },
    });

    if (user) {
      res.json(user);
      console.log("User found:", user);
    } else {
      res.json({});
      console.log("No user found with address:", address);
    }
  } catch (error) {
    console.error("Error fetching user by address:", error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.post('/owned/profile', async (req, res) => {
  try {
    const nftsData = req.body;
    await prisma.owned.createMany({ data: nftsData });
    res.json({ status: 'uccess' });
  } catch (error) {
    console.error('Error in /nfts/profile:', error);
    res.status(500).json({ status: 'error' });
  }
});

app.get('/owned/profile', async (req, res) => {
  try {
    const ownedData = await prisma.owned.findMany();
    res.json(ownedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.post('/collections/profile', async (req, res) => {
  try {
    const nftsData = req.body;
    await prisma.collections.createMany({ data: nftsData });
    res.json({ status: 'uccess' });
  } catch (error) {
    console.error('Error in /nfts/profile:', error);
    res.status(500).json({ status: 'error' });
  }
});

app.get('/collections/profile', async (req, res) => {
  try {
    const collectionsData = await prisma.collections.findMany();
    res.json(collectionsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.post('/api/emails', async (req, res) => {
  try {
    const emailsData = req.body;
    const info = await prisma.info.create({ data: emailsData });
    res.json({ status: 'uccess', data: info });
  } catch (error) {
    console.error('Error in /api/emails:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error', error: error.message });
  }
});

app.get('/api/emails', async (req, res) => {
  try {
    const infos = await prisma.info.findMany();
    res.json({ status: 'uccess', data: infos });
  } catch (error) {
    console.error('Error in /api/emails:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error', error: error.message });
  }
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});