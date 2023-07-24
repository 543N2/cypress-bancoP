import {user} from '../../data/user'

Cypress.Commands.add('sendUserCreationRequest', () => {
    cy.request({
        url: 'https://petstore.swagger.io/v2/user',
        method: 'POST',
        body: {
            "id": user.actual.id,
            "username": user.actual.username,
            "firstName": user.actual.firstName,
            "lastName": user.actual.lastName,
            "email": user.actual.email,
            "password": user.actual.password,
            "phone": user.actual.phone,
            "userStatus": user.actual.userStatus,
        }
    }).as('userCreationRequest')
})

Cypress.Commands.add('validateUserCreationRequest', () => {
    cy.get('@userCreationRequest').then(response => {
        cy.log(response)
        expect(response.status).to.be.eq(200)
        expect(response.body).to.have.property('code')
        expect(response.body).to.have.property('type')
        expect(response.body).to.have.property('message')
        expect(parseInt(response.body.message)).to.be.eq(user.actual.id)
    })
})

Cypress.Commands.add('sendGetUserRequest', () => {
    cy.request({
        url: `https://petstore.swagger.io/v2/user/${user.actual.username}`,
        method: 'GET',
    }).as('getUserRequest')
})

Cypress.Commands.add('validateGetUserRequest', () => {
    cy.get('@getUserRequest').then(response => {
        cy.log(response)
        expect(response.status).to.be.eq(200)
        expect(response.body.firstName).to.be.equal(user.actual.firstName)
        expect(response.body.lastName).to.be.equal(user.actual.lastName)
        expect(response.body.email).to.be.equal(user.actual.email)
    })
})

Cypress.Commands.add('sendUpdateUserRequest', () => {
    cy.request({
        url: `https://petstore.swagger.io/v2/user/${user.actual.username}`,
        method: 'PUT',
        body: {
            "id": user.modified.id,
            "username": user.modified.username,
            "firstName": user.modified.firstName,
            "lastName": user.modified.lastName,
            "email": user.modified.email,
            "password": user.modified.password,
            "phone": user.modified.phone,
            "userStatus": user.modified.userStatus,
        }
    }).as('updateUserRequest')
})

Cypress.Commands.add('validateUpdateUserRequest', () => {
    cy.get('@updateUserRequest').then(response => {
        cy.log(response)
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('code')
        expect(response.body).to.have.property('type')
        expect(response.body).to.have.property('message')
        expect(parseInt(response.body.message)).to.be.equal(user.modified.id)
    })
})

Cypress.Commands.add('sendGetUpdatedUserRequest', () => {
    cy.request({
        url: `https://petstore.swagger.io/v2/user/${user.modified.username}`,
        method: 'GET',
    }).as('validateGetUpdatedUserRequest')

})

Cypress.Commands.add('validateGetUpdatedUserRequest', () => {
    cy.get('@validateGetUpdatedUserRequest').then(response => {
        cy.log(response)
        expect(response.status).to.be.eq(200)
        expect(response.body.firstName).to.be.equal(user.modified.firstName)
        expect(response.body.lastName).to.be.equal(user.modified.lastName)
        expect(response.body.email).to.be.equal(user.modified.email)
    })
})

Cypress.Commands.add('sendDeleteUpdatedUserRequest', () => {
    cy.request({
        url: `https://petstore.swagger.io/v2/user/${user.modified.username}`,
        method: 'DELETE'
    }).as('deleteUpdatedUserRequest')
})

Cypress.Commands.add('validateDeleteUpdatedUserRequest', () => {
    cy.get('@deleteUpdatedUserRequest').then(response => {
        cy.log(response)
        expect(response.status).to.be.eq(200)
        expect(response.body.message).to.be.equal(user.modified.username)
    })
})




