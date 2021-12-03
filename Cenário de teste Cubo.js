describe('home page',()=>{
    it('App deve estar on line', ()=>{
        cy.viewport(1440, 900);
        cy.visit('https://buger-eats.vercel.app/');
		cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats');
    });
});

describe('Validar cadastro', ()=>{
	it('Validar pagina de cadastrar entregador',()=>{
		cy.viewport(1440, 900);
        cy.visit('https://buger-eats.vercel.app/');
		cy.get('a[href="/deliver"]').click();
		cy.get('#page-deliver main h1').should('have.text', 'Cadastre-se para  fazer entregas');
	});
});

describe('Preencher Cadastro', ()=>{
	it('Preencher dados',()=>{
		cy.viewport(1440, 900);
		cy.visit('https://buger-eats.vercel.app/');
		cy.get('[name="name"]').type('Entregador teste');
		cy.get('[name="cpf"]').type('77980413032');
		cy.get('[name="email"]').type('entregador1@teste.com.br');
		cy.get('[name="whatsapp"]').type('21999998888');
		cy.get('[placeholder="CEP"]').type('21310310');
		cy.get('[value="Buscar CEP"]').click();
        cy.get('[name="address-number"]').type('94');
		cy.get('[name="address-details"]').type('Bloco 2, APT 110');
		cy.get('[alt="Bicicleta"]').click();
		cy.get('[class="dropzone"]').click();
		cy.get('input').type('https://s2.glbimg.com/IJGc_Gg52y4cHAC7S65HS3k7qXE=/0x0:400x283/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/B/y/SaMJ6lSxCDVjlm98drxQ/2015-04-08-cnh-bean.jpg');
		cy.get('[class="button-success"]').click();        	
		
	});
});
