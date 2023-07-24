export const locator = {
    productPage: {
        colorDropdown: 'select#input-option226',
        addToCartButton: '#button-cart',
        addedAlert: 'div.alert',
    },
    breadcrumb: {
        home: 'i.fa-home',
    },
    header: {
        cartButton: '#cart',
    },
    cartMenu: {
        dropdown: '.dropdown-menu.pull-right',
    },
    cartPage: {
        checkoutButton: '#content > div.buttons.clearfix > div.pull-right > a',
    },
    checkoutOptionsPage: {
        guestRadiobutton: 'input[value=guest]',
        continueButton: '#button-account',
    },
    billingDetailsPage: {
        firstnameInput: '#input-payment-firstname',
        lastnameInput: '#input-payment-lastname',
        emailInput: '#input-payment-email',
        telephoneInput: '#input-payment-telephone',
        address1Input: '#input-payment-address-1',
        cityInput: '#input-payment-city',
        postcodeInput: '#input-payment-postcode',
        countryDropdown: '#input-payment-country',
        zoneInput: '#input-payment-zone',
        continueButton: 'input#button-guest',
    },
    deliveryMethodPage: {
        continueButton: '#button-shipping-method',
    },
    paymentMethodPage: {
        agreeCheckbox: 'input[name=agree]',
        continueButton: '#button-payment-method',
    },
    confirmOrderPage: {
        confirmButton: '#button-confirm',
    },
    successfulPurchasePage: {
        placedOrderH1: '#content > h1',
    }
}