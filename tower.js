// trying a different method

let towerLeft = document.getElementById("start")
let towerMiddle = document.getElementById("offset")
let towerRight = document.getElementById("end")

let towers = [towerLeft, towerMiddle, towerRight]

let diskXL = document.getElementById("xlarge")
let diskL = document.getElementById("large")
let diskM = document.getElementById("medium")
let diskS = document.getElementById("small")

let disks = [diskXL, diskL, diskM, diskS]
// mode keeps track of clicks, assigns them into source and destination.
let mode = "NewGame"
let destination = ""
let source = ""

// condition will change to Winner if wins function returns True, else Loser, both trigger new game.
let condition = "Playing"

const checkForWin = () => {
    if (towerRight.childElementCount == 5) {
        condition = "winner"
        return alert("You WIN!")
    } else {
        condition = "stillplaying"
        return
    }
}

const moveDisk = (source, destination) => {
    let sourceTopDisk = source.lastElementChild
    let destinationTopDisk = destination.lastElementChild
    if (source.childElementCount == 5) {
        // if all disks are on source tower, none are on destination tower
        destination.appendChild(source.lastElementChild)
        source = ""
        destination = ""
        return checkForWin()
    } else if (source.childElementCount == 1) {
        // source tower doesn't have any disks to move
        source = ""
        destination = ""
        return alert("Error: source tower does not contain any disks.")
    } else if (source.childElementCount < 5 && destination.childElementCount != 1) {
        // if source tower does not contain all the disks AND destination.tower is not empty
        if (sourceTopDisk.attributes.dataset.width < destination.attributes.dataset.width) {
            destination.appendChild(sourceTopDisk)
            source = ""
            destination = ""
            return checkForWin()
        } else if (sourceTopDisk.attributes.dataset.width > destination.attributes.dataset.width) {
            source = ""
            destination = ""
            return alert("Error: source tower's top most disk is larger than destination tower's")
        } else {
            source = ""
            destination = ""
            return checkForWin()
        }
    } else {
        source = ""
        destination = ""
        return checkForWin()
    }
}
// eventlisteners
for (let tower of towers) {
    tower.addEventListener("click", function(event) {
        console.dir(event.currentTarget)
        if (source == "") {
            source = tower
            mode = 'source'
            return mode
        } else if (mode == 'source') {
            destination = tower
            mode = 'destination'
            return moveDisk(source, destination)
        } else if (mode == "destination") {
            return moveDisk(source, destination)
        }

    }
        )}


