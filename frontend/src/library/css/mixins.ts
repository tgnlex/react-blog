const listBase = `
list-style-type: none;
  margin: 0;
`;

const row = `display: flex; flex-direction: row;`;
const column = `display: flex; flex-direction: column;`;
const inline = row + `& li { display: inline-block; }`;


const mixins = {
    row: row, 
    list: listBase,
    inline: inline,
    column: column,
};

export default mixins;
export { row, column, listBase };