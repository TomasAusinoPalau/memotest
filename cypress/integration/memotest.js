const URL = 'http://127.0.0.1:8080/';

context("Memotest", ( ) => {

    before(() => {
        cy.visit(URL)
    })

    describe('prueba', ( ) => { 
        it("asegura prueba", () => {
            console.log("prueba")
        })
    })

})