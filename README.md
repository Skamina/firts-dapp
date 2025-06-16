# firts-dapp

A simple decentralized application (dApp) project for learning and experimentation with blockchain technology and smart contracts.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## About

**firts-dapp** is a beginner-friendly project designed to help users understand the basic building blocks of decentralized applications. It demonstrates how to connect a frontend interface to a smart contract deployed on a blockchain network.

## Features

- Basic smart contract implementation
- Simple frontend for interacting with the contract
- Example transactions (such as reading/writing data)
- Modern tooling for blockchain development

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [MetaMask](https://metamask.io/) or another web3 wallet
- [Hardhat](https://hardhat.org/) or [Truffle](https://www.trufflesuite.com/) (if using for smart contract development)

### Installation

Clone the repository:

```bash
git clone https://github.com/Skamina/firts-dapp.git
cd firts-dapp
```

Install dependencies:

```bash
npm install
# or
yarn install
```

### Configuration

1. Configure your blockchain network settings (e.g., in `hardhat.config.js` or `truffle-config.js`).
2. Deploy the smart contract locally or to a testnet.

### Running the App

Start the development server:

```bash
npm start
# or
yarn start
```

Open your browser and connect your wallet (e.g., MetaMask) to the network where your contract is deployed.

## Project Structure

```
firts-dapp/
├── contracts/         # Smart contracts
├── src/               # Frontend source code
├── scripts/           # Deployment and utility scripts
├── test/              # Contract tests
├── package.json
└── README.md
```

## Usage

- Deploy the contract to your chosen network
- Start the frontend and interact with the contract from your browser

## Development

1. Modify smart contracts in the `contracts/` directory
2. Run tests using `npx hardhat test` or your preferred framework
3. Update frontend logic in the `src/` directory

## Contributing

Contributions, issues, and feature requests are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy building your first dApp!**
