
{
   /* <form class="feedback-form" autocomplete="off">
 <label>
   Email
   <input type="email" name="email" autofocus />
 </label>
 <label>
   Message
   <textarea name="message" rows="8"></textarea>
 </label>
 <button type="submit">Submit</button>
 </form> */
 }
 
 import throttle from 'lodash.throttle';
 const refs = {
   form: document.querySelector('.feedback-form'),
   input: document.querySelector('.feedback-form input'),
   textarea: document.querySelector('.feedback-form textarea'),
 };
 const formData = {};
 // refs.input.addEventListener('input', throttle(onEmailInput, 500));
 refs.form.addEventListener('submit', onFormSubmit);
 // refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
 refs.form.addEventListener('input', throttle(onFormInput, 500));
 // onFormInput()
 getEmailInput();
 // getMessageInput();
 function onFormInput(e) {
   // console.log(e.target.value)
   // console.log(e.target.name)
   formData[e.target.name] = e.target.value;
   // console.log(formData)
   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
 }
 function getEmailInput() {
   const saveData = localStorage.getItem('feedback-form-state');
   const parseData = JSON.parse(saveData);
   console.log(parseData);
 
   if (parseData) {
     refs.input.value = parseData.email;
     refs.textarea.value = parseData.message;
   }
 }
 
 function onFormSubmit(e) {
   e.preventDefault();
   e.currentTarget.reset();
   localStorage.removeItem('feedback-form-state');
   // localStorage.removeItem('feedback-form-state-message');
 }
 
 // function onEmailInput(e) {
 //   const email = e.target.value;
 //   localStorage.setItem('feedback-form-state', email);
 //   // console.log(email);
 // }
 
 // function onTextareaInput(e) {
 //   const message = e.target.value;
 //   localStorage.setItem('feedback-form-state', message);
 //   console.log(message);
 // }
 
 // function getEmailInput() {
 //   const savedEmail = localStorage.getItem('feedback-form-state');
 //   if (savedEmail) {
 //     // console.log(savedEmail);
 //     // refs.textarea.value = savedData;
 //     refs.form.value = savedEmail;
 //   }
 // }
 // function getMessageInput() {
 //   const savedMessage = localStorage.getItem('feedback-form-state-message');
 //   if (savedMessage) {
 //     console.log(savedMessage);
 //     // refs.textarea.value = savedData;
 //     refs.textarea.value = savedMessage;
 //   }
 // }