let got = 0;
let miss = 0;

for (let i = 1; i < 10; i++) {
	let purpose = document.getElementById(`hole${i}`);
	purpose.onclick = () => {
		if (purpose.className.includes('hole hole_has-mole')) {
			got += 1;
			document.getElementById('dead').textContent = got;
			if (got === 10) {
				alert('Вы победили))');
				return location.reload();
			}
		}
		else {
			miss += 1;
			document.getElementById('lost').textContent = miss;
			if (miss === 5) {
				alert('Вы проиграли((');
				return location.reload();
			}
    }
  }  
}