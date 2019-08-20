const {isValid,
    multiplyTable,
    generateMultiplyArray,
    printMultiplyTable} = require('../main');


it ('should check if parmarters is legal', () => {
    //given
    const firstNumber = 1;
    const secondNumber = 1000;

    //when
    const result = isValid(firstNumber,secondNumber);
    
    //then
    expect(result).toBe(true);
});

it ('should generate array with table items', () => {
    //given
    const firstNumber = 2;
    const secondNumber = 3;

    //when
    const result = generateMultiplyArray(firstNumber,secondNumber);

    //then
    expect(result[0][0]).toBe("2*2=4");
    expect(result[1][0]).toBe("2*3=6");
    expect(result[1][1]).toBe("3*3=9");
});

it ('should generate result string', () => {
    //given
    const array = [];
    array[0] = [];
    array[0][0] = "2*2=4";

    //when
    const result = printMultiplyTable(array);

    //then
    expect(result).toBe("2*2=4 \n");
});

it ('should print multiply table', () => {
    //given
    const firstNumber = 2;
    const secondNumber = 3;

    //when
    const result = multiplyTable(firstNumber,secondNumber);

    //then
    expect(result).toBe("2*2=4 \n2*3=6 3*3=9 \n");
});

