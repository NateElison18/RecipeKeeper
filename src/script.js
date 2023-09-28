pbjDefaultValues = [['time', 2], ['bread', 2], ['pb', 2], ['jelly', 2]];
nuggsDefaultValues = [['time', 15], ['nuggs', 8]];
toastDefaultValues = [['time', 3], ['bread', 2], ['jam', 2]];

function setQuantity(food, direction) {
    let portions;
    switch (food) {
        case 'pbj':
            portions = setPortion(document.getElementById('pbjPortion'), direction);
            setPbjPortions(portions);
            break;
        case 'nuggs':
            portions = setPortion(document.getElementById('nuggsPortion'), direction);
            setNuggsPortions(portions);
            break;
        case 'toast':
            portions = setPortion(document.getElementById('toastPortion'), direction);
            setToastPortions(portions);
            break;
    }
}

function setPortion(displayedQuantity, direction) {
    let portions = displayedQuantity.getAttribute('value');
    if (direction === 'up') {
        if (portions == 0.5) {
            portions = 1;
        } else {
            portions++;
        }
    } else if (portions <= 1){
        portions = 0.5;
    } else {
        portions--;
    }
    displayedQuantity.setAttribute('value', portions);
    return portions;
}

function setPbjPortions(portions) {
    let displayedTime = document.getElementById('pbjTime');
    let displayedBreadQty = document.getElementById('pbjBreadPortion');
    let displayedPbQty = document.getElementById('pbjPbPortion');
    let displayedJellyQty = document.getElementById('pbjJellyPortion');

    displayedTime.innerHTML = portions * pbjDefaultValues[0][1];
    displayedBreadQty.innerHTML = portions * pbjDefaultValues[1][1];
    displayedPbQty.innerHTML = portions * pbjDefaultValues[2][1];
    displayedJellyQty.innerHTML = portions * pbjDefaultValues[3][1];
}

function setNuggsPortions(portions) {
    let displayedTime = document.getElementById('nuggsTime');
    let displayedNuggPortion = document.getElementById('chickenNuggsPortion');

    displayedTime.innerHTML = portions * nuggsDefaultValues[0][1];
    displayedNuggPortion.innerHTML = portions * nuggsDefaultValues[1][1];

}

function setToastPortions(portions) {
    let displayedTime = document.getElementById('toastTime');
    let displayedBreadQty = document.getElementById('toastBreadPortion');
    let displayedJamQty = document.getElementById('toastJamPortion');

    displayedTime.innerHTML = portions * toastDefaultValues[0][1];
    displayedBreadQty.innerHTML = portions * toastDefaultValues[1][1];
    displayedJamQty.innerHTML = portions * toastDefaultValues[2][1];
}

