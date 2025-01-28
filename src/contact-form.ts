export default (element: HTMLElement) => {
    const form = element.querySelector('form');
    const openFormButton = element.querySelector('#open-form-button');

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
    
    
}