const raw = require("../data/raw-upload.json");
const fieldMap = require("../data/normalized-fields.json");

function normalizeRow(row, map) {
  const output = {};
  for (const key of Object.keys(row)) {
    const normalizedKey = map.field_map[key] || key;
    let value = row[key];

    if (typeof value === "string" && !isNaN(value) && value.trim() !== "") {
      value = Number(value);
    }

    output[normalizedKey] = value;
  }
  return output;
}

const results = raw.rows.map((row) => normalizeRow(row, fieldMap));
console.log(JSON.stringify({ records: results }, null, 2));
