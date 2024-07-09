<script lang="ts">
	let text = 'Contact';
	function buttonclick() {
		text = 'You clicked me';
	}
</script>

<div id="info">
	<img src="img/portrait.jpg" alt="Azalia's portrait" />
	Azalia Alisheva
	<button id="contact" on:click={buttonclick}>{text}</button>
	<div id="shortabout">
		IU Data Science and AI student 💻 | making the world a better place | I ❤️ learning new
		languages | maths problems admirer | team tea 🍃
	</div>
</div>

<style>
	#info img {
		width: 95%;
		border-radius: 50%;
		margin-bottom: 10%;
		margin-top: 20%;
		border: 8px solid white;
	}

	#contact {
		width: 100%;
		margin: 15px 0;
		padding: 5px;
		border-color: grey;
		border-width: 1.5px;
		border-radius: 10px;
		background-color: white;
	}

	#shortabout {
		margin: 8px 0;
		line-height: 20px;
		text-align: justify;
		font-size: medium;
		font-family: 'Courier New', Courier, monospace;
		background-color: white;
	}

	#info {
		position: sticky;
		top: 0;
		width: 250px;
		background-color: aqua;
		padding: 0 50px;
		font-size: x-large;
		float: left;
		height: 100vh;
	}
</style>
