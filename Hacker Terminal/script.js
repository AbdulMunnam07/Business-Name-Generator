const func1 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Initializing...");
      }, 2000);
    });
  };
  
  func1()
    .then((e) => {
      const new_ele1 = document.createElement("h3");
      new_ele1.innerText = e;
      document.body.append(new_ele1);
      return "Reading files...";
    })
    .then((e) => {
      console.log(e); 
    });


const func2 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Initializing...");
      }, 2000);
    });
  };
  
  func2()
    .then((e) => {
      const new_ele2 = document.createElement("h3");
      new_ele2.innerText = e;
      document.body.append(new_ele2);
      return "Reading files...";
    })
    .then((e) => {
      console.log(e); 
    });


const func3 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Initializing...");
      }, 2000);
    });
  };
  
  func3()
    .then((e) => {
      const new_ele3 = document.createElement("h3");
      new_ele3.innerText = e;
      document.body.append(new_ele3);
      return "Reading files...";
    })
    .then((e) => {
      console.log(e); 
    });


const func4 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Initializing...");
      }, 2000);
    });
  };
  
  func4()
    .then((e) => {
      const new_ele4 = document.createElement("h3");
      new_ele4.innerText = e;
      document.body.append(new_ele4);
      return "Reading files...";
    })
    .then((e) => {
      console.log(e); 
    });


const func5 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Initializing...");
      }, 2000);
    });
  };
  
  func5()
    .then((e) => {
      const new_ele5 = document.createElement("h3");
      new_ele5.innerText = e;
      document.body.append(new_ele5);
      return "Reading files...";
    })
    .then((e) => {
      console.log(e); 
    });


// let new_ele2 = document.createElement("h3");
// setTimeout(() => {
//     new_ele2.innerText = "Reading files...";
// }, 1500);
// let new_ele3 = document.createElement("h3");
// setTimeout(() => {
//     new_ele3.innerText = "Processing files...";
// }, 2000);
// let new_ele4 = document.createElement("h3");
// setTimeout(() => {
//     new_ele4.innerText = "Cleaning up...";
// }, 2000);
// document.body.append(new_ele, new_ele2, new_ele3, new_ele4);
