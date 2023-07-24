import './commands/ui/interactions'
import './commands/ui/steps'
import './commands/api/requests'
import './commands/api/steps'
import 'cypress-mochawesome-reporter/register'


Cypress.on('uncaught:exception', () => {
    return false;
});
