import { ThirdwebProvider, ConnectWallet } from '@3rdweb/react';
import './App.css';
import DropClaim from './dropclaim';

const supportedChainIds = [1, 4, 137, 250, 43114, 80001];
const connectors = {
  injected: {},
  magic: {
  },
  walletconnect: {},
  walletlink: {
    appName: "thirdweb - demo",
    url: "https://thirdweb.com",
    darkMode: false,
  },
};

function ExampleApp() {
  return (
    <ThirdwebProvider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <ConnectWallet />
      <DropClaim />
    </ThirdwebProvider>
  );
}
export default ExampleApp;