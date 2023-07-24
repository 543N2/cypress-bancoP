import { locator } from '../../locators'

Cypress.Commands.add('selectProduct', function (product) {
    cy.contains(product)
        .click()
})

Cypress.Commands.add('fillProductInfo', function (product) {
    if (product === 'Canon EOS 5D') {
        cy.get(locator.productPage.colorDropdown)
            .select('Red')
            .should('have.value', 15)
    }
})

Cypress.Commands.add('clickAddToCartButton', function () {
    cy.get(locator.productPage.addToCartButton)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('validateAddedProduct', function (product) {
    cy.get(locator.productPage.addedAlert)
        .should('be.visible')
        .and('contain', `Success: You have added ${product}`)
})

Cypress.Commands.add('clickHomeBreadcrumb', function () {
    cy.get(locator.breadcrumb.home)
        .click({force: true})
})

Cypress.Commands.add('clickCartButton', function () {
    cy.get(locator.header.cartButton)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('clickViewCartButton', function () {
    cy.get(locator.cartMenu.dropdown)
        .should('be.visible')
        .as('dropdown')
    cy.get('@dropdown')
        .find('strong')
        .contains('View Cart')
        .click()
})

Cypress.Commands.add('clickCheckoutButton', function () {
    cy.url()
        .should('be.equal', 'http://opencart.abstracta.us/index.php?route=checkout/cart')
    cy.get(locator.cartPage.checkoutButton)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('fillCheckoutOptions', function () {
    cy.origin('https://opencart.abstracta.us', { args: { locator } }, function ({ locator }) {
        cy.get(locator.checkoutOptionsPage.guestRadiobutton)
            .should('be.visible')
            .check()
        cy.get(locator.checkoutOptionsPage.continueButton)
            .should('be.visible')
            .click()
    })
})

Cypress.Commands.add('fillBillingDetails', function (buyerName) {
    cy.origin(
        'https://opencart.abstracta.us'
        , {
            args: {
                locator,
                buyerName
            }
        },
        function ({
            locator,
            buyerName
        }) {
            cy.fixture("buyers").then(buyer => {
                cy.get(locator.billingDetailsPage.firstnameInput)
                    .should('be.visible')
                    .type(buyer[buyerName].firstName)
                cy.get(locator.billingDetailsPage.lastnameInput)
                    .should('be.visible')
                    .type(buyer[buyerName].lastName)
                cy.get(locator.billingDetailsPage.emailInput)
                    .should('be.visible')
                    .type(buyer[buyerName].email)
                cy.get(locator.billingDetailsPage.telephoneInput)
                    .should('be.visible')
                    .type(buyer[buyerName].telephone)
                cy.get(locator.billingDetailsPage.address1Input)
                    .should('be.visible')
                    .type(buyer[buyerName].address1)
                cy.get(locator.billingDetailsPage.cityInput)
                    .should('be.visible')
                    .type(buyer[buyerName].city)
                cy.get(locator.billingDetailsPage.postcodeInput)
                    .should('be.visible')
                    .type(buyer[buyerName].postcode)
                cy.get(locator.billingDetailsPage.countryDropdown)
                    .should('be.visible')
                    .select(buyer[buyerName].country)
                cy.get(locator.billingDetailsPage.zoneInput)
                    .should('be.visible')
                    .select(buyer[buyerName].zone)
                cy.get(locator.billingDetailsPage.continueButton)
                    .should('be.visible')
                    .click()
            })
        })
})

Cypress.Commands.add('fillDeliveryMethod', function () {
    cy.origin('https://opencart.abstracta.us', { args: { locator } }, function ({ locator }) {
        cy.get(locator.deliveryMethodPage.continueButton)
            .should('be.visible')
            .click()
    })
})

Cypress.Commands.add('fillPaymentMethod', function () {
    cy.origin('https://opencart.abstracta.us', { args: { locator } }, function ({ locator }) {
        cy.get(locator.paymentMethodPage.agreeCheckbox)
            .should('be.visible')
            .check()
        cy.get(locator.paymentMethodPage.continueButton)
            .click()
    })
})

Cypress.Commands.add('confirmOrder', function () {
    cy.origin('https://opencart.abstracta.us', { args: { locator } }, function ({ locator }) {
        cy.get(locator.confirmOrderPage.confirmButton)
            .click()
    })
})

Cypress.Commands.add('validatePlacedOrder', function () {
    cy.get(locator.successfulPurchasePage.placedOrderH1)
        .should('contain', 'Your order has been placed!')
})
