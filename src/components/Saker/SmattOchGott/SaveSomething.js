export function saveSomething(name, item) {
  let toSave = localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : [];

  const getIndex = (id) => {
    const i = toSave.findIndex((e) => e.id === id);
    return i;
  };

  let i = getIndex(item.id);

  if (i === -1) {
    toSave.push(item);
    localStorage.setItem(name, JSON.stringify(toSave));
  } else {
    toSave[i] = item;
  }

  console.log(item, "är sparat till " + name);
}

export default saveSomething;
