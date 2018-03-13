//https://github.com/ZoZoCoin/ZoZo-blockchain/blob/master/src/chainparams.cpp

var common = {
    name: 'zozocoin',
    unit: 'ZZC'
  }
  
  var main = Object.assign({}, {
    hashGenesisBlock: '000000000000024b89b42a942fe0d9fea3bb44ab7bd1b19115dd6a759c0808b8',
    port: 19995,
    protocol: {
      magic: 0xcee2caff
    },

    seedsDns: [
      // 'dnsseed.zozocoin.org',
      // 'dnsseed.zozocoindot.io',
      // 'dnsseed.masternode.io',
      // 'dnsseed.zozocoinpay.io'
      'seed.zozocoins.com'
    ],
    versions: {
      bip32: {
        private: 0x0488ADE4,      // EXT_SECRET_KEY 0x04 0x88 0xAD 0xE4 
        public: 0x0488B21E        // EXT_PUBLIC_KEY 0x04 0x88 0xB2 0x1E
      },
      bip44: 1,
      private: 0x4c,        //  1,76
      public: 0x10,         //  1,16
      scripthash: 0xcc      //   1,204    
    }
  }, common)
  
  var test = Object.assign({}, {
    hashGenesisBlock: '00000559942ead693874f5b639d7152fde8c40015ea0885add2814d167eb504c',
    versions: {
      bip44: 1,
      private: 0x8c,        //  1,140
      public: 0x13,         //  1,19
      scripthash: 0xef      //   1,239
    }
  }, common)
  

  var regtest = Object.assign({}, {
    hashGenesisBlock: '7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    port: 19111,
    protocol: {
      magic: 0xfcc1b7dc
    },
    seedsDns: [],
    versions: {
      bip32: {
        private: 0x04358394,
        public: 0x043587cf
      },
      bip44: 1,
      private: 0x8c,        //  1,140
      public: 0x13,         //  1,19
      scripthash: 0xef      //   1,239
    }
  }, common)

  module.exports = {
    main: main,
    test: test,
    regtest:regtest
  }
  