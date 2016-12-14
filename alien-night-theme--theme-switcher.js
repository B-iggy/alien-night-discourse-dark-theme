/*
 Alien Night Theme (Desktop) - A Dark Theme for Discourse
 Author: Ignaz Biegler
 Github: https://github.com/B-iggy/discourse-dark-theme
 Version 1.1
 */
<script async>
$(document).ready(function() {

    var darkTheme = localStorage.getItem("theme");

    if (darkTheme !== null){
        $('html').addClass('dark');
    }

    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        $('.theme-switcher-dark').on('click', function() {
            localStorage.setItem("theme", "dark");
            $('html').addClass('dark');
        });

        $('.theme-switcher-light').on('click', function() {
            localStorage.removeItem("theme");
            $('html').removeClass('dark');
        });

    } else {
        // Sorry! No Web Storage support..
        console.log('Upgrade to a better browser! Really!')
    }
});
</script>