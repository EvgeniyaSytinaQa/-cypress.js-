describe('Автотесты на форму авторизации', function () {
    it('Верный логин,верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
})
 
     it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#forgotEmailButton').should('be.visible');
        cy.get('#forgotEmailButton').click();
        cy.get('#forgotForm > .header').should('be.visible');
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible');
        cy.get('#mailForgot').click();
        cy.get('#mailForgot').type('evgeniya.sytina@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); 
    })
    
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('evgeniya');
        cy.get('#loginButton').should('be.visible');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

    it('неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@doln.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.visible');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');


    })

    it('Логин без @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.visible');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

    it('строчные буквы', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.visible');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

    describe('Покупка аватара', function () {
        it('e2e тест на покупку нового аватара для тренера', function () {
             cy.visit('https://pokemonbattle.me/');
             cy.get(':nth-child(1) > .auth__input').type('evgeniya.sytina@mail.ru');
             cy.get('#password').type('Varvara13032014');
             cy.get('.auth__button').click();
             cy.get('.header__btns > [href="/shop"]').click();
             cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
             cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
             cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
             cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
             cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov');
             cy.get('.pay-btn').click();
             cy.get('#cardnumber').type('56456');
             cy.get('.payment__submit-button').click();
             cy.get('.payment__adv').click();
         })
     })
     
         
     












})


