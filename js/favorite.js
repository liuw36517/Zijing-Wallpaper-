function favorite(name){


let list =
JSON.parse(
localStorage.getItem("favorite")
||"[]"
);



list.push(name);



localStorage.setItem(

"favorite",

JSON.stringify(list)

);



alert(
"收藏成功"
);


}
