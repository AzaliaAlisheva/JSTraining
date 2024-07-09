<div id="stack">
	<h2>My Teck Stack</h2>
	<ul>
		<li data-tooltip="HTML"><img src="img/html_logo.png" alt="HTML logo" /></li>
		<li data-tooltip="CSS"><img src="img/css_logo.png" alt="CSS logo" /></li>
		<li data-tooltip="JavaScript"><img src="img/js_logo.png" alt="JavaScript logo" /></li>
		<li data-tooltip="TypeScript"><img src="img/ts_logo.png" alt="TypeScript logo" /></li>
	</ul>
	<ul>
		<li data-tooltip="C++"><img src="img/cpp_logo.png" alt="C++ logo" /></li>
		<li data-tooltip="Python"><img src="img/python_logo.png" alt="Python logo" /></li>
		<li data-tooltip="Java"><img src="img/java_logo.webp" alt="Java logo" /></li>
	</ul>
	<ul>
		<li data-tooltip="Git"><img src="img/git_logo.png" alt="Git logo" /></li>
	</ul>
</div>

<style>
	#stack img {
		height: 50px;
	}

	#stack ul {
		padding: 0;
		margin: 0;
	}

	#stack li {
		display: inline-block;
		width: 50px;
		height: 50px;
		padding: 20px;
		text-align: center;
		position: relative;
	}

	#stack li:hover::before {
		border-bottom: 6px solid #1f364d;
		border-left: 8px solid transparent;
		border-right: 8px solid transparent;
		bottom: 12px;
		content: '';
		height: 0;
		left: 50%;
		margin-left: -8px;
		position: absolute;
		width: 0;
	}

	#stack li:hover::after {
		background: #1f364d;
		border-radius: 4px;
		bottom: -13px;
		color: white;
		content: attr(data-tooltip);
		left: 0;
		padding: 4px 8px;
		position: absolute;
		width: 80%;
	}
</style>
