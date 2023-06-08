/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("record").del();
  await knex("record").insert([
    { "date-id": "2023-06-01", id: 1, training: "ベンチプレス" },
    { "date-id": "2023-06-01", id: 1, training: "スクワット" },
    { "date-id": "2023-06-02", id: 1, training: "デッドリフト" },
    { "date-id": "2023-06-02", id: 1, training: "腕立て伏せ" },
    { "date-id": "2023-06-02", id: 1, training: "ランニング" },
    { "date-id": "2023-06-03", id: 1, training: "スミス" },
    { "date-id": "2023-06-03", id: 1, training: "腹筋ローラー" },
    { "date-id": "2023-06-04", id: 1, training: "ランジ" },
    { "date-id": "2023-06-04", id: 1, training: "腹筋" },
  ]);
};
