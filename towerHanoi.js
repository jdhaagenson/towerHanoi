let towerLeft = document.querySelector('#start');
let towerMiddle = document.querySelector('#offset');
let towerRight = document.querySelector('#end');
let disks = document.querySelector('.disks');
let disksCount = document.querySelector('#disksCount');

towerLeft.addEventListener('mouseover', function(event) {
	//Highlights towerLeft and unhighlights when user selects other tower and cursor leaves newly selected tower
	if (event.target == towerLeft) {
		towerLeft.style.boxShadow = '0px 0px 50px none';
	}
	if (event.target == towerLeft) {
		towerLeft.addEventListener('click', function(event) {
			if (event.target == towerLeft) {
				towerLeft.style.boxShadow = '0px 0px 50px green';
			}
		});
	}
	if (event.target == towerLeft) {
		towerLeft &&
			towerRight &&
			towerMiddle.addEventListener('mouseleave', function(event) {
				if (event.target != towerLeft) {
					towerLeft.style.boxShadow = '0px 0px 0px black';
				}
			});
	}
});

towerMiddle.addEventListener('mouseover', function(event) {
	//Highlights towerMiddle and unhighlights when user selects other tower and cursor leaves newly selected tower (WIP)
	if (event.target == towerMiddle) {
		towerMiddle.style.boxShadow = '0px 0px 50px none';
	}
	if (event.target == towerMiddle) {
		towerMiddle.addEventListener('click', function(event) {
			if (event.target == towerMiddle) {
				towerMiddle.style.boxShadow = '0px 0px 50px green';
			}
		});
	}
	if (event.target == towerMiddle) {
		//middle tower does not change back to black apon mouseleave event.
		towerLeft &&
			towerRight &&
			towerMiddle.addEventListener('mouseleave', function(event) {
				if (event.target != towerMiddle) {
					towerMiddle.style.boxShadow = '0px 0px 0px black';
				}
			});
	}
});

towerRight.addEventListener('mouseover', function(event) {
	//Highlights towerRight and unhighlights when user selects other tower and cursor leaves newly selected tower
	if (event.target == towerRight) {
		towerRight.style.boxShadow = '0px 0px 50px none';
	}
	if (event.target == towerRight) {
		towerRight.addEventListener('click', function(event) {
			if (event.target == towerRight) {
				towerRight.style.boxShadow = '0px 0px 50px green';
			}
		});
	}
	if (event.target == towerRight) {
		towerLeft &&
			towerRight &&
			towerMiddle.addEventListener('mouseleave', function(event) {
				if (event.target != towerRight) {
					towerRight.style.boxShadow = '0px 0px 0px black';
				}
			});
	}
});

function disksCounterOn() {
	//Displays total disk on tower
	let disksCountText = document.querySelector('#disksCount');
	let count = disks.childElementCount;
	if (count == disks.childElementCount) {
		disksCountText.innerHTML = count - 1 + ': ' + 'Disks';
	}
}

function topDisk() {
	//CURRENTLY WORKING ON
	let topDisk = disks.lastElementChild;
	if (topDisk == disks.lastElementChild) {
		disks.innerHTML = topDisk;
	}
}
