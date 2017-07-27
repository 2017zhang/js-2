/**
 *Created by 飞.no 2017/7/25/001.
 **/

var wordGroup1=JSON.parse(sessionStorage.getItem("aaa"));//把JSON字符串转换成数组。
var group=wordGroup1;
console.log(group);

var clickNum=1;
var playNum=1;

// var killNum=sessionStorage.kill;
// var playerNum=sessionStorage.all;
// var group=sessionStorage.allNum;
//
// Group=group.split(",");
//
// console.log("杀手人数"+killNum);
// console.log("玩家总人数"+playerNum);
// console.log(Group);

var contant="";

for (var i=0;i<group.length;i++){

    // contant += "<div class='news'>" +
    //     '<div class="civilian"></div>>' + group[i]  +
    //     '<div class="news-foot">' + (i + 1) + "号" +
    //     '</div>' + "</div>";
    $('.news').appendChild('<div class="civilian"></div>>' + group[i]  +
        '<div class="news-foot">' + (i + 1) + "号" +
        '</div>')
}