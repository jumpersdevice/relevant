export const envTypes = {
  SERVER: 'SERVER',
  WEB: 'WEB',
  NATIVE: 'NATIVE'
};

export const getEnv = () => {
  if (typeof document !== 'undefined') return envTypes.WEB;
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative')
    return envTypes.NATIVE;
  return envTypes.SERVER;
};

export const isNative = () => getEnv() === envTypes.NATIVE;
export const isWeb = () => getEnv() === envTypes.WEB;
export const isServer = () => getEnv() === envTypes.SERVER;
