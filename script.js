const byId = (id) => document.getElementById(id);

const $signUpButton = byId('signUp');
const $signInButton = byId('signIn');
const $container = byId('container');

// Verifique se os elementos existem antes de adicionar os event listeners
if ($signUpButton && $signInButton && $container) {
    $signUpButton.addEventListener('click', () => {
        $container.classList.add('right-panel-active');
    });

    $signInButton.addEventListener('click', () => {
        $container.classList.remove('right-panel-active');
    });
}
