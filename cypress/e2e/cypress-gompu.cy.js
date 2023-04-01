import register from '../../cypress/support/pageObject/register-page'
import login from '../../cypress/support/pageObject/login-page'

/*describe('feature-registration', () => {  
    const Register = new register()
    const Login = new login()
    beforeEach(() => {
        cy.visit('/')
        Login.go_to_login_page()
        Register.go_to_register_page()
    })
    it('TC01-Pengguna gagal registrasi menggunakan email terdaftar', () => {

        Register.input_fullname('Samsudin')
        Register.input_email('testingweb@dispostable.com')
        Register.input_password('passwordBenar12*')
        Register.clickButton_registrasi()
        Register.verify_failed_register_using_registered_email()
    })
    it('TC02-Pengguna gagal registrasi menggunakan format password yang salah', () => {
        Register.input_fullname('Samsudin')
        Register.input_email('testingwebafsasf@dispostable.com')
        Register.input_password('formatpasswordsalaaaah')
        Register.verify_failed_register_using_invalid_format_password()
    })
    it('TC03-Pengguna berhasil registrasi dengan email yang belum terdaftar', () => {
        Register.input_fullname('Samsudin')
        Register.input_email('tedsfdsf@dispostable.com')
        Register.input_password('passwordBenar12*')
        Register.clickButton_registrasi()
        Register.verify_success_register_using_valid_data()
    })
})*/
describe('feature-forgotPassword', () => {  
    beforeEach(() => {
        cy.visit('/')
        Login.go_to_login_page()
    })
    it('TC04-Pengguna gagal meminta link forgot password dengan email yang tidak terdaftar', () => {
    })
    it('TC05-Pengguna berhasil meminta link forgot password dengan email yang terdaftar', () => {
    })


})
describe('feature-login', () => {  
    beforeEach(() => {
        cy.visit('/')
        Login.go_to_login_page()
    })
    it('TC06-Pengguna gagal login dengan email yang belum terdaftar', () => {
    })
    it('TC07-Pengguna gagal login dengan password yang salah', () => {
    })
    it('TC08-Pengguna berhasil login dengan email dan password yang benar', () => {
    })
})
describe('feature-login', () => {  
    beforeEach(() => {
        cy.visit('/')
        Login.go_to_login_page()
    })
    it('TC06-Pengguna gagal login dengan email yang belum terdaftar', () => {
    })
    it('TC07-Pengguna gagal login dengan password yang salah', () => {
    })
})
//TC08-Pengguna berhasil login dengan email dan password yang benar
//TC09-Pengguna gagal memperbarui profile dengan semua mengosongkan data
//TC10-Pengguna berhasil memperbarui data profile dengan mengisi data yang valid