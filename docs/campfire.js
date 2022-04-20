const campfire_cards = new Map();campfire_cards.set('start', "<article class=\"campfire-card start-card\" id=\"card_start\"><p>If I link to the <span class=\"campfire-card-label\" id=\"link0_start_gray\">gray</span> card, then the <span class=\"campfire-card-label\" id=\"link1_start_gray\">gray</span> card again...</p></div>\n");campfire_cards.set('black', "<article class=\"campfire-card\" id=\"card_black\"><p>Great! Now select your favorite <strong>number</strong>:</p></div>\n");campfire_cards.set('gray', "<article class=\"campfire-card\" id=\"card_gray\"><p>What happens if I <span class=\"campfire-card-label\" id=\"link2_gray_gray\">link to myself</span>?</p></div>\n");campfire_cards.set('dark_gray', "<article class=\"campfire-card\" id=\"card_dark_gray\"><p>asdf</p></div>\n");function campfire_init() {let link0_element = () => { return document.getElementById("link0_start_gray"); };document.body.addEventListener('click', function(event) { if( event.target.id == 'link0_start_gray') { let link_element = () => { return link0_element(); };;let target_card_element = () => { return document.getElementById("card_gray");}; let target_card_html_content = () => {return campfire_cards.get("gray");}; let campfire_card_container = () => {return document.getElementById('campfire-card-container');};
link_element().classList.add('cf-clicked');

campfire_card_container().insertAdjacentHTML('beforeend', target_card_html_content());

// Fades in the card; if you don't delay this a bit, the fade effect wont be visible.
window.setTimeout(function() {
    // Fade in the last child element of the container -- which will be the 
    // newly added card
    campfire_card_container().lastChild.classList.add('cf-fade-in');
},50); 

// Scroll to bottom of container
window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: 'smooth'
  });


/*campfire_cards.forEach( function(card) {
    // TODO: Can we clear out any cf-fade-in cards before fading in the next one? 
    // How would we REMOVE the dom content? 
    // Is that even necessary? Maybe someone else can do it
});*/
}});let link1_element = () => { return document.getElementById("link1_start_gray"); };document.body.addEventListener('click', function(event) { if( event.target.id == 'link1_start_gray') { let link_element = () => { return link1_element(); };;let target_card_element = () => { return document.getElementById("card_gray");}; let target_card_html_content = () => {return campfire_cards.get("gray");}; let campfire_card_container = () => {return document.getElementById('campfire-card-container');};
link_element().classList.add('cf-clicked');

campfire_card_container().insertAdjacentHTML('beforeend', target_card_html_content());

// Fades in the card; if you don't delay this a bit, the fade effect wont be visible.
window.setTimeout(function() {
    // Fade in the last child element of the container -- which will be the 
    // newly added card
    campfire_card_container().lastChild.classList.add('cf-fade-in');
},50); 

// Scroll to bottom of container
window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: 'smooth'
  });


/*campfire_cards.forEach( function(card) {
    // TODO: Can we clear out any cf-fade-in cards before fading in the next one? 
    // How would we REMOVE the dom content? 
    // Is that even necessary? Maybe someone else can do it
});*/
}});let link2_element = () => { return document.getElementById("link2_gray_gray"); };document.body.addEventListener('click', function(event) { if( event.target.id == 'link2_gray_gray') { let link_element = () => { return link2_element(); };;let target_card_element = () => { return document.getElementById("card_gray");}; let target_card_html_content = () => {return campfire_cards.get("gray");}; let campfire_card_container = () => {return document.getElementById('campfire-card-container');};
link_element().classList.add('cf-clicked');

campfire_card_container().insertAdjacentHTML('beforeend', target_card_html_content());

// Fades in the card; if you don't delay this a bit, the fade effect wont be visible.
window.setTimeout(function() {
    // Fade in the last child element of the container -- which will be the 
    // newly added card
    campfire_card_container().lastChild.classList.add('cf-fade-in');
},50); 

// Scroll to bottom of container
window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: 'smooth'
  });


/*campfire_cards.forEach( function(card) {
    // TODO: Can we clear out any cf-fade-in cards before fading in the next one? 
    // How would we REMOVE the dom content? 
    // Is that even necessary? Maybe someone else can do it
});*/
}});}document.addEventListener('DOMContentLoaded', campfire_init);