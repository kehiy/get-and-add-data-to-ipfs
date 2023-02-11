import * as IPFS from 'ipfs-core';

// spawn an ipfs node.
const ipfs = await IPFS.create();

// add the data to ipfs.
const data = await ipfs.add("this is a string we want add to IPFS.");

// print the CID (content identifier)
// something like this : Qmbdp1gd89V1PSgDpcWvXTbv1ZDz93uPuk5ezoirnqRegE
console.info(data.cid);
//! print all of data:
// console.log(data);