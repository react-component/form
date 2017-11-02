class Field {
  constructor(fields) {
    Object.assign(this, fields);
  }
}

export function isFormField(obj) {
  return obj instanceof Field;
}

export default function createFormField(field) {
  return new Field(field);
}
