describe('Form test', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    });
    it('should do some basic math',()=>{
        expect(1+1).to.equal(2);
    })
    
})