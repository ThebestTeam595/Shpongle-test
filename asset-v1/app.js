/* i dunno what to put here, so just go check out shpongle, they make good shit */
var app=new function(){this.name="Shpongle",this.version="DMT",this.date="2024",this.folder="asset-v1/",this.looptime=7928,this.bpm=181.63,this.totalframe=380,this.nbpolo=7,this.nbloopbonus=3,this.bonusloopA=!0,this.bonusendloopA=!0,this.recmaxloop=68,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepolotshirt="polo-sprite-tshirt.png",this.spritepicto="game-picto.png",this.colBck="#1a0d39",this.col0="#7800c7",this.col1="#581f7e",this.col2="#441563",this.col3="#2c0b42",this.col4="#160621",this.animearray=[{name:"1_vitrazh",color:"107fe1",uniqsnd:!0},{name:"2_hallucinogen",color:"2e2f3b",uniqsnd:!0},{name:"3_mushroomhead",color:"9f3204",uniqsnd:!0},{name:"4_rhodo",color:"3abef0",uniqsnd:!0},{name:"5_tropicana",color:"f0a90e",uniqsnd:!0},{name:"6_brain",color:"ff76a6",uniqsnd:!0},{name:"7_shaggyhat",color:"32c92a",uniqsnd:!0},{name:"8_masked",color:"0b4fb8",uniqsnd:!0},{name:"9_elder",color:"fdf614",uniqsnd:!1},{name:"10_statue",color:"acb9c5",uniqsnd:!1},{name:"11_a-f-f",color:"96a1ad",uniqsnd:!0},{name:"12_raja-ram",color:"e25b07",uniqsnd:!0},{name:"13_jelly",color:"64fcff",uniqsnd:!1},{name:"14_circuits",color:"434652",uniqsnd:!0},{name:"15_sun-god",color:"f7d011",uniqsnd:!1},{name:"16_desmond",color:"22ab49",uniqsnd:!1},{name:"17_demon",color:"181823",uniqsnd:!1},{name:"18_creature",color:"e73ea9",uniqsnd:!1},{name:"19_pauline",color:"061f8e",uniqsnd:!0},{name:"20_totem",color:"e9820b",uniqsnd:!1}],this.bonusarray=[{name:"DMT",src:"b1-dmt-hb.mp4",code:"1,2,6,11,16",sound:"bonus-dmt",aspire:"aspire-dmt"}],this.unlockerarray=[];for(var n=0,a=this.animearray.length;n<a;n++){var i=this.animearray[n].name;this.animearray[n].soundA=i+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?i+"_a":i+"_b",this.animearray[n].anime=i+"-sprite.png",this.animearray[n].animeData=i+".json"}};this.unlockerarray=[];
