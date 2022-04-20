const campfire_cards = new Map();campfire_cards.set('start', "<article class=\"campfire-card start-card\" id=\"card_start\"><h1>Campfire is an interaction system built on top of Markdown.</h1><p>Organize your content in <strong>cards</strong>, then link to different cards with\nspecial <span class=\"campfire-card-label\" id=\"link0_start_start2\">hyperlinks</span>.</p></div>\n");campfire_cards.set('start2', "<article class=\"campfire-card\" id=\"card_start2\"><h2>Cards</h2><p>A card a combination of Markdown and Campfire expressions.</p><p>Let's look at a <span class=\"campfire-card-label\" id=\"link1_start2_basic_card\">basic card</span> that does absolutely nothing:</p></div>\n");campfire_cards.set('basic_card', "<article class=\"campfire-card\" id=\"card_basic_card\"><pre><code>$begin my_card\nHello, world!\n$end\n</code></pre><p>All Campfire cards start with the <code>$begin</code><span class=\"campfire-card-label\" id=\"link2_basic_card_commands\">command</span>, which takes one argument: an\nalphanumeric card identifier. This identifer is unique to the card, and is the same\nidentifier used when creating <span class=\"campfire-card-label\" id=\"link3_basic_card_links\">Campfire links</span>.</p></div>\n");campfire_cards.set('links', "<article class=\"campfire-card\" id=\"card_links\"><p>Campfire links render a new card.</p><p>For example, if I had the following card:</p><pre><code>$ begin some_card\n\nLorem ipsum\n\n$ end\n</code></pre><p>I could create a Campfire link and render that card in a different card\nlike this:</p><pre><code>A % {link}(some_card) to the card.\n</code></pre></div>\n");campfire_cards.set('commands', "<article class=\"campfire-card\" id=\"card_commands\"><p>Commands always start with $, and will generally have the following format:</p><pre><code>$&lt;command&gt; &lt;param&gt; [=] [&lt;value&gt;]\n</code></pre><p>For example, each card starts with the $ begin command and ends with the $ end\ncommand.</p></div>\n");campfire_cards.set('basic_examples', "<article class=\"campfire-card\" id=\"card_basic_examples\"><p>Card content is written in Campfire, which is basically just Markdown with some\nfancy custom tags that do things.</p><p>So <strong>most</strong> normal Markdown syntax will just <em>work</em>; you can always see the\n<a href=\"https://campfirejs.org/cheatsheet\">language cheatsheet</a>.</p></div>\n");campfire_cards.set('neato_burrito', "<article class=\"campfire-card\" id=\"card_neato_burrito\"><p>Ha! This is a silly card.</p></div>\n");function campfire_init() {let link0_element = () => { return document.getElementById("link0_start_start2"); };document.body.addEventListener('click', function(event) { if( event.target.id == 'link0_start_start2') { let link_element = () => { return link0_element(); };;let target_card_element = () => { return document.getElementById("card_start2");}; let target_card_html_content = () => {return campfire_cards.get("start2");}; let campfire_card_container = () => {return document.getElementById('campfire-card-container');};
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
}});let link1_element = () => { return document.getElementById("link1_start2_basic_card"); };document.body.addEventListener('click', function(event) { if( event.target.id == 'link1_start2_basic_card') { let link_element = () => { return link1_element(); };;let target_card_element = () => { return document.getElementById("card_basic_card");}; let target_card_html_content = () => {return campfire_cards.get("basic_card");}; let campfire_card_container = () => {return document.getElementById('campfire-card-container');};
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
}});let link2_element = () => { return document.getElementById("link2_basic_card_commands"); };document.body.addEventListener('click', function(event) { if( event.target.id == 'link2_basic_card_commands') { let link_element = () => { return link2_element(); };;let target_card_element = () => { return document.getElementById("card_commands");}; let target_card_html_content = () => {return campfire_cards.get("commands");}; let campfire_card_container = () => {return document.getElementById('campfire-card-container');};
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
}});let link3_element = () => { return document.getElementById("link3_basic_card_links"); };document.body.addEventListener('click', function(event) { if( event.target.id == 'link3_basic_card_links') { let link_element = () => { return link3_element(); };;let target_card_element = () => { return document.getElementById("card_links");}; let target_card_html_content = () => {return campfire_cards.get("links");}; let campfire_card_container = () => {return document.getElementById('campfire-card-container');};
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
}});}document.addEventListener('DOMContentLoaded', campfire_init);