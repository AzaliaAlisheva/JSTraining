<script lang="ts">
    import Header from "../widgets/Header.svelte";
    import Info from "../widgets/Info.svelte";

    import Bio from '../widgets/Bio.svelte';
    import Stack from '../widgets/Stack.svelte';
    import Education from '../widgets/Education.svelte';
    import Experience from '../widgets/Experience.svelte';
</script>

<Info />
<Header disabledLabel="Home"/>
<main>
    <h1>Hello! I am Azalia Alisheva</h1>
    <a href="https://github.com/AzaliaAlisheva" class="link" id="gh-link"><img src="img/github_logo.png" alt="GitHub logo" class="logo">@AzaliaAlisheva</a>
    <a href="https://t.me/AzaliaAlisheva" class="link" id="tg-link"><img src="img/telegram_logo.png" alt="Telegram logo" class="logo">@AzaliaAlisheva</a>
    <a href="mailto:azalia.alischeva@gmail.com" class="link" id="email"><img src="img/gmail_logo2.png" alt="Gmail logo" class="logo">azalia.alischeva@gmail.com</a>
    <Bio />
    <Stack />
    <Education />
    <Experience />
</main>