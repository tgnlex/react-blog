import type {HashKeyLength, HashIterCount, HashAlgorithm,} from '../../types';

const hash_iterations: HashIterCount = 320000;
const hash_length: HashKeyLength = 32
const hash_algorithm: HashAlgorithm = 'sha256';

type CryptoVariables = {
  iters: HashIterCount;
  len: HashKeyLength;
  alg: HashAlgorithm;
}

const crypto: CryptoVariables = {
  iters: hash_iterations, 
  len: hash_length, 
  alg: hash_algorithm
};

export default crypto;
export {CryptoVariables};