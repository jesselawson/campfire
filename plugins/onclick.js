// This is defined in plugins/onclick.js
// Customize functionality yourself!
link_element().classList.add('cf-clicked');

campfire_card_container().insertAdjacentHTML('beforeend', target_card_html_content());

// Fades in the card; if you don't delay this a bit, the fade effect wont be visible
window.setTimeout(function() {
    // Fade in the last child element of the container -- which will be the 
    // newly added card
    campfire_card_container().lastChild.classList.add('cf-fade-in');

    // Scroll to bottom of container
    window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
    });
},50);


/*campfire_cards.forEach( function(card) {
    // TODO: Can we clear out any cf-fade-in cards before fading in the next one? 
    // How would we REMOVE the dom content? 
    // Is that even necessary? Maybe someone else can do it
});*/