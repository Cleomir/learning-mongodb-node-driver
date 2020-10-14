// $expr
const expr = { $expr: "expression" };
// $jsonSchema
const jsonSchema = {
  $jsonSchema: {
    required: ["name"],
    properties: {
      name: {
        bsonType: "string",
        description: "some description",
      },
    },
  },
};
// $mod(modulus)
const mod = { property: { $mod: ["divisor", "remainder"] } };
// $regex
const regex = { property: { $regex: /pattern/, $options: "options" } };
// $text
const text = { $text: { $search: "text" } };
