# firts-dapp

A simple Ethereum dApp that lets users get and set a "mood" string on a blockchain smart contract. This project is beginner-friendly and demonstrates the basics of connecting a web page to a smart contract using only a single HTML file.

## Features

- Connects to Ethereum via MetaMask
- Reads and writes mood values to a smart contract
- All logic contained in `index.html` for easy learning

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for running a local server, optional)
- [MetaMask](https://metamask.io/) browser extension
- An Ethereum wallet with Sepolia testnet access
- A deployed Mood smart contract (see below)

### Usage

1. **Clone this repository:**
    ```bash
    git clone https://github.com/Skamina/firts-dapp.git
    cd firts-dapp
    ```

2. **Deploy the Mood Smart Contract:**
    - Use Solidity/Remix/Hardhat to deploy a contract with `getMood` and `setMood` methods to Sepolia or another testnet.
    - Copy the deployed contract address and ABI.

3. **Edit `index.html`:**
    - Replace the placeholder values for `MoodContractAddress` and `MoodContractABI`:
      ```js
      const MoodContractAddress = "..."; // your deployed address here
      const MoodContractABI = [ ... ];   // your contract ABI here
      ```

4. **Run the App:**
    - Open `index.html` directly in your browser, or
    - Serve with a local server (for best MetaMask compatibility):
      ```bash
      npx serve .
      # or
      python -m http.server
      ```
    - Connect MetaMask to the Sepolia testnet and refresh the page.

5. **Interact:**
    - Enter a mood and use the "Set Mood" and "Get Mood" buttons.

## File Structure

```
firts-dapp/
└── index.html     # All code and UI is in this file
```

## Customization

- You can expand functionality by editing or extending `index.html`.
- Replace the ABI and address to connect to your own contracts.

## License

MIT License (add a LICENSE file as needed).

---

**Happy hacking your first dApp!**
