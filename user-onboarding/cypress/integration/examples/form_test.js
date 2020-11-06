describe('Form test', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    });
    it('should do some basic math',()=>{
        expect(1+1).to.equal(2);
    })

    const nameInput = ()=> cy.get('input[name = name');
    const emailInput = () => cy.get('input[name = email]');
    const passwordInput = () => cy.get('input[name = password]');
    
    describe ('Testing Name Input',()=>{
        it('should fill in the name input',()=>{
            nameInput().should('have.value','')
            .type('My first name')
            .should('have.value','My first name')
        })
    })

    describe ("testing the email input field", ()=>{
        it('should fill in the email', ()=>{
            emailInput().should('have.value',"")
            .type('thisemail@somewhere.com')
            .should('have.value','thisemail@somewhere.com')
        })
    })
    describe('testing password input field',()=>{
        it('should fill in the password',()=>{
            passwordInput().should('have.value',"")
            .type('*******')
            .should('have.value','*******')
        })
    })
})