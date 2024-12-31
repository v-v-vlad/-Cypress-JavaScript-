import * as data from "../helpers/Pokemonbattle.json"


describe('Pokemon_Battle', function () {

        it('Покупка нового аватара для тренера', function () {   
             cy.visit('https://pokemonbattle.ru/'); 
             cy.get(':nth-child(1) > .auth__input').type(data.email); 
             cy.get('#password').type(data.password); 
             cy.get('.auth__button').click({ force: true });
             cy.get('.header__container > .header__id').click();
             cy.wait(2000);
             cy.get('.trainer-img').invoke('attr', 'src').as("src1");
             cy.get('[href="/shop"]').click();
             cy.get('.available > button').first().click({ force: true });
             cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type(data.card); 
             cy.get(':nth-child(1) > .pay_base-input-v2').type(data.data); 
             cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type(data.cvv); 
             cy.get('.pay__input-box-last-of > .pay_base-input-v2').type(data.FI); 
             cy.get('.pay-btn').click();
             cy.get('#cardnumber').type(data.cod_sms); 
             cy.get('.payment__submit-button').click();
             cy.get('.payment__font-for-success').contains('Покупка прошла успешно').should('be.visible');  ;
             cy.get('.payment__adv').click();
             cy.get('.header__container > .header__id').click();
             cy.wait(3000);
             cy.get('.trainer-img').invoke('attr', 'src').then((nextSrc) => {expect(nextSrc).to.not.equal(this.src1)
              });
            });
    });   
