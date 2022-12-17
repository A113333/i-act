export function saveSomething(name, item) {
  let toSave = localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : [];

  toSave.push(item);
  localStorage.setItem(name, JSON.stringify(toSave));
  console.log(item, "är sparat till");
}

export default saveSomething;
