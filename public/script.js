let sourceTowerEl = document.getElementById("tower1");
let destinationTowerEl = document.getElementById("tower1");
let sourceNum = 0;
let destNum = 0;
let isSourceSelected = false;
let numOfTiles = 5;
let towerValues = [
    [5,4,3,2,1],
    [],
    []
]
let colors = ["red", "tomato", "yellow", "chartreuse", "aqua"];
let widths = [50, 70, 90, 110, 130];

testFunc = (event) => {
    if (!isSourceSelected) {
        isSourceSelected = true;
        sourceNum = event.target.dataset.tnum;
        event.target.disabled = true;
        sourceTowerEl = document.getElementById(`tower${sourceNum}`);
    } else {
        isSourceSelected = false;
        destNum = event.target.dataset.tnum;
        destinationTowerEl = document.getElementById(`tower${destNum}`);
        let sourceVal = towerValues[sourceNum - 1];
        let destVal = towerValues[destNum - 1];
        let topOfSource = sourceVal[sourceVal.length - 1];
        let topOfDest = destVal[destVal.length - 1];

        // If the top of the source tower is smaller than the top of the top of the destination tower
        if (topOfSource < topOfDest || topOfDest == undefined) {
            let temp = sourceVal.pop();
            destVal.push(temp);
            sourceTowerEl.innerHTML = "";
            destinationTowerEl.innerHTML = "";

            for (let i = 0; i < sourceVal.length; i++) {
                let p = document.createElement("p");
                p.innerText = sourceVal[i];
                p.style.width = `${widths[sourceVal[i] - 1]}px`;
                p.style.backgroundColor = colors[sourceVal[i] - 1];
                sourceTowerEl.appendChild(p);
            }
            for (let i = 0; i < destVal.length; i++) {
                let p = document.createElement("p");
                p.innerText = destVal[i];
                p.style.width = `${widths[destVal[i] - 1]}px`;
                p.style.backgroundColor = colors[destVal[i] - 1];
                destinationTowerEl.appendChild(p);
            }

            if (destVal.length === 5 && destNum === 3) {
                let winHeaderEl = document.getElementById("winAlert");
                winHeaderEl.style.display = "inline";
            }
        }

        let tButtons = document.getElementsByClassName("tButtons");
        for (let i = 0; i < 3; i++) {
            tButtons[i].disabled = false;
        }
    }
}