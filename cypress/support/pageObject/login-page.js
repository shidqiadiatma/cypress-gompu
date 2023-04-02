class login{
    go_to_login_page(){
        cy.get('div.gap-2 > .font-medium').click()
    }
    input_email(email){
        cy.get('input.border').type(email)
    }
    input_password(password){
        cy.get('.grid > .flex > .w-full').type(password)
    }
    clickButton_masuk(){
        cy.get('.btn-primary').click()
        cy.wait(1)
    }
    verify_failed_login_using_unregisteredEmail(){
        cy.get('#swal2-title').should('have.text', 'User tidak ditemukan!')
    }
    verify_failed_login_using_wrongPassword(){
        cy.get('#swal2-title').should('have.text', 'Email atau kata sandi tidak cocok')
    }
    verify_success_login_using_validCredential(){
        cy.get('#swal2-title').should('have.text', 'Berhasil Masuk!')
    }
    precondition_successLogin() {
        cy.get('input.border').type('shidqiadiatma@dispostable.com')
        cy.get('.grid > .flex > .w-full').type('passwordBenar12*')
        cy.get('.btn-primary').click()
        cy.wait(1)
        cy.get('#swal2-title').should('have.text', 'Berhasil Masuk!')
        cy.get('.swal2-confirm').click()
    }
}
export default login