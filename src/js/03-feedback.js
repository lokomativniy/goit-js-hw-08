
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
 refs.form.addEventListener('submit', onFormSubmit);
 refs.form.addEventListener('input', throttle(onFormInput, 500));
 getEmailInput();

 function onFormInput(e) {
   formData[e.target.name] = e.target.value;
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
 }
 