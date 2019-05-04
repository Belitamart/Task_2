const horizontal = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`];    //массив по горизонтали
const vertical = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`];      //масив по вертикали
let option1 = ``;                                               //вариант хода 1
let option2 = ``;                                               //вариант хода 2
let option3 = ``;                                               //вариант хода 3
let option4 = ``;                                               //вариант хода 4
let option5 = ``;                                               //вариант хода 5
let option6 = ``;                                               //вариант хода 6
let option7 = ``;                                               //вариант хода 7
let option8 = ``;                                               //вариант хода 8

function turnOptions() {
    let inputForm__startPosition = document.getElementById(`inputForm__startPosition`).value; //функция при нажатии на кнопку

    let horizontalInputValue = inputForm__startPosition[0];                //буквенные значения при вводе по горизонтали
    let verticalInputValue = inputForm__startPosition[1];                  //числовые значения при вводе по вертикали

    for (let optionCounter = 0; optionCounter < 8; optionCounter++) {      //цикл с проверками для каждого варианта хода по горизонтали
        if (horizontal[optionCounter] == horizontalInputValue) {           //сравнение введенного значения с элементом массива горизонтали

            option1 = horizontal[(optionCounter - 1)];                     //присваение 1 варианту хода буквенного значения
            if (option1 == undefined) {                                    //проверка на определенность значения
                option1 = ``;                                              //если значение не определено присваеваем пустое значение
            }

            option2 = horizontal[(optionCounter + 1)];
            if (option2 == undefined) {
                option2 = ``;
            }

            option3 = horizontal[(optionCounter + 2)];
            if (option3 == undefined) {
                option3 = ``;
            }

            option4 = horizontal[(optionCounter + 2)];
            if (option4 == undefined) {
                option4 = ``;
            }

            option5 = horizontal[(optionCounter + 1)];
            if (option5 == undefined) {
                option5 = ``;
            }

            option6 = horizontal[(optionCounter - 1)];
            if (option6 == undefined) {
                option6 = ``;
            }


            option7 = horizontal[(optionCounter - 2)];
            if (option7 == undefined) {
                option7 = ``;
            }

            option8 = horizontal[(optionCounter - 2)];
            if (option8 == undefined) {
                option8 = ``;
            }
        }
    }
    for (let optionCounter = 0; optionCounter < 8; optionCounter++) {       //цикл с проверками для каждого варианта хода по вертикали

        if (vertical[optionCounter] == verticalInputValue) {                //сравнение введенного значения с элементом массива вертикали

            if (option1 == ``) {                                            //сравнение с пустым значением, если пусто, ничего не требуется
            } else if (verticalInputValue < 3) {                            //так как фигура должна смещаться, то значение
                option1 = ``;                                               //не должно выходить за рамки доски, в значение записываем пустую строку
            }
            else option1 += vertical[(optionCounter - 2)];                  //все условия пройдены, добавляем необходимое значение

            if (option2 == ``) {
            } else if (verticalInputValue < 3) {
                option2 = ``;
            }
            else option2 += vertical[(optionCounter - 2)];

            if (option3 == ``) {
            } else if (verticalInputValue < 2) {
                option3 = ``;
            }
            else option3 += vertical[(optionCounter - 1)];

            if (option4 == ``) {
            } else if (verticalInputValue > 7) {
                option4 = ``;
            }
            else option4 += vertical[(optionCounter + 1)];

            if (option5 == ``) {
            } else if (verticalInputValue > 6) {
                option5 = ``;
            }
            else option5 += vertical[(optionCounter + 2)];

            if (option6 == ``) {
            } else if (verticalInputValue > 6) {
                option6 = ``;
            }
            else option6 += vertical[(optionCounter + 2)];

            if (option7 == ``) {
            } else if (verticalInputValue < 2) {
                option7 = ``;
            }
            else option7 += vertical[(optionCounter - 1)];

            if (option8 == ``) {
            } else if (verticalInputValue > 7) {
                option8 = ``;
            }
            else option8 += vertical[(optionCounter + 1)];
        }
    }

    let result = option1 + ` ` + option2 + ` ` + option3 + ` ` + option4 + ` `      //объявляем результирующую переменную
        + option5 + ` ` + option6 + ` ` + option7 + ` ` + option8;
    alert(`Возможные варианты хода: ${result}`);                                    //сообщаем о возможных ходах
}