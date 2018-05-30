//@ts-check
//@ts-ignore
module.exports = class IndexPath {
    /**
     * 
     * @param {number} row 
     * @param {string} column 
     */
    constructor(row, column) {
        this.row = row
        this.column = column
    }

    range() {
        return `${this.column}${this.row}`
    }
}
