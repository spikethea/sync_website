export default (element: HTMLElement, button: HTMLButtonElement) => {
    const links = element.querySelectorAll("a");
    const toggleMenu = () => {
        if (element === null) return;

        if (!element.classList.contains('hidden')) {
            element.classList.add('hidden');
            button.classList.remove('close');
        } else {
            element.classList.remove('hidden');
            button.classList.add('close');
        }
    }
        
    button.addEventListener('click', toggleMenu);

    links.forEach((link)=> {
        link.addEventListener('click', () => {
            toggleMenu();
        })
    })

}