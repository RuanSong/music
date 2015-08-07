function MusicBox(musicBox){
	var index = 0;
	var audioDom = createMusicBox(musicBox);
	/** create a music box**/
	function createMusicBox(musicBox){
		var audioDom = document.createElement("audio");
		audioDom.src = musicBox[index].url;
		$("#play .album img").attr("src",musicBox[index].image);
		$("#music ul li a img").removeClass("music_rotae");
		return audioDom;
	}
	//
	$(function(){
		$("#music ul li a.song").click(function(){
			$("#music ul li a img").removeClass("music_rotae");
			$(this).find("img").addClass("music_rotae");
			var tmpSrc = $(this).find("img").attr("src");
			var index = $(this).parent().index();
			var title = $(this).data("title");
			$("#play .album img").attr("src",tmpSrc);
			$("#play .title").html(title);
			audioDom.src = musicBox[index].url;
			$("#play .panel .btn .b_play").css("display","none");
			$("#play .panel .btn .b_stop").css("display","block");
			audioDom.play();
		})
		$("#play .panel .btn .b_play").click(function(){
			$(this).css("display","none");
			$("#play .panel .btn .b_stop").css("display","block");
			$("#music ul li a img").removeClass("music_rotae");
			$("#music ul li a img").eq(index).addClass("music_rotae");
			audioDom.play();
		})
		$("#play .panel .btn .b_stop").click(function(){
			$(this).css("display","none");
			$("#play .panel .btn .b_play").css("display","block");
			audioDom.pause();
		})
		$("#play .panel .btn .b_pre").click(function(){
			if(index-- ==0){
				index = musicBox.length - 1;
			}
			audioDom.src = musicBox[index].url;
			$("#play .title").html(musicBox[index].title);
			$("#play .album img").attr("src",musicBox[index].image);
			if($("#play .panel .btn .b_stop").css("display")=='block'){
				$("#music ul li a img").removeClass("music_rotae");
				$("#music ul li a img").eq(index).addClass("music_rotae");
				audioDom.play();
			}
		})
		$("#play .panel .btn .b_next").click(function(){
			if(++index == musicBox.length){
				index = 0;
			}
			audioDom.src = musicBox[index].url;
			$("#play .title").html(musicBox[index].title);
			$("#play .album img").attr("src",musicBox[index].image);
			if($("#play .panel .btn .b_stop").css("display")=='block'){
				$("#music ul li a img").removeClass("music_rotae");
				$("#music ul li a img").eq(index).addClass("music_rotae");
				audioDom.play();
			}
		})
	})
}
var musicBox = [{'title':'咱们结婚吧','url':'mp3/1.mp3','image':'images/1.jpg'},{'title':'当你老了','url':'mp3/2.mp3','image':'images/2.jpg'},{'title':'母亲','url':'mp3/3.mp3','image':'images/3.jpg'},{'title':'相亲相爱一家人','url':'mp3/4.mp3','image':'images/4.jpg'},{'title':'未知歌曲','url':'mp3/5.mp3','image':'images/5.jpg'},{'title':'烛光里的妈妈','url':'mp3/6.mp3','image':'images/6.jpg'},{'title':'我可以抱你吗','url':'mp3/7.mp3','image':'images/7.jpg'},{'title':'菊花台','url':'mp3/8.mp3','image':'images/8.jpg'}];
var mb = new MusicBox(musicBox);