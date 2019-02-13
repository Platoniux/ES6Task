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

    document.addEventListener('DOMContentLoaded', function () {
       drawTable(rowsAndCells, classes);
    });

    table.addEventListener('mouseover', function (e) {
       makeMagic(e);
    });
    
    function makeMagic(event) {
        let target = event.target;
        if (target.nodeType === 'TD') {
            checkCells(target);
        }
    }

    function checkCells(cell) {
        let cellClass = cell.className;
        let prevCell = cell.previousElementSibling;
        let nextCell = cell.nextElementSibling;
        if (prevCell.className === cellClass) {
            prevCell.classList.toggle('js-hover');
            checkCells(prevCell);
        }
        if (nextCell.className === cellClass) {
            nextCell.classList.toggle('js-hover');
            checkCells(nextCell);
        }
    }

    function drawTable(arrOfRows, arrOfClasses) {
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
    }
}());