
/*window.onload = function()
{
	var base = new Base();
	$().getId("box").css("color","red");

	$().getTagName("p").css("color","green").html("duan").click(function(){
		alert('a');
	}).css("backgroundColor","pink");
};



*/


window.onload = function()
{
	//个人中心
	$().getClass("member").hover(function()
								{
									$().getClass("member").css("background","url(images/arrow2.png) no-repeat 55px center");
									$().getClass('member_ul').show();
								},function()
								{
									$().getClass("member").css("background","url(images/arrow.png) no-repeat 55px center");
									$().getClass('member_ul').hide();
								});
//登录框
}



