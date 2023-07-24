describe('Prueba funcional de automatizacion en UI', () => {
  
  beforeEach(() => {
    cy.visitarLaTienda()
  })

  it('Maria compra dos productos exitosamente', () => {
    cy.agregarAlCarrito('MacBook')
    cy.agregarAlCarrito('Canon EOS 5D')
    cy.visualizarCarrito()
    cy.completarCheckoutDeInvitado('Maria')
    cy.finalizarLaCompra()
  })

  it('Juan compra dos productos exitosamente', () => {
    cy.agregarAlCarrito('MacBook')
    cy.agregarAlCarrito('Canon EOS 5D')
    cy.visualizarCarrito()
    cy.completarCheckoutDeInvitado('Juan')
    cy.finalizarLaCompra()
  })

})