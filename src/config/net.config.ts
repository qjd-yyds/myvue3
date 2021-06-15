export interface NetworkConfig {
  host?: string;
  timeout: number;
}
// http配置
const networkConfig: NetworkConfig = {
  host: process.env.VUE_APP_BASE_API,
  timeout: 10000,
};

export default networkConfig;
