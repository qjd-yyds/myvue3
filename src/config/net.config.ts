export interface NetworkConfig {
  host?: string;
  timeout: number;
}

const networkConfig: NetworkConfig = {
  host: process.env.VUE_APP_BASE_API,
  timeout: 10000,
};

export default networkConfig;
