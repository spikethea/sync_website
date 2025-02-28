import { z } from 'zod';
import debounce from 'debounce';

const submitForm = async function(event: Event) {
    event.preventDefault();
    const element = event.target as HTMLFormElement;

    const formData = new FormData(element);
    const url = 'https://api.sheetmonkey.io/form/vB1pUYCBvUqnSarEvAgsd6';

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        // Reset form fields if needed
        element.innerHTML = "<h2>Thank you!</h2><h5>We have received your inquiry and will get back to you shortly.</h5>";
        return;
      } else {
        console.error('Form submission failed:', response.status);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

export default (element: HTMLElement) => {
    const form = element.querySelector('form');
    const openFormButton = element.querySelector('#open-form-button');
    const submitBtn = element.querySelector('#submit-button') as HTMLButtonElement;
    if (form) {
        const maxHeight = form.offsetHeight;
        form.ariaExpanded = 'false';
        form.style.maxHeight = `0px`

        openFormButton?.addEventListener('click', ()=> {
            
            if (form.ariaExpanded === 'false') {
                form.ariaExpanded = 'true';
                openFormButton.textContent = 'Close Form';
                form.style.maxHeight = `${maxHeight}px`;
            } else {
                form.style.maxHeight = `0px`
                form.ariaExpanded = 'false';
                openFormButton.textContent = 'Inquire';
            }
        })
    }
    
     const mySchema = z.object({
            fname: z.string().min(2, { message: "First Name must contain at least 2 character(s)" }).max(30),
            lname: z.string().min(2,  { message: "Last Name must contain at least 2 character(s)" }).max(30),
            email: z.string().email({ message: "Invalid email address" }),
            brand: z.string().min(2, { message: "Brand must contain at least 2 character(s)" }).max(15),
            message: z.string().min(10,  { message: "Your Message must contain at least 10 character(s)" }).max(300),
        });
        if (!form) return;
        const errorElem  = form.querySelector("#form > p")as HTMLElement;
        const fNameElem = form.querySelector('[name="firstname"]') as HTMLInputElement;
        const lNameElem = form.querySelector('[name="lastname"]') as HTMLInputElement;
        const emailElem = form.querySelector('[name="email"]') as HTMLInputElement;
        const brandElem = form.querySelector('[name="brand"]') as HTMLInputElement;
        const messageElem = form.querySelector('[id="message"]') as HTMLTextAreaElement;
    
        console.log(messageElem);
        if (!emailElem ) return;
    
        const formValidation = (event: Event) => {
            const fieldElement = event.target as HTMLElement;
            const formIndex = fieldElement.getAttribute("id");
            if (!formIndex) return;
            mySchema.parseAsync({
                fname: fNameElem.value,
                lname: lNameElem.value,
                brand: brandElem.value,
                email: emailElem.value,
                message: messageElem.value
            })
            .then(
            (res) => {
                console.log('Email validation passed', res);
                errorElem.innerHTML = "";
                if (!submitBtn) return;
                submitBtn.disabled = false;
            },
            (err) => {
                submitBtn.disabled = true;
                let currentError = err.format()
                                        [formIndex]?._errors[0];


                console.log(currentError);
                console.log(err.format);
                
                // Display current input error, otherwise display remaining errors.
                if (currentError) {
                    errorElem.innerHTML = currentError;
                } else {
                    errorElem.innerHTML = err.issues[0].message
                }
            }
            ).catch((error) => console.log(error))
        };
        form.addEventListener("submit", submitForm, false);
    
        fNameElem.addEventListener("input", debounce(formValidation, 500), false);
        lNameElem.addEventListener("input", debounce(formValidation, 500), false);
        brandElem.addEventListener("input", debounce(formValidation, 500), false);
        messageElem.addEventListener("input", debounce(formValidation, 500), false);
        emailElem.addEventListener("input", debounce(formValidation, 500), false);
    
    
    
}