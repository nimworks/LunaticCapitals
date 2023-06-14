(function (d) {

	var mb = d.getElementById('menuBtn');
	if (!mb) return;
	var m = d.getElementById('menu');
	if (!m) return;

	mb.onclick = function () {
		if (m.classList.contains('visible')) {
			m.classList.remove('visible');
		} else {
			m.classList.add('visible');
		}
		
	};

	var mbg = d.getElementById('menuBg');
	if (mbg) mbg.onclick = function () { m.classList.remove('visible') };
})(document);

(function (d) {
	var b = d.getElementById('avatarMenuBtn');
	if (!b) return;
	var m = d.getElementById('avatarMenu');
	if (!m) return;
	b.onclick = function () {
		if (m.classList.contains('visible')) {
			m.classList.remove('visible');
		} else {
			m.classList.add('visible');
		}
		
	};
})(document);