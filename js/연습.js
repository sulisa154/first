$(function(){

var current= 0;
var $slides = $(".slide");
$slides.css({"left":"8000px"});
$slides.eq(2).css({"left":"0px"});

function fnMove(idx){
	$slides.eq(current).animate({ //현재 슬라이드는 왼쪽 밖으로 보냄
		left:"-8000px"
	},{
		start:function(){
			$slides.eq(idx).css({"left":"8000px"}); //다음슬라이드는 오른쪽밖에 준비
			$slides.eq(idx).animate({left:"0px"},3000); //가운데 범위 안으로 1초동안 이동
		},
		duration:3000
	});
	current=idx //이거 해줘야 계속 바뀜
}

//슬라이드 번호를 지정하는 함수
function setSlide(){
	if(current == 3){
		fnMove(0);
	}else{
		fnMove(current+1);
	}
}

var timer = setInterval(setSlide,3000);

$(".slide-group").on("mouseover",function(){
	clearInterval(timer);
});

$(".slide-group").on("mouseout",function(){
	timer = setInterval(setSlide,2000);
});

$(window).on("blur",function(){ //창을 닫거나 다른창을 보고 있을때
	clearInterval(timer);
});

$(window).on("focus",function(){ //다시 창을 눌렀을때
	timer = setInterval(setSlide,3000);
});


})