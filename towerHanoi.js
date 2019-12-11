let towerLeft = document.querySelector('#start');
let towerMiddle = document.querySelector('#offset');
let towerRight = document.querySelector('#end');
let disks = document.querySelector('.disks');

// let disksCount = document.querySelector('#disksCount');

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


let selected = null

towerLeft.addEventListener('click', function(event) {
	console.dir(event.currentTarget)
	if (selected == null) {
		console.log(event.currentTarget.id + "is selected")
		selected = event.currentTarget.id
		return selected
	} else if (selected == event.currentTarget.id) {
		console.log("Already selected. Do nothing.")
		return
	} else {
		console.log("Calling moveTopDisk")
		console.log(selected)
		console.log(event.currentTarget.id)
		return moveTopDisk(selected, event.currentTarget.id)
	}
})

towerMiddle.addEventListener('click', function(event) {
	console.dir(event.currentTarget)
	if (selected == null) {
		console.log(event.currentTarget.id + "is selected")
		selected = event.currentTarget.id
	} else if (selected == event.currentTarget.id) {
		console.log("Already selected. Do nothing.")
		return
	} else {
		console.log("Calling moveTopDisk")
		console.log(selected)
		console.log(event.currentTarget.id)
		return moveTopDisk(selected, event.currentTarget.id)
	}
})

towerRight.addEventListener('click', function(event) {
	console.dir(event.currentTarget)
	if (selected == null) {
		console.log(event.currentTarget.id + "is selected")
		return selected = event.currentTarget.id
	} else if (selected == event.currentTarget.id) {
		console.log("Already selected. Do nothing.")
		return
	} else {
		console.log("Calling moveTopDisk")
		console.log(selected)
		console.log(event.currentTarget.id)
		return moveTopDisk(selected, event.currentTarget.id)
	}
})

const checkForWin = () => {
	let condition = ""
	if (towerRight.childElementCount==5) {
		return alert("You Win!")
	} else {
		return
	}
}
const moveTopDisk = (fromID, toID) => {
	let towerFrom = document.getElementById(fromID)
	console.log(towerFrom)
	let towerTo = document.getElementById(toID)
	console.log(towerTo)
	let diskToMove = towerFrom.lastElementChild
	console.log(diskToMove.dataset.width)
	if (towerTo.childElementCount == 1) {
		towerTo.appendChild(diskToMove)
	} else if (diskToMove.dataset.width < towerTo.lastElementChild.dataset.width) {
		towerTo.appendChild(diskToMove)
	} else if (diskToMove.dataset.width > towerTo.lastElementChild.dataset.width) {
		alert("Illegal move! Disks cannot be placed on top of a smaller disk")
	}
	selected = null
	return checkForWin()
}

function reset() {
	location.reload();
}

