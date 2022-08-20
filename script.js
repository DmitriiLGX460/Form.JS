// document. addEventListener('DOMContentLoaded', () => {
//     let registration_btn = document. getElementById('registration');
//     registration_btn.addEventListener(  'clik', hideform);

//     let login_btn = document.getElementById( 'login');
//     login_btn.addEventListener( 'clik', showForm);

//     let content = document.getElementById('content');
//     let form = document. createElement ('form');
//     form.id = "form-registration";

//     form.appendChild(buildForm.input( 'password', 'password', "Пароль"));
//     form.appendChild(buildForm.input( 'retry_password', 'password', "Повторите пароль"));

//     let button = defaultHTMLTags.button("submit", "START");

//     button. addEventListener( "clik",  () => {
//         form.innerHTML = "";
//     })

//     form.appendChild(button);
//     content.appendChild (form);
// })


//     function hideform() {
//         let form = document.getElementById('form-registration');
//         form.style.display = "none";
//     }

//         function showForm() {
//             let form = document.getElementById('form-registration');
//             form.style.display = "blok";
//     }
//     let buildForm = {
//         'input': function (name = "", type = "textbox", placeholder = ""){
//             let input = document. createElement('input');
//         }
//     }
// }