/// <reference types="Cypress" />

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

    describe('cuadros aleatorios', () => {

        it("asegura 12 cuadros", () => {
            cy.get(".cuadro").should("be.length", "12")
        })

        it("asegura que sean aleatorios", () => {
            let primerosCuadros = [];
            cy.get(".cuadro").then((cuadros) => {
                

                cuadros.each(function(i, cuadro) {
                    primerosCuadros.push(cuadro.className)
                })
            })

            cy.visit(URL);

            let cuadrosNuevos = []
            cy.get(".cuadro").then(nuevosCuadros => {
                nuevosCuadros.each(function(i,cuadro) {
                    nuevosCuadros.push(cuadro.className)
                })
            })

            cy.wrap(primerosCuadros).should('not.deep.equal', cuadrosNuevos);
        })
            
    })

    describe("resuelve el juego", () => {
        let mapaDePares, listaDePares;

        it("cuadros erroneos", () => {

            cy.get(".cuadro").then((cuadros) => {

                mapaDePares = obtenerParesDeCuadros(cuadros);

                listaDePares = Object.values(mapaDePares);
                console.log(listaDePares);

                cy.get(listaDePares[0][0]).click();
                cy.get(listaDePares[1][0]).click();

                cy.get(".cuadro").should('have.length', 12)

            })
        })

        it('resuelve el juego', () => {

            console.log(listaDePares)
            listaDePares.forEach((par) => {
                cy.get(par[0]).click();
                cy.get(par[1]).click();
            });

            cy.get(".cuadro").should('have.length', 0);

            cy.get('.tablero').should('not.be.visible')
        })
    })

})

function obtenerParesDeCuadros(cuadros) {
    const pares = {};
  
    cuadros.each((i, cuadro) => {
      //notar que hay un espacio después de h-100
      //amarillo
      const claseColor = cuadro.className.replace('cuadro h-100 ', '');
  
      if (pares[claseColor]) {
        pares[claseColor].push(cuadro);
      } else {
        pares[claseColor] = [cuadro];
      }
      
      
    })
    console.log(pares)
    return pares
}