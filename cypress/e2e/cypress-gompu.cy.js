import register from '../../cypress/support/pageObject/register-page'
import login from '../../cypress/support/pageObject/login-page'
import forgotPassword from '../../cypress/support/pageObject/forgotPassword-page'
import updateProfile from '../support/pageObject/updateProfile-page'
import { faker } from '@faker-js/faker'

const Register = new register()
const Login = new login()
const ForgotPassword = new forgotPassword()
const UpdateProfile = new updateProfile()

//Test Data
var emailTester = ('shidqiadiatma@dispostable.com')
var passwordTester = ('passwordBenar12*')
var selectGender = faker.helpers.arrayElement(['Perempuan', 'Laki-laki'])
var selectBirthday = faker.helpers.arrayElement(['2000-05-12', '2001-08-12', '2001-04-21', '1990-12-01', '1995-06-09'])
var randomName = faker.name.firstName()
var randomCity = faker.address.cityName()
var randomPhone = Math.floor(100000000 + Math.random() * 900000000000);
var randomEmail1 = 'email'+ Math.floor(100000000 + Math.random() * 900000000) + '@mail.com';
var randomEmail2 = faker.internet.email()
var wrongPassword = 'passwordsalah'
var photoProfile = faker.helpers.arrayElement(['/my-document/automations/Cypress/cypress/testData/fotoProfil/kucing1.jpg',
                                                '/my-document/automations/Cypress/cypress/testData/fotoProfil/kucing2.jpg',
                                                '/my-document/automations/Cypress/cypress/testData/fotoProfil/kucing3.jpg',
                                                '/my-document/automations/Cypress/cypress/testData/fotoProfil/kucing4.jpg',
                                                '/my-document/automations/Cypress/cypress/testData/fotoProfil/kucing5.jpg'])

describe('[Cypress] feature-registration', () => {  
    beforeEach(() => {
        cy.visit('/')
        Login.go_to_login_page()
        Register.go_to_register_page()
    })
    it('TC01-Pengguna gagal registrasi menggunakan email terdaftar', () => {
        Register.do_register(randomName, emailTester, passwordTester)
        Register.click_btnRegistrasi()
        Register.verify_failed_register_using_registered_email()
    })
    it('TC02-Pengguna gagal registrasi menggunakan format password yang salah', () => {
        Register.do_register(randomName, emailTester, wrongPassword)
        Register.verify_failed_register_using_invalid_format_password()
    })
    it('TC03-Pengguna berhasil registrasi dengan email yang belum terdaftar', () => {
        Register.do_register(randomName, randomEmail2, passwordTester)
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
        ForgotPassword.do_requestForgotPassword(randomEmail1)
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
        Login.do_login(randomEmail1, passwordTester)
        Login.verify_failed_login_using_unregisteredEmail()
    })
    it('TC07-Pengguna gagal login dengan password yang salah', () => {
        Login.do_login(emailTester, wrongPassword)
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
        UpdateProfile.do_updateAllDataProfile(photoProfile, randomName, emailTester, randomPhone, selectGender, selectBirthday,randomCity )
        UpdateProfile.clickSave_button()
        UpdateProfile.verify_success_updateProfile()
    })
})

