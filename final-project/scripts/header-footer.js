const header = `
<nav id="navbar">
<img src="images/playstation-logo.svg" alt="">
<ul id="nav-list">
	<!-- <li><img src="images/playstation-logo.svg" alt="PS Logo"></li> -->
	<li class="nav-item"><a id="triangle" href="index.html"><img src="images/buttons/triangle.svg" alt="PS Triangle Button">Home</a></li>
	<li class="nav-item"><a id="circle" href="company.html"><img src="images/buttons/circle.svg" alt="PS Circle Button">Company</a></li>
	<li class="nav-item"  id="playstation"><a id="cross" href="product.html"><img src="images/buttons/cross.svg" alt="PS Cross Button">Playstation</a></li>
	<li class="nav-item"><a id="square" href="contact.html"><img src="images/buttons/square.svg">Contact</a alt="PS Square Button"></li>
</ul>
</nav>
`
const footer = `
<small>All copyrights belong to Sony, Playstation, and each respective IP owner in potential violation for this school assignment.</small>
<div>
	<a href="https://www.facebook.com/PlayStationCanada/?brand_redir=14104316802"><i class="fa-brands fa-facebook-f"></i></a>
	<a href="https://www.instagram.com/playstation/"><i class="fa-brands fa-instagram"></i></a>
	<a href="https://www.youtube.com/channel/UC-2Y8dQb0S6DtpxNgAKoJKA"><i class="fa-brands fa-youtube"></i></a>
	<a href="https://twitter.com/PlayStation?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="fa-brands fa-x-twitter"></i></a>
	<a href="https://www.tiktok.com/@playstation?lang=en"><i class="fa-brands fa-tiktok"></i></a>
</div>
`

document.getElementById("js-head").innerHTML = header;
document.getElementById("js-foot").innerHTML = footer;