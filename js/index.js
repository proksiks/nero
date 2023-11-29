const agreeModal = document.querySelector('.accept-modal');
const heroFruit = document.getElementById('hero-fruit');
const heroBox = document.getElementById('hero-box');
const acceptButton = document.getElementById('agree');
const tl = gsap.timeline();
const typeSplit = new SplitType('[animate]', {
    types: 'lines, words, chars',
    tagName: 'span'
})

new Parallax(heroFruit);
new Parallax(heroBox);

acceptButton.addEventListener('click', function () {
    agreeModal.classList.remove('accept-modal_show')

    tl.to(".accept-modal", { opacity: 0 })
        .from(".hero", { opacity: 0 })
        .from('[animate] .line', { y: '100%', opacity: 0, duration: 0.5, stagger: 0.1, })
        .from(".hero__button", { opacity: 0 })
        .from(".hero__img-1", { opacity: 0 })
        .from(".hero__shadow", { opacity: 0 })
        .from(".hero__img-2", { opacity: 0 })
})

