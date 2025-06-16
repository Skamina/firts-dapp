import {
  createWalletClient,
  custom,
  getContract,
} from "https://esm.sh/viem";
import { sepolia } from "https://esm.sh/viem/chains";
import { MoodContractAddress, MoodContractABI } from "./contract.js";

let getMood, setMood;

window.getMood = async function() {
  try {
    const walletClient = createWalletClient({
      chain: sepolia,
      transport: custom(window.ethereum),
    });
    const accounts = await walletClient.requestAddresses();
    const [address] = accounts;

    const MoodContractInstance = getContract({
      address: MoodContractAddress,
      abi: MoodContractABI,
      client: walletClient,
    });

    const mood = await MoodContractInstance.read.getMood();
    document.getElementById("showMood").innerText = `Your Mood: ${mood}`;
  } catch (error) {
    document.getElementById("showMood").innerText = "Failed to get mood.";
    console.error(error);
  }
}

window.setMood = async function() {
  try {
    const walletClient = createWalletClient({
      chain: sepolia,
      transport: custom(window.ethereum),
    });
    const accounts = await walletClient.requestAddresses();
    const [address] = accounts;

    const MoodContractInstance = getContract({
      address: MoodContractAddress,
      abi: MoodContractABI,
      client: walletClient,
    });

    const mood = document.getElementById("mood").value;
    await MoodContractInstance.write.setMood([mood], {
      account: address,
    });
    document.getElementById("showMood").innerText = "Mood set successfully!";
  } catch (error) {
    document.getElementById("showMood").innerText = "Failed to set mood.";
    console.error(error);
  }
}