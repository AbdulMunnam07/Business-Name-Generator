let additems = async (items) => {
  await randomDely();
  let div = document.createElement("div")
  div.innerHTML = items;
  document.body.append(div)
}

let randomDely = () => {
  return new Promise((resolve, reject) => {
    let timeout = 1 + 6* Math.random();
    setTimeout(() => {
      resolve()
    }, timeout*1000);
  })
  
}

async function main() {
  
  setInterval(() => {
    let last = document.body.getElementsByTagName("div");
    last = last[last.length - 1]
    if (last.innerHTML.endsWith("...")){
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    }
    else{
      last.innerHTML = last.innerHTML + "."
    }
  }, 300);
  
  let text = ["Initializing Hacking", "Password files detected", "Sending all private files and public files to the server", "Reaeding all data", "Cleaning Up", "You got Hacked!!!", "Continue"]
  
for (const items of text) {
  await additems(items)
}

}           
main();