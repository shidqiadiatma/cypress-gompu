class register{
    go_to_register_page() {
        cy.get('.text-center > .text-primary-color').click()
    }
    input_fullname(nama_lengkap){
        cy.get('[type="text"]').type(nama_lengkap)
    }
    input_email(email_pengguna){
        cy.get('[type="email"]').type(email_pengguna)
    }
    input_password(password_pengguna){
        cy.get('.grid > .flex > .w-full').type(password_pengguna)
    }
    clickButton_registrasi(){
        cy.get('.btn-primary').click()
    }
    verify_failed_register_using_registered_email(){
        cy.get('#swal2-title').should('have.text', 'Email has already been taken')

    }
    verify_failed_register_using_invalid_format_password(){
        cy.get('.text-red-400').should('have.text', 'Kata Sandi tidak valid!')
    }
    verify_success_register_using_valid_data(){
        cy.get('#swal2-title').should('have.text', 'Pendaftaran berhasil, harap verifikasi akun Anda!')
    }
    
}
export default register