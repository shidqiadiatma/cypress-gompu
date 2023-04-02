
class updateProfile{
    go_to_profile_page(){
        cy.get('.gap-14 > [href="/profile"]').click()
    }
    go_to_updateProfile_page(){
        cy.get(':nth-child(1) > .flex > .flex-auto').click()
    }
    clear_fullName(){
        cy.xpath('//*[@id="__layout"]/div/div/form/input[1]').type(' ').clear()
    }
    clear_email(){
        cy.xpath('//*[@id="__layout"]/div/div/form/input[2]').type(' ').clear()
    }
    clear_noHandphone(){
        cy.xpath('//*[@id="__layout"]/div/div/form/div/input').type(' ').clear()
    }
    clear_tanggalLahir(){
        cy.xpath('//*[@id="__layout"]/div/div/form/input[3]').click('').clear()
    }
    clear_kota(){
        cy.xpath('//*[@id="__layout"]/div/div/form/input[4]').type(' ').clear()
    }
    clickSave_button(){
        cy.get('.btn-primary').click()
    }
    verify_failed_updateProfile(){
        cy.get('#swal2-title').should('have.text', "Full name can't be blank")
    }
    fill_fullName(fullNameUpdate){
        cy.xpath('//*[@id="__layout"]/div/div/form/input[1]').clear().type(fullNameUpdate)
    }
    fill_email(emailUpdate){
        cy.xpath('//*[@id="__layout"]/div/div/form/input[2]').clear().type(emailUpdate)
    }
    fill_noHandphone(noPhoneUpdate){
        cy.xpath('//*[@id="__layout"]/div/div/form/div/input').clear().type(noPhoneUpdate)
    }
    fill_tanggalLahir(dateUpdate){
        cy.xpath('//*[@id="__layout"]/div/div/form/input[3]').clear().click(dateUpdate)
    }
    fill_kota(cityUpdate){
        cy.xpath('//*[@id="__layout"]/div/div/form/input[4]').clear().type(cityUpdate)
    }

    verify_success_updateProfile(){
        cy.get('#swal2-title').should('have.text', "Detail user berhasil diperbarui")
    }
}
export default updateProfile


