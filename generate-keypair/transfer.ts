// import {
//     Connection,
//     Transaction,
//     SystemProgram,
//     sendAndConfirmTransaction,
//     PublicKey,
//   } from "@solana/web3.js";

import * as web3 from '@solana/web3.js';

import dotenv from "dotenv";

dotenv.config();

import { getKeypairFromEnvironment } from "@solana-developers/helpers";
   
const suppliedToPubkey = process.argv[2] || null;
   
if (!suppliedToPubkey) {
    console.log(`Please provide a public key to send to`);
    process.exit(1);
}
   
const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
   
console.log(`suppliedToPubkey: ${suppliedToPubkey}`);
   
const toPubkey = new web3.PublicKey(suppliedToPubkey);
   
const connection = new web3.Connection("https://api.devnet.solana.com", "confirmed");
   
console.log(
  `✅ Loaded our own keypair, the destination public key, and connected to Solana`,
);