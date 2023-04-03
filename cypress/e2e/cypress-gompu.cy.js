import register from '../../cypress/support/pageObject/register-page'
import login from '../../cypress/support/pageObject/login-page'
import forgotPassword from '../../cypress/support/pageObject/forgotPassword-page'
import updateProfile from '../support/pageObject/updateProfile-page'
import { faker } from '@faker-js/faker'

const Register = new register()
const Login = new login()
const ForgotPassword = new forgotPassword()
const UpdateProfile = new updateProfile()
const emailTester = ('shidqiadiatma@dispostable.com')
const passwordTester = ('passwordBenar12*')

describe('[Cypress] feature-registration', () => {  
    beforeEach(() => {
        cy.visit('/')
        Login.go_to_login_page()
        Register.go_to_register_page()
    })
    it('TC01-Pengguna gagal registrasi menggunakan email terdaftar', () => {
        Register.do_register(faker.name.firstName(), emailTester, passwordTester)
        Register.click_btnRegistrasi()
        Register.verify_failed_register_using_registered_email()
    })
    it('TC02-Pengguna gagal registrasi menggunakan format password yang salah', () => {
        Register.do_register(faker.name.firstName(), emailTester, 'formatpasswordsalahnih')
        Register.verify_failed_register_using_invalid_format_password()
    })
    it('TC03-Pengguna berhasil registrasi dengan email yang belum terdaftar', () => {
        Register.do_register(faker.name.firstName(), faker.internet.email(), passwordTester)
        Register.click_btnRegistrasi()
        Register.verify_success_register_using_valid_data()
    })
})
describe('[Cypress] feature-forgotPassword', () => {  
    beforeEach(() => {
        cy.visit('/')
        Login.go_to_login_page()
        ForgotPassword.go_to_forgotPassword_page()
    })
    it('TC04-Pengguna gagal meminta link forgot password dengan email yang tidak terdaftar', () => {
        ForgotPassword.do_requestForgotPassword(faker.internet.email())
        ForgotPassword.verify_failed_request_forgot_password()
        
    })
    it('TC05-Pengguna berhasil meminta link forgot password dengan email yang terdaftar', () => {
        ForgotPassword.do_requestForgotPassword(emailTester)
        ForgotPassword.verify_success_request_forgot_password()
    })
})
describe('[Cypress] feature-login', () => {  
    beforeEach(() => {
        cy.visit('/')
        Login.go_to_login_page()
    })
    it('TC06-Pengguna gagal login dengan email yang belum terdaftar', () => {
        Login.do_login(faker.internet.email(), passwordTester)
        Login.verify_failed_login_using_unregisteredEmail()
    })
    it('TC07-Pengguna gagal login dengan password yang salah', () => {
        Login.do_login(emailTester, 'passwordsalaaaah')
        Login.verify_failed_login_using_wrongPassword()
    })
    it('TC08-Pengguna berhasil login dengan email dan password yang benar', () => {
        Login.do_login(emailTester, passwordTester)
        Login.verify_success_login_using_validCredential()
    })
})
describe('[Cypress] feature-updateProfile', () => {  
    beforeEach(() => {
        cy.visit('/')
        Login.go_to_login_page()
        Login.precondition_successLogin()
        UpdateProfile.go_to_UpdateProfile_page()
    })
    it('TC09-Pengguna gagal memperbarui profile dengan mengosongkan semua data', () => {
        UpdateProfile.do_clearAllDataProfile()
        UpdateProfile.clickSave_button()
        UpdateProfile.verify_failed_updateProfile()
    })
    it('TC10-Pengguna berhasil memperbarui data profile dengan mengisi semua data yang valid', () => {
        var randomPhone = Math.floor(100000000 + Math.random() * 900000000000);
        UpdateProfile.do_updateAllDataProfile(faker.name.firstName(), emailTester, randomPhone, faker.date.birthdate(), faker.address.cityName())
        UpdateProfile.clickSave_button()
        UpdateProfile.verify_success_updateProfile()
    })
})
