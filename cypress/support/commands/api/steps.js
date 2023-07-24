
Cypress.Commands.add('crearUsuario', () => {
    cy.sendUserCreationRequest()
    cy.validateUserCreationRequest()
})

Cypress.Commands.add('obtenerUsuarioCreado', () => {
    cy.sendGetUserRequest()
    cy.validateGetUserRequest()
})

Cypress.Commands.add('actualizarUsuario', () => {
    cy.sendUpdateUserRequest()
    cy.validateUpdateUserRequest()
})

Cypress.Commands.add('obtenerUsuarioActualizado', () => {
    cy.sendGetUpdatedUserRequest()
    cy.validateGetUpdatedUserRequest()
})

Cypress.Commands.add('eliminarUsuarioActualizado', () => {
    cy.sendDeleteUpdatedUserRequest()
    cy.validateDeleteUpdatedUserRequest()
})
