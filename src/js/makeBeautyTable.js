;(function () {
    'use strict';


    let classes = [
        'js-image--one',
        'js-image--two',
        'js-image--three',
        'js-image--four'
    ];

    const table = document.querySelector('.js-table');
    const rowsAndCells = [
        table.rows[0].cells,
        table.rows[1].cells,
        table.rows[2].cells,
        table.rows[3].cells,
        table.rows[4].cells,
        table.rows[5].cells,
        table.rows[6].cells,
        table.rows[7].cells
    ];

    const drawTable = (arrOfRows, arrOfClasses) => {
        arrOfRows.forEach(arrOfCells => {
            [].map.call(arrOfCells, item => {
                let randomNum = Math.round(Math.random() * 10);
                if (randomNum === 0) {
                    item.classList.add(arrOfClasses[0]);
                } else {
                    if (randomNum < arrOfClasses.length) {
                        item.classList.add(arrOfClasses[randomNum]);
                    } else if ((randomNum - arrOfClasses.length) >= arrOfClasses.length) {
                        item.classList.add(arrOfClasses[Math.round(randomNum / 3)]);
                    } else {
                        item.classList.add(arrOfClasses[randomNum - arrOfClasses.length]);
                    }
                }
            });
        });
    };

    const checkCells = cell => {
        let cellClass = cell.classList[1];
        let prevCell = cell.previousElementSibling;
        let nextCell = cell.nextElementSibling;
        if (prevCell) {
            if (prevCell.classList.contains(cellClass)) {
                prevCell.classList.add('js-hover');
                checkCells(prevCell);
            }
        }
        if (nextCell) {
            if (nextCell.classList.contains(cellClass)) {
                nextCell.classList.add('js-hover');
                checkCells(nextCell);
            }
        }
    };

    const checkRows = event => {
      let target = event.target;
      let indexOfTarget = target.parentElement;
    };

    const makeMagic = event => {
        let target = event.target;
        if (target.tagName === 'TD') {
            checkCells(target);
        }
    };

    document.addEventListener('DOMContentLoaded',  () => {
       drawTable(rowsAndCells, classes);
    });

    table.addEventListener('mouseover', e => {
       makeMagic(e);
    });

    table.addEventListener('mouseout', () => {
        document.querySelectorAll('.js-hover').forEach(element => element.classList.remove('js-hover'));
    });
}());