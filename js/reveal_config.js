// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    width: 1024,
    height: 768,
    controls: false,
    progress: true,
    history: true,
    center: true,
    overview: true,
    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'linear', // default/cube/page/concave/zoom/linear/none
    dependencies: [
        { src: 'reveal/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'reveal/plugin/markdown/showdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'reveal/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'reveal/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
        { src: 'reveal/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },
       // { src: 'reveal/plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } }
        ]
});
