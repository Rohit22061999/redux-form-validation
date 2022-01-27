const initialstate = { validateData: [] }
const regforEmail = RegExp(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/);
const regforName = RegExp(/^[A-Za-z]{3,30}$/);
const regforAge = RegExp(/^[0-9]+$/);
const regforPassword = RegExp(/"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/);
const validator = (state = initialstate, action) => {
    console.log(state)
    switch (action.type) {
        case 'VAL':
            if (action.payload.Name == '' || action.payload.Age == '' || action.payload.Email == '' || action.payload.Password == '' || action.payload.ConfirmPassword == '') {
                alert("Please fill all the fields")
            }
            else if (!regforName.test(action.payload.Name)) {
                alert("Enter a valid Name")
            }
            else if (!regforAge.test(action.payload.Age)) {
                alert("Enter A Valid Age")
            }
            else if (!regforEmail.test(action.payload.Email)) {
                alert("Enter A Valid Email")
            }
            // else if (regforPassword.test(action.payload.Password)) {
            //     alert("Enter Valid Password")
            // } 
            else if (!regforName.test(action.payload.City)) {
                alert("Enter valid city name")
            }
            // else if (action.payload.Password != action.payload.ConfirmPassword) {
            //     alert("Password Does Not Match")
            // }
            else {
                alert("Registered Successfully")
                return { validateData: [...state.validateData, action.payload] }
            }
            default:
                return state;
    }
}
export default validator;

