class login{
    go_to_login_page(){
        cy.get('div.gap-2 > .font-medium').click()
    }

}
export default login