class updateProfile{
    go_to_UpdateProfile_page(){
        cy.get('.gap-14 > [href="/profile"]').click()
        cy.get(':nth-child(1) > .flex > .flex-auto').click()
    }
    do_clearAllDataProfile(){
        cy.xpath('//*[@id="__layout"]/div/div/form/input[1]').type(' ').clear()
        cy.xpath('//*[@id="__layout"]/div/div/form/input[2]').type(' ').clear()
        cy.get('.flex > .w-full').type(' ').clear()
        cy.get('input[type="date"]').click('').clear()
        cy.xpath('//*[@id="__layout"]/div/div/form/input[4]').type(' ').clear()
    }
    do_updateAllDataProfile(fileImage, fullNameUpdate, emailUpdate, noPhoneUpdate, gender, dateUpdate, cityUpdate){
        cy.get('.pt-4').selectFile(fileImage)
        cy.xpath('//*[@id="__layout"]/div/div/form/input[1]').clear().type(fullNameUpdate)
        cy.xpath('//*[@id="__layout"]/div/div/form/input[2]').clear().type(emailUpdate)
        cy.get('.flex > .w-full').clear().type(noPhoneUpdate)
        cy.get('select.mt-3').select(gender)
        cy.get('input[type="date"]').type(dateUpdate)
        cy.xpath('//*[@id="__layout"]/div/div/form/input[4]').clear().type(cityUpdate)
    }
    verify_failed_updateProfile(){
        cy.get('#swal2-title').should('have.text', "Full name can't be blank")
    }
    verify_success_updateProfile(){
        cy.get('#swal2-title').should('have.text', "Detail user berhasil diperbarui")
    }
    clickSave_button(){
        cy.get('.btn-primary').click()
    }
}
export default updateProfile


