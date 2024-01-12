/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir um contato', () => {
        cy.get('.contato').then((list) => {
            const count = list.length
            cy.get('input[type="text"]').type('Alan Santos')
            cy.get('input[type="email"]').type('alanmdsan@gmail.com')
            cy.get('input[type="tel"]').type('32 98460-4379')
            cy.get('.adicionar').click()
            cy.get('.contato').should('have.length', count + 1)
        })
    })
    
    it('Deve alterar um contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Gian Souza')
        cy.get('.alterar').click()
        
        cy.get('ul > li').first().should('have.text', 'Gian Souza')
    })
    
    it('Deve remover um contato', () => {
        cy.get('.contato').then((list) => {
            const count = list.length
            cy.get('.delete').first().click()
            cy.get('.contato').should('have.length', count - 1)
        })
    })
})