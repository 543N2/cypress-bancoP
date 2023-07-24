
Cypress.Commands.add('visitarLaTienda', () => {
    cy.log(`Ingresando a la tienda...`)
    cy.visit('http://opencart.abstracta.us/')
    cy.log(`Se ha ingresado a la tienda.`)
})

Cypress.Commands.add('agregarAlCarrito', (product) => {
    cy.log(`Agregando ${product} al carrito de compras...`)
    cy.selectProduct(product)
    cy.fillProductInfo(product)
    cy.clickAddToCartButton()
    cy.validateAddedProduct(product)
    cy.clickHomeBreadcrumb()
    cy.log(`${product} agregado al carrito de compras.`)
})

Cypress.Commands.add('visualizarCarrito', () => {
    cy.log(`Ingresando al carrito de compras...`)
    cy.clickCartButton()
    cy.clickViewCartButton()
    cy.log(`El carrito de compras fue mostrado.`)
})

Cypress.Commands.add('completarCheckoutDeInvitado', (buyerName) => {
    cy.log(`Iniciando el proceso de Checkout de invitado...`)
    cy.clickCheckoutButton()
    cy.fillCheckoutOptions()
    cy.fillBillingDetails(buyerName)
    cy.fillDeliveryMethod()
    cy.fillPaymentMethod()
    cy.log(`Completado el proceso de Checkout de invitado.`)
})

Cypress.Commands.add('finalizarLaCompra', () => {
    cy.log(`Finalizando el proceso de compra...`)
    cy.confirmOrder()
    cy.validatePlacedOrder()
    cy.log(`Proceso de compra finalizado.`)
})