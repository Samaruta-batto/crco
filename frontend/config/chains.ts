import { ChainInfo } from '@/types';

export const SUPPORTED_CHAINS: Record<string, ChainInfo> = {
  ethereum: {
    id: '0x1',
    name: 'Ethereum',
    rpcUrl: process.env.ETHEREUM_RPC_URL || '',
    explorerUrl: 'https://etherscan.io',
    tokenSymbol: 'CRCO',
    tokenAddress: process.env.NEXT_PUBLIC_ETHEREUM_TOKEN_ADDRESS ?? '',
    bridgeAddress: process.env.NEXT_PUBLIC_ETHEREUM_BRIDGE_ADDRESS ?? '',
    icon: '/chains/ethereum.svg',
    coingeckoId: 'ethereum',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    }
  },
  polygon: {
    id: '0x89',
    name: 'Polygon',
    rpcUrl: process.env.POLYGON_RPC_URL || '',
    explorerUrl: 'https://polygonscan.com',
    tokenSymbol: 'CRCO',
    tokenAddress: process.env.NEXT_PUBLIC_POLYGON_TOKEN_ADDRESS ?? '',
    bridgeAddress: process.env.NEXT_PUBLIC_POLYGON_BRIDGE_ADDRESS ?? '',
    icon: '/chains/polygon.png',
    coingeckoId: 'matic-network',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18
    }
  },
  bsc: {
    id: '0x38',
    name: 'BNB Smart Chain',
    rpcUrl: process.env.BSC_RPC_URL || '',
    explorerUrl: 'https://bscscan.com',
    tokenSymbol: 'CRCO',
    tokenAddress: process.env.NEXT_PUBLIC_BSC_TOKEN_ADDRESS ?? '',
    bridgeAddress: process.env.NEXT_PUBLIC_BSC_BRIDGE_ADDRESS ?? '',
    icon: '/chains/bsc.png',
    coingeckoId: 'binancecoin',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18
    }
  },
  avalanche: {
    id: '0xa86a',
    name: 'Avalanche',
    rpcUrl: process.env.AVALANCHE_RPC_URL || '',
    explorerUrl: 'https://snowtrace.io',
    tokenSymbol: 'CRCO',
    tokenAddress: process.env.NEXT_PUBLIC_AVALANCHE_TOKEN_ADDRESS ?? '',
    bridgeAddress: process.env.NEXT_PUBLIC_AVALANCHE_BRIDGE_ADDRESS ?? '',
    icon: '/chains/avalanche.svg',
    coingeckoId: 'avalanche-2',
    nativeCurrency: {
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: 18
    }
  }
};

export const CHAIN_ICONS = {
  ethereum: '/chains/ethereum.svg',
  polygon: '/chains/polygon.png',
  bsc: '/chains/bsc.png',
  avalanche: '/chains/avalanche.svg'
};

export const GAS_LIMIT_MULTIPLIER = 1.2;
export const MAX_APPROVAL_AMOUNT = '115792089237316195423570985008687907853269984665640564039457584007913129639935';
export const TRANSFER_RATE_LIMIT = 10; // transfers per minute
export const BATCH_TRANSFER_LIMIT = 20; // maximum items in a batch transfer
export const HIGH_VALUE_THRESHOLD = '1000000000000000000000'; // 1000 tokens