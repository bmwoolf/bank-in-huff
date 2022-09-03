let Web3 = require("web3");

function getMethodSign(name, ...params) {
    return Web3.utils.sha3(`${name}(${params.join(',')})`).substr(0, 10)
  }

function getMethodHash(name, ...params) {
    return Web3.utils.sha3(`${name}(${params.join(',')})`)
  }
  
  const writeMethodSig = getMethodSign('withdraw', 'uint256');
  console.log(writeMethodSig)
  const writeMethodSig2 = getMethodSign('wire', 'address');
  console.log(writeMethodSig2)
  const writeMethodSig3 = getMethodSign('getBalance');
  console.log(writeMethodSig3)

  // const checkMethodHash = getMethodHash('withdraw', 'address', 'uint256');
  // console.log(checkMethodHash)
  
  // const checkMethodHash2 = getMethodHash('wire', 'address', 'address', 'uint256');
  // console.log(checkMethodHash2)
