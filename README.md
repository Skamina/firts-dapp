# firts-dapp

A beginner-friendly Ethereum decentralized application (dApp) that allows users to set and get a "mood" string stored on a blockchain smart contract. This project demonstrates the basics of connecting a web interface to an Ethereum smart contract using MetaMask.

## Features

- Connects to Ethereum via MetaMask
- Reads and writes mood values to a smart contract
- Simple, minimal codebase for learning

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (optional, for running a local server)
- [MetaMask](https://metamask.io/) browser extension
- An Ethereum wallet with access to the Sepolia testnet (or other supported testnet)
- A deployed Mood smart contract (instructions below)

### Usage

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Skamina/firts-dapp.git
    cd firts-dapp
    ```

2. **Deploy the Mood Smart Contract:**
    - Use Remix, Hardhat, or another tool to deploy a Solidity contract with `getMood` and `setMood` functions to the testnet of your choice (e.g., Sepolia).
    - Save your contract’s deployed address and ABI.

3. **Configure the Application:**
    - Open `index.html` or `mood.dapp/contract.js` in a code editor.
    - Replace the placeholder values for the contract address and ABI:
      ```js
      // In contract.js
      export const MoodContractAddress = "..."; // your deployed contract address
      export const MoodContractABI = [ ... ];   // your contract ABI
      ```

4. **Run the App:**
    - Serve the directory locally for best MetaMask compatibility:
      ```bash
      npx serve .
      # or
      python -m http.server
      ```
    - Ensure your MetaMask is set to the Sepolia testnet, then open `index.html` in your browser and refresh the page.

5. **Interact:**
    - Enter a mood and use the "Set Mood" and "Get Mood" buttons to interact with the contract.

## File Structure

```
firts-dapp/
├── index.html
└── mood.dapp/
    ├── app.js         # Contains all blockchain logic, imports contract information
    ├── contract.js    # Exports ABI and contract address for clarity
    └── style.css      # Basic styling for a pleasant UI
```

- The HTML file links to the CSS and JavaScript modules.
- The ABI and contract address are exported from `contract.js` for clarity.
- All blockchain logic is in `app.js`, which imports the contract info.
- The CSS file (`style.css`) contains basic styling for a pleasant user interface.
- You can place all files in the same directory and open `index.html` in your browser (served with a local server) for everything to work correctly.

## Customization

- Expand or modify the dApp by editing the source files in `mood.dapp`
- Connect to your own smart contract by updating the contract address and ABI

## License

MIT License (add a LICENSE file if you want).

---

**Happy hacking your first dApp!**

## Author

Ibrahim Aliyu S Kamina
