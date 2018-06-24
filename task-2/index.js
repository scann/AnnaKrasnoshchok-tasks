/**
 * Проверяет состоят ли массивы arr1 и arr2 из одинакового
 * числа одних и тех же элементов
 *
 * @param {Number[]} arr1 - отсортированный по возрастанию
 *                          массив уникальных элементов
 * @param {Number[]} arr2 - массив произвольной длинны произвольных чисел
 * @returns {Boolean}
 */
function haveSameItems(arr1, arr2) {
    //convert first array to Set to ensure all its elements are unique

    let arr2Set = new Set(arr2);

    const arr1Length = arr1.length;
    const arr2Length = arr2Set.size;

    if (arr1Length !== arr2Length) return false;

    // this goal also could be accomplished with built-in functions like
    // 'filter', but given conditions do not state explicitly whether
    // these features may be used.
    
    // implementation of binary search:

    let findValue = function (list, value) {
        let start = 0;
        let stop = list.length - 1;

            while(start <= stop) {
                let middle = (start + stop) >> 1;
                if (list[middle] === value) {
                    return middle;
                } else if (list[middle] < value) {
                    start = middle + 1;
                } else {
                    stop = middle - 1;
                }
            }
        return -1;
    };


    let count = 0;
    arr2.forEach(function (value) {
        if (findValue(arr1, value) >= 0) ++count;
    });
    return (count == arr2Length) ? true : false;
    }
    console.log(haveSameItems([11, 22, 48, 54], [11, 48, 54, 22]));

export default haveSameItems;
