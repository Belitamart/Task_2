function turnOptions() {
    let inputForm__startPosition = document.getElementById(`inputForm__startPosition`).value;
    const horizontal = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`];
    const vertical = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`];
    let horizontalInputValue = inputForm__startPosition[0];
    let verticalInputValue = inputForm__startPosition[1];
    let option1;
    let option2 =``;
    let option3 =``;
    let option4 =``;
    let option5 =``;
    let option6 =``;
    let option7 =``;
    let option8 =``;
    for (let optionCounter = 0; optionCounter < 8; optionCounter++) {
        if (horizontal[optionCounter] == horizontalInputValue) {
            option1 = horizontal[(optionCounter - 1)];
            if (option1 == undefined) {
                option1=``;
            } /*else if (option1 == NaN) {
                option1 = ``;
            }*/


            /*if (option2 == undefined) {
                option2 = ``;
            } else if (option2 == NaN) {
                option2 = ``;
            } else option2 = horizontal[(optionCounter + 1)];


            if (option3 == undefined) {
                option3 = ``;
            } else if (option3 == NaN) {
                option3 = ``;
            } else option3 = horizontal[(optionCounter + 2)];


            if (option4 == undefined) {
                option4 = ``;
            } else if (option4 == NaN) {
                option4 = ``;
            } else option4 = horizontal[(optionCounter + 2)];


            if (option5 == undefined) {
                option5 = ``;
            } else if (option5 == NaN) {
                option5 = ``;
            } else option5 = horizontal[(optionCounter + 1)];


            if (option6 == undefined) {
                option6 = ``;
            } else if (option6 == NaN) {
                option6 = ``;
            } else option6 = horizontal[(optionCounter - 1)];


            if (option7 == undefined) {
                option7 = ``;
            } else if (option7 == NaN) {
                option7 = ``;
            } else option7 = horizontal[(optionCounter - 2)];


            if (option8 == undefined) {
                option8 = ``;
            } else if (option8 == NaN) {
                option8 = ``;
            } else option8 = horizontal[(optionCounter - 2)];*/
        }
        if (vertical[optionCounter] == verticalInputValue) {
            if (option1 == ``) {
            } else option1 += vertical[(optionCounter + 2)];


           /* if (option2 == ``) {
            } else option2 += vertical[(optionCounter + 2)];


            if (option3 == ``) {
            } else option3 += vertical[(optionCounter + 1)];


            if (option4 == ``) {
            } else option4 += vertical[(optionCounter - 1)];


            if (option5 == ``) {
            } else option5 += vertical[(optionCounter - 2)];


            if (option6 == ``) {
            } else option6 += vertical[(optionCounter - 2)];


            if (option7 == ``) {
            } else option7 += vertical[(optionCounter - 1)];


            if (option8 == ``) {
            } else option8 += vertical[(optionCounter + 1)];*/
        }
    }


    console.log(option1, option2, option3, option4, option5, option6, option7, option8);
}