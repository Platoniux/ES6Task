;(function () {
    'use strict';

    let classes = [
        'js-image--one',
        'js-image--two',
        'js-image--three',
        'js-image--four'
    ];

    const tableForHighlight = document.querySelector('.js-table');
    const rowsAndCells = [].map.call(tableForHighlight.rows, item => {
       return item.cells;
    });

    document.addEventListener('DOMContentLoaded',  () => {
       drawTable(rowsAndCells, classes);
    });

    tableForHighlight.addEventListener('mouseover', e => {
       makeMagic(e);
    });

    tableForHighlight.addEventListener('mouseout', () => {
        document.querySelectorAll('.js-hover').forEach(element => element.classList.remove('js-hover'));
    });

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
                        item.classList.add(arrOfClasses[Math.round(randomNum / 19)]);
                    } else {
                        item.classList.add(arrOfClasses[randomNum - arrOfClasses.length]);
                    }
                }
            });
        });
    }

    function checkNextCells(cell) {
        let cellClass = cell.classList[1];
        let indexOfCell = cell.cellIndex;
        let nextCell = cell.nextElementSibling;
        let prevCell = cell.previousElementSibling;
        let prevRow = cell.parentElement.previousElementSibling;
        let nextRow = cell.parentElement.nextElementSibling;
        while (nextCell && nextCell.classList.contains(cellClass) && !nextCell.classList.contains('js-hover')) {
            nextCell.classList.add('js-hover');
            nextCell = nextCell.nextElementSibling;
        }
        while (prevCell && prevCell.classList.contains(cellClass) && !prevCell.classList.contains('js-hover')) {
            prevCell.classList.add('js-hover');
            prevCell = prevCell.previousElementSibling;
        }
        while (nextRow && nextRow.cells[indexOfCell].classList.contains(cellClass) && !nextRow.cells[indexOfCell].classList.contains('js-hover')) {
            nextRow.cells[indexOfCell].classList.add('js-hover');
            nextRow = nextRow.nextElementSibling;
        }
        while (prevRow && prevRow.cells[indexOfCell].classList.contains(cellClass)) {
            prevRow.cells[indexOfCell].classList.add('js-hover');
            prevRow = prevRow.previousElementSibling;
        }
    }

    function workOnHover(arrOfRows) {
        [].forEach.call(arrOfRows, cells => {
           [].forEach.call(cells, item => {
              if (item.classList.contains('js-hover')) {
                  checkNextCells(item);
              }
           });
        });
    }

    function makeMagic(event) {
        let target = event.target;
        if (target.tagName === 'TD') {
            target.classList.add('js-hover');
            checkNextCells(target);
            workOnHover(rowsAndCells);
        }
    }
}());