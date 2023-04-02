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

describe('feature-registration', () => {  
    beforeEach(() => {
        cy.visit('/')
        Login.go_to_login_page()
        Register.go_to_register_page()
    })
    it('TC01-Pengguna gagal registrasi menggunakan email terdaftar', () => {
        Register.input_fullname(faker.name.fullName())
        Register.input_email(emailTester)
        Register.input_password(passwordTester)
        Register.clickButton_registrasi()
        Register.verify_failed_register_using_registered_email()
    })
    it('TC02-Pengguna gagal registrasi menggunakan format password yang salah', () => {
        Register.input_fullname(faker.name.fullName())
        Register.input_email(faker.internet.email())
        Register.input_password('formatpasswordsalaaaah')
        Register.verify_failed_register_using_invalid_format_password()
    })
    it('TC03-Pengguna berhasil registrasi dengan email yang belum terdaftar', () => {
        Register.input_fullname(faker.name.fullName())
        Register.input_email(faker.internet.email())
        Register.input_password(passwordTester)
        Register.clickButton_registrasi()
        Register.verify_success_register_using_valid_data()
    })
})
describe('feature-forgotPassword', () => {  
    beforeEach(() => {
        cy.visit('/')
        Login.go_to_login_page()
        ForgotPassword.go_to_forgotPassword_page()
    })
    it('TC04-Pengguna gagal meminta link forgot password dengan email yang tidak terdaftar', () => {
        ForgotPassword.input_email('emailngasal@mail.com')
        ForgotPassword.click_kirimLink_button()
        ForgotPassword.verify_failed_request_forgot_password()
        
    })
    it('TC05-Pengguna berhasil meminta link forgot password dengan email yang terdaftar', () => {
        ForgotPassword.input_email(emailTester)
        ForgotPassword.click_kirimLink_button()
        ForgotPassword.verify_success_request_forgot_password

    })


})
describe('feature-login', () => {  
    beforeEach(() => {
        cy.visit('/')
        Login.go_to_login_page()
    })
    it('TC06-Pengguna gagal login dengan email yang belum terdaftar', () => {
        Login.input_email(faker.internet.email())
        Login.input_password(passwordTester)
        Login.clickButton_masuk()
        Login.verify_failed_login_using_unregisteredEmail()
    })
    it('TC07-Pengguna gagal login dengan password yang salah', () => {
        Login.input_email(emailTester)
        Login.input_password('passwordsalaaaah')
        Login.clickButton_masuk()
        Login.verify_failed_login_using_wrongPassword()
    })
    it('TC08-Pengguna berhasil login dengan email dan password yang benar', () => {
        Login.input_email(emailTester)
        Login.input_password(passwordTester)
        Login.clickButton_masuk()
        Login.verify_success_login_using_validCredential()
    })
})

describe('feature-updateProfile', () => {  
    beforeEach(() => {
        cy.visit('/')
        Login.go_to_login_page()
        Login.precondition_successLogin()
        UpdateProfile.go_to_profile_page()
        UpdateProfile.go_to_updateProfile_page()
    })
    it('TC09-Pengguna gagal memperbarui profile dengan mengosongkan semua data', () => {
        UpdateProfile.clear_fullName()
        UpdateProfile.clear_email()
        UpdateProfile.clear_noHandphone()
        UpdateProfile.clear_tanggalLahir()
        UpdateProfile.clear_kota()
        UpdateProfile.clickSave_button()
        UpdateProfile.verify_failed_updateProfile()
    })
    it('TC10-Pengguna berhasil memperbarui data profile dengan mengisi semua data yang valid', () => {
        UpdateProfile.fill_fullName(faker.name.fullName())
        UpdateProfile.fill_email(emailTester)
        UpdateProfile.fill_noHandphone(faker.phone.number())
        UpdateProfile.fill_tanggalLahir(faker.date.birthdate())
        UpdateProfile.fill_kota(faker.address.cityName())
        UpdateProfile.clickSave_button()
        UpdateProfile.verify_success_updateProfile()
    })
})
