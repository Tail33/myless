/**
 * 1.模拟下拉框
 */

//创建Select对象创建函数
//参数elAry代表所要模拟的对象集合
var Select = function (elAry) {
    this.elAry = elAry;
};

//初始化所有功能
Select.prototype.init = function () {

    var self = this;
    Array.prototype.forEach.call(self.elAry, function (item) { //遍历对象集合 
        var select = item.querySelector(".select");
        var subBox = item.querySelector(".subBox");

        //实现点击下拉效果，再次点击隐藏，点击其他地方也会隐藏下拉列表。
        select.onclick = function (e) {
            var computedStyle = document.defaultView.getComputedStyle(subBox, null);
            if (computedStyle.display === "none") {
                subBox.style.display = "block";
            } else {
                subBox.style.display = "none";
            }
            e.stopPropagation(); //阻止冒泡
        };
        document.onclick = function () {
            subBox.style.display = "none";
        }

        //绑定下拉列表hover的效果
        var list = subBox.querySelectorAll("li");
        Array.prototype.forEach.call(list, function (item) {
            item.onmouseover = function () {
                item.style.backgroundColor = "red";
            };
            item.onmouseout = function () {
                item.style.backgroundColor = "#fff";
            };
        });
    });



};

var selectAry = document.querySelectorAll(".selectBox");
//实例化一个select
var select = new Select(selectAry);
select.init();