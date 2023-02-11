import * as IPFS from 'ipfs-core';

// spawn an ipfs node.
const node = await IPFS.create();

//? example : Qmbdp1gd89V1PSgDpcWvXTbv1ZDz93uPuk5ezoirnqRegE
const CID = "your-CID";


const chunks : Uint8Array[] = [];

//! get data chunks from ipfs and push to chunks array.
for await (const chunk of node.cat(CID)) {
  chunks.push(chunk);
}

//? log the data Retrieved from ipfs.
console.log("Retrieved file contents:", chunks.toString());
