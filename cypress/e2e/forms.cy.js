describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Test Subscribe Form', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('ishirapt@gmail.com')
        cy.contains(/Successfully subbed: ishirapt@gmail.com/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: ishirapt@gmail.com/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: ishirapt@gmail.com/i).should('not.exist')
    
        cy.get('@subscribe-input').type('ishirapt@gmail.io')
        cy.contains(/Invalid email: ishirapt@gmail.io/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Invalid email: ishirapt@gmail.io/i).should('exist')
        cy.wait(3000)
        cy.contains(/Invalid email: ishirapt@gmail.io/i).should('not.exist')
        
        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')  
    })
})