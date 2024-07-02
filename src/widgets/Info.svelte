<script lang="ts">
    function buttonclick() {
        const button = document.getElementById("contact") as HTMLButtonElement;
        button.innerHTML = "You clicked me";
    }
</script>

<div id="info">
    <img src="img/portrait.jpg" alt="Azalia's portrait">
    Azalia Alisheva
    <button id="contact" on:click={buttonclick}>Contact</button>
    <div id="shortabout">
        IU Data Science and AI student 💻 | making the world a better place | I ❤️ learning new languages | maths problems admirer | team tea 🍃
    </div>
</div>