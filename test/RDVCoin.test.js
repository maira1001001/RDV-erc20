const RDVCoin = artifacts.require('RDVCoin');
const { expectRevert } = require('@openzeppelin/test-helpers');

contract("RDVCoin Contract", (accounts)=>{
    before(async () => {
        RDVCoinInstance = await RDVCoin.deployed();
    });

    describe('As a the owner', () =>{
        it('can create the coin with a given total supply', async() => {
            const balance = await RDVCoinInstance.getTotalBalance();
            // expect(balance.words[0]).to.be.equal(0);
        });
        it('can burn an amount of my valid coins', async() => {
            const balance = await RDVCoinInstance.getTotalBalance();
            // expect(balance.words[0]).to.be.equal(0);
        });
        it('can not burn an amount of invalid coins', async() => {
            const balance = await RDVCoinInstance.getTotalBalance();
            // expect(balance.words[0]).to.be.equal(0);
            // burn amount > balanceOf
        });
    });

});