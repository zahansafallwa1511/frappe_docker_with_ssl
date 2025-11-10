import fetch from "node-fetch"; // npm install node-fetch@2

const itemName = "Men’s Denim Jeans – Slim Fit";
const apiUrl = `https://erp-dpp-byo-tres.digiprodpass.com/api/resource/Item/${encodeURIComponent(itemName)}`;

fetch(apiUrl, {
  method: "GET",
  headers: {
    "Authorization": "token 3317319160fccc1:0edb54c46bca48c",
    "Content-Type": "application/json",
  }
})
  .then(res => res.json())
  .then(data => console.log("Item data:", data))
  .catch(err => console.error("Error:", err));