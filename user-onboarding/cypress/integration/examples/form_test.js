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
    const checkboxInput = () => cy.get('[type = checkbox]')
    const submitButton= ()=> cy.get (`button[id="submitButton"]`)

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
    describe('testing the terms agreement checkbox',()=>{
        it('should test if the checkbox checks or unchecks', ()=>{
            checkboxInput().check()
            checkboxInput().uncheck()
        })
    })
    describe('testing to see if we can submit a filled out form', ()=>{
        it('should fill out and submit the form',()=>{
            nameInput().type('This is my first and last name')
            emailInput().type('myemailis@somehere.com')
            passwordInput().type('********')
            checkboxInput().check()
            submitButton().click()
        })
    })
    describe('this test should fail, we will try to submit with out adding all of the feilds',()=>{
        it('should fail, and leave a field blank',()=>{
            nameInput().type('This is my first and last name')
            emailInput().type('myemailis@somehere.com')
            passwordInput().type('********')
            checkboxInput().check()
            checkboxInput().uncheck()
            submitButton().click()
        })
    })
})