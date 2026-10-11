const gallery =
document.getElementById("gallery");


let wallpapers=[

{
name:"银河星空",
type:"4K壁纸"
},

{
name:"未来城市",
type:"科幻壁纸"
},

{
name:"紫荆幻想",
type:"动漫壁纸"
}

];



if(gallery){


wallpapers.forEach(item=>{


gallery.innerHTML += `


<div class="glass card">

<h2>
${item.name}
</h2>


<p>
${item.type}
</p>


<button>
下载
</button>


<button>
♥ 收藏
</button>


</div>


`;


});


}
