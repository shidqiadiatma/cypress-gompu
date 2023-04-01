class updateProfile{
    go_to_profile_page(){
        cy.get('.gap-14 > [href="/profile"]').click()
    }
    go_to_updateProfile_page(){
        cy.get(':nth-child(1) > .flex > .flex-auto').click()
    }
}
export default updateProfile


