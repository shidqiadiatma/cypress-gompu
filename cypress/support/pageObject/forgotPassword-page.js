class forgotPassword{
    go_to_forgotPassword_page(){
        cy.get('.text-right > a').click()
    }
    input_email(email){
        cy.xpath('//*[@id="__layout"]/div/div/div[2]/div[2]/div/main/form/input').type(email)
    }
    click_kirimLink_button(){
        cy.get('.btn-primary').click()
    }
    verify_failed_request_forgot_password(){
        cy.get('#swal2-title').should('have.text', 'Email tidak ditemukan!')
    }
    verify_success_request_forgot_password(){
        cy.get('#swal2-title').should('have.text', 'Email telah terkirim, silahkan cek email Anda!')
    }
    

}
export default forgotPassword
