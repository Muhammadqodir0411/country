const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const toggleBtn = () => {
    $('.bodys').classList.toggle('bg-secondary')
    $('.btn-sun').classList.toggle('d-none')
    $('.btn-moon').classList.toggle('d-none')
}

const localMode = localStorage.getItem('mode')

if (localMode) {
    $('.bodys').classList.remove('bg-secondary')
    $('.btn-moon').classList.remove('d-none')
    $('.btn-sun').classList.add('d-none')

}

$('.btn-sun').addEventListener('click', () => {
    toggleBtn()
    localStorage.setItem('mode', 'dark-mod')
})
$('.btn-moon').addEventListener('click', () => {
    toggleBtn()
    localStorage.setItem('mode', [])
});