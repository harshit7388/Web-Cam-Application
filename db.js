//task 1- open database
//task 2- create object store- can be created only in upgrade needed event, modification can be done in upgrade needed event only

let db;
let openRequest = indexedDB.open("myDataBase");
openRequest.addEventListener("success", (e) => {
  console.log("DB Success");
  db = openRequest.result;
});
openRequest.addEventListener("error", (e) => {
  console.log("DB error");
});
openRequest.addEventListener("upgradeneeded", (e) => {
  console.log("DB upgraded and also for initial DB creation");
  db = openRequest.result;

  db.createObjectStore("video", { keyPath: "id" });
  db.createObjectStore("image", { keyPath: "id" });
});
