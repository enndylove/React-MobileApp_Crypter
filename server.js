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

/**
 * Creates a new user profile.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 *
 * @example
 * // Request body
 * {
 *   "walletAddress": "0x1234567890abcdef",
 *   "walletAddressClip": "0x1234567890abcdef",
 *   "walletBalance": 100,
 *   "walletUSDTBalance": 50,
 *   "walletName": "John Doe",
 *   "walletTagName": "johndoe",
 *   "walletStatus": "active"
 * }
 *
 * // Response
 * {
 *   "status": "success"
 * }
 */
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

/**
 * Retrieves a user profile by address.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 *
 * @example
 * // Request query
 * {
 *   "address": "0x1234567890abcdef"
 * }
 *
 * // Response
 * {
 *   "id": 1,
 *   "address": "0x1234567890abcdef",
 *   "addressClip": "0x1234567890abcdef",
 *   "balance": 100,
 *   "usdtbalance": 50,
 *   "name": "John Doe",
 *   "tagname": "johndoe",
 *   "status": "active"
 * }
 */
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

/**
 * Creates multiple owned NFTs.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 *
 * @example
 * // Request body
 * [
 *   {
 *     "id": 1,
 *     "name": "NFT 1",
 *     "description": "This is NFT 1"
 *   },
 *   {
 *     "id": 2,
 *     "name": "NFT 2",
 *     "description": "This is NFT 2"
 *   }
 * ]
 *
 * // Response
 * {
 *   "status": "success"
 * }
 */
app.post('/owned/profile', async (req, res) => {
  try {
    const nftsData = req.body;
    await prisma.owned.createMany({ data: nftsData });
    res.json({ status: 'success' });
  } catch (error) {
    console.error('Error in /owned/profile:', error);
    res.status(500).json({ status: 'error' });
  }
});

/**
 * Retrieves all owned NFTs.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 *
 * @example
 * // Response
 * [
 *   {
 *     "id": 1,
 *     "name": "NFT 1",
 *     "description": "This is NFT 1"
 *   },
 *   {
 *     "id": 2,
 *     "name": "NFT 2",
 *     "description": "This is NFT 2"
 *   }
 * ]
 */
app.get('/owned/profile', async (req, res) => {
  try {
    const ownedData = await prisma.owned.findMany();
    res.json(ownedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

/**
 * Creates multiple collection NFTs.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 *
 * @example
 * // Request body
 * [
 *   {
 *     "id": 1,
 *     "name": "NFT 1",
 *     "description": "This is NFT 1"
 *   },
 *   {
 *     "id": 2,
 *     "name": "NFT 2",
 *     "description": "This is NFT 2"
 *   }
 * ]
 *
 * // Response
 * {
 *   "status": "success"
 * }
 */
app.post('/collections/profile', async (req, res) => {
  try {
    const nftsData = req.body;
    await prisma.collections.createMany({ data: nftsData });
    res.json({ status: 'success' });
  } catch (error) {
    console.error('Error in /collections/profile:', error);
    res.status(500).json({ status: 'error' });
  }
});

/**
 * Retrieves all collection NFTs.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 *
 * @example
 * // Response
 * [
 *   {
 *     "id": 1,
 *     "name": "NFT 1",
 *     "description": "This is NFT 1"
 *   },
 *   {
 *     "id": 2,
 *     "name": "NFT 2",
 *     "description": "This is NFT 2"
 *   }
 * ]
 */
app.get('/collections/profile', async (req, res) => {
  try {
    const collectionsData = await prisma.collections.findMany();
    res.json(collectionsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

/**
 * Creates a new email info.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 *
 * @example
 * // Request body
 * {
 *   "email": "john.doe@example.com"
 * }
 *
 * // Response
 * {
 *   "status": "success",
 *   "data": {
 *     "id": 1,
 *     "email": "john.doe@example.com"
 *   }
 * }
 */
app.post('/api/emails', async (req, res) => {
  try {
    const emailsData = req.body;
    const info = await prisma.info.create({ data: emailsData });
    res.json({ status: 'success', data: info });
  } catch (error) {
    console.error('Error in /api/emails:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error', error: error.message });
  }
});

/**
 * Retrieves all email infos.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 *
 * @example
 * // Response
 * {
 *   "status": "success",
 *   "data": [
 *     {
 *       "id": 1,
 *       "email": "john.doe@example.com"
 *     },
 *     {
 *       "id": 2,
 *       "email": "jane.doe@example.com"
 *     }
 *   ]
 * }
 */
app.get('/api/emails', async (req, res) => {
  try {
    const infos = await prisma.info.findMany();
    res.json({ status: 'success', data: infos });
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