const html = require('html-template-tag')

module.exports = ({ title, content }) => html`
  <!DOCTYPE html>
  <html>
    <title>${title}</title>
  </html>
  <style>
    :root {
 --background: white;
 --base: black;
 --text: #3B454E;
 --accent: #EEEEEE;
 --surface: #E0E0E0
}

* {
  box-sizing: border-box;
}

body {
  background: var(--background);
  color: var(--base);
  text-rendering: optimizelegibility;
  font-family: Roboto, Arial, Helvetica, sans-serif;
}

.Layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
}

@media screen and (min-width: 900px) {
  .Layout {
    padding: 5rem 3rem;
  }
}

.Layout-header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.Layout-row {
  max-width: 1400px;
  display: flex;
  width: 100%;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.Layout-column {
  width: 100%;
}

@media screen and (min-width: 900px) {
  .Layout-column {
    width: 50%;
    padding-right: 3rem;
  }
}

@media screen and (min-width: 1300px) {
  .Layout-column {
    width: 33.33333333333333333%;
  }
}

.Logo-shape {
  width: 250px;
  position: relative; 
  height: 140px;
  cursor: default;
}

@media screen and (min-width: 900px) {
  .Logo-shape {
    width: 400px;
    left: -2rem;
    display: block;
  }
}

.Logo-instance {
  overflow: visible;
  position: absolute;
}


@-webkit-keyframes logo-instance-float {
	0% {
		-webkit-transform: translatey(0px) rotate(2deg);
		        transform: translatey(0px) rotate(2deg);
	}
	50% {
		-webkit-transform: translatey(-30px) rotate(-2deg);
		        transform: translatey(-30px) rotate(-2deg);
	}
	100% {
		-webkit-transform: translatey(0px) rotate(2deg);
		        transform: translatey(0px) rotate(2deg);
	}
}


@keyframes logo-instance-float {
	0% {
		-webkit-transform: translatey(0px) rotate(2deg);
		        transform: translatey(0px) rotate(2deg);
	}
	50% {
		-webkit-transform: translatey(-30px) rotate(-2deg);
		        transform: translatey(-30px) rotate(-2deg);
	}
	100% {
		-webkit-transform: translatey(0px) rotate(2deg);
		        transform: translatey(0px) rotate(2deg);
	}
}

@-webkit-keyframes logo-instane-reverse-float {
	0% {
		-webkit-transform: translatey(-10px) rotate(2deg);
		        transform: translatey(-10px) rotate(2deg);
	}
	50% {
		-webkit-transform: translatey(0px) rotate(-2deg);
		        transform: translatey(0px) rotate(-2deg);
	}
	100% {
		-webkit-transform: translatey(-10px) rotate(2deg);
		        transform: translatey(-10px) rotate(2deg);
	}
}

@keyframes logo-instane-reverse-float {
	0% {
		-webkit-transform: translatey(-10px) rotate(2deg);
		        transform: translatey(-10px) rotate(2deg);
	}
	50% {
		-webkit-transform: translatey(0px) rotate(-2deg);
		        transform: translatey(0px) rotate(-2deg);
	}
	100% {
		-webkit-transform: translatey(-10px) rotate(2deg);
		        transform: translatey(-10px) rotate(2deg);
	}
}

.Logo-instance--1 {
  left: 0;
  top: 0;
  width: 65%;
  -webkit-animation: logo-instance-float 6s ease-in-out infinite;
          animation: logo-instance-float 6s ease-in-out infinite;
  fill: #eb5022;
}

.Logo-instance--2 {
  left: 40%;
  top: 0;
  width: 65%;
  -webkit-animation: logo-instance-float 20s ease-in-out infinite;
          animation: logo-instance-float 20s ease-in-out infinite;
  fill: #ecb31e;
  mix-blend-mode: multiply;
}

.Logo-instance--3 {
  left: 50%;
  top: 10%;
  width: 60%;
  -webkit-animation: logo-instance-reverse-float 6s ease-in-out infinite;
          animation: logo-instance-reverse-float 6s ease-in-out infinite;
  fill: #2a98d4;
}

.Logo-instance--4 {
  left: 50%;
  top: 10%;
  -webkit-animation: logo-instance-reverse-float 6s ease-in-out infinite;
          animation: logo-instance-reverse-float 6s ease-in-out infinite;
  width: 60%;
  fill: #105ea9;
  mix-blend-mode: color;
}

.Logo-box {
  transition: -webkit-transform 0.6s;
  transition: transform 0.6s;
  transition: transform 0.6s, -webkit-transform 0.6s;
  -webkit-transform: scale(1) translateX(0) translateY(0) rotate(0deg);
          transform: scale(1) translateX(0) translateY(0) rotate(0deg);
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
}

.Logo:hover .Logo-box--1 {
  -webkit-transform: scale(0.5) translateX(-1000px) translateY(0) rotate(-90deg);
          transform: scale(0.5) translateX(-1000px) translateY(0) rotate(-90deg);
}

.Logo:hover .Logo-box--2 {
  -webkit-transform: scale(0.5) translateX(-1000px) translateY(900px) rotate(-45deg);
          transform: scale(0.5) translateX(-1000px) translateY(900px) rotate(-45deg);
}

.Logo:hover .Logo-box--3 {
  -webkit-transform: scale(1) translateX(500px) translateY(250px) rotate(45deg);
          transform: scale(1) translateX(500px) translateY(250px) rotate(45deg);
}

.Logo:hover .Logo-box--4 {
  -webkit-transform: scale(1) translateX(400px) translateY(0) rotate(90deg);
          transform: scale(1) translateX(400px) translateY(0) rotate(90deg);
}

.Logo-text {
  font-size: 5rem;
  letter-spacing: -2px;
  font-style: italic;
  font-weight: 900;
  margin: 0.5rem 0 0;
  line-height: 1;
  color: var(--base);
  cursor: default;
}

@media screen and (min-width: 400px) {
  .Logo-text {
    font-size: 8rem;
  }
}

.Menu-list {
  display: none;
  border: 1px solid var(--accent);
  padding: 1rem;
  border-radius: 4px;
  margin-top: 2rem;
  box-shadow: rgba(116, 129, 141, 0.1) 0px 3px 8px 0px;
}

.Menu-link {
  color: var(--text);
  display: inline-block;
  text-decoration: none;
}

.Menu-link:hover,
.Menu-link:focus {
  background: var(--accent);
  border-radius: 4px;
  margin: -0.25rem;
  padding: 0.25rem;
  outline: none;
}

@media screen and (min-width: 600px) {
  .Menu-list {
    display: inline-block;
  }
}

@media screen and (min-width: 900px) {
  .Menu-list {
    padding: 2rem;
  }
}

.Menu-list--mobile {
  display: flex;
  flex-wrap: wrap;
}

@media screen and (min-width: 600px) {
  .Menu-list--mobile {
    display: none;
  }
}

.Blurb-title {
  margin-top: 4rem;
  border-bottom: 1px solid var(--accent);
  font-weight: 900;
  padding-bottom: 0.3em;
}

.Blurb-icon {
  display: none;
}

@media screen and (min-width: 900px) {
  .Blurb-icon {
    display: inline;
  }
}

.Blurb > p {
  line-height: 26px;
  letter-spacing: 0.00938em;
  color: var(--text);
  text-rendering: optimizelegibility;
}

@media screen and (min-width: 900px) {
  .Blurb > p {
    padding-left: 2rem;
  }
}

.Blurb > ul > li {
  color: var(--text);
  text-rendering: optimizelegibility;
  letter-spacing: 0.00938em;
  line-height: 26px;
}

/* a,
button {
  color: var(--text);
  display: inline-block;
}

button:focus,
button:hover,
a:focus,
a:hover {
  background: var(--accent);
  border-radius: 4px;
  margin: -0.25rem;
  padding: 0.25rem;
  outline: none;
} */


/* .tagline {
  margin: 0;
  font-size: 2rem;
  opacity: 0.5;
  letter-spacing: 2px;
} */

/* .notice {
  display: none;
  border: 1px solid var(--accent);
  padding: 1rem;
  border-radius: 4px;
  margin-top: 2rem;
  box-shadow: rgba(116, 129, 141, 0.1) 0px 3px 8px 0px;
} */


/* 
li {

}

.logo {
 cursor: pointer;
  color: var(--base);
  text-decoration: none;
  display: block;
}

.logo:hover {
  background: none;
}
 */
button {
  display: inline-block;
  cursor: pointer;
  background: none;
  font-family: Roboto, Arial, Helvetical, sans-serif;
  font-size: 16px;
  padding: 0;
  border: 0;
}

select,
.styled {
  white-space: nowrap;
  text-align: left;
  width: 180px;
  font-weight: 16px;
  padding: 18.5px 32px 18.5px 14px;
  margin: 1rem 0 0;
  display: inline-block;
  cursor: pointer;
  font-family: Robot, Arial, Helvetica, sans-serif;
  background: var(--surface);
  color: var(--base);
  font-size: 16px;
  min-width: 64px;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  border-width: 0;
  box-shadow: 
    0px 3px 1px -2px rgba(0,0,0,0.2), 
    0px 2px 2px 0px rgba(0,0,0,0.14), 
    0px 1px 5px 0px rgba(0,0,0,0.12);
}

.styled:hover
.styled:focus {
    line-height: 1.75;
  width: 180px;
    border-radius: 4px;
  padding: 18.5px 32px 18.5px 14px;
  margin: 1rem 0 0;
}

select {
  padding: 18.5px 32px 18.5px 14px;
  font-size: 16px;
  border-radius: 4px;
  width: 100%;
  width: 180px;
  margin-right: 1rem;
}
  </style>
  <body>
    $${content}
  </body>
  <script>
    const root = document.documentElement;
    const buttons = document.querySelectorAll('button');
    const supportsCssVar = CSS.supports('color', 'var(--test)');

    let dark = false;

    const toggleTheme = () => {
      if (dark) {
        root.style.setProperty('--background', 'white');
        root.style.setProperty('--base', 'black');
        root.style.setProperty('--text', '#3B454E');
        root.style.setProperty('--accent', '#EEEEEE');
        root.style.setProperty('--surface', '#E0E0E0');
        dark = false;
        buttons.innerText = 'Toggle Dark Mode';
        buttons.blur();
        return;
      }

      root.style.setProperty('--background', '#121212');
      root.style.setProperty('--base', 'white');
      root.style.setProperty('--text', '#CDCCCD');
      root.style.setProperty('--accent', '#3F3F3F');
      root.style.setProperty('--surface', '#363636');
      dark = true;
      buttons.innerText = 'Toggle Light Mode';
      buttons.blur();
      return;
    };


    if (supportsCssVar) {
      Array.from(buttons).forEach(instance => {
        instance.classList.add('active');
        instance.disabled = false;
        instance.addEventListener('click', toggleTheme);
      });
    }
  </script>
`