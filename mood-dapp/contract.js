// contract.js
export const MoodContractAddress = "0xCe197ec7170e85735Bd4fe92bFfc8041eFEA7aF2";

export const MoodContractABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_mood",
        "type": "string"
      }
    ],
    "name": "setMood",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMood",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];