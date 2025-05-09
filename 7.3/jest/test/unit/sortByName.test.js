const sorting = require("../../app");

describe("Books names test suit", () => {
   it("Books names should be sorted in ascending order", () => {
    const input = ["Гарри Поттер",
         "Властелин Колец",
         "Волшебник изумрудного города",];

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
   });


   it("Test2", () => {
    const input = [
      "F", "F",];

    const expected = [
      "F", "F",];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
   });

   it("Test3", () => {
    const input = [
      "Волшебник изумрудного города",
      "Властелин Колец",
      "Гарри Поттер",
      ];

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
   });

});


