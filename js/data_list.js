/* banner */
	var dataBn = [
		{'id':'01', 'banner':'bn_01'},
		{'id':'02', 'banner':'bn_02'},
		{'id':'03', 'banner':'bn_03'},
		{'id':'04', 'banner':'bn_04'},
	];
	
	var itemTag = $('.banner .img-cont');
	 $.each(dataBn, function(index, element) {
		itemTag.append(
			'<div class="img" style="background-image:url(images/banner/'+ element.banner +'.jpg)"></div>'
		);
	});
	
/* about */

	/* tag */
	var dataTag = [
		{'id':'01', 'tag':'花蓮人'},
		{'id':'02', 'tag':'北漂青年'},
		{'id':'03', 'tag':'個性普實'},
		{'id':'04', 'tag':'學習力強'},
		{'id':'05', 'tag':'好學不倦'},
	];
	
	var itemTag = $('.about .tag');
	 $.each(dataTag, function(index, element) {
		itemTag.append(
			'<li class="tag-li"><p>#' + element.tag + '</p></li>'
		);
	});

	/* skill */
	var dataSkill = [
		{'id':'01', 'title':'HTML5', 'percent':'100'},
		{'id':'02', 'title':'CSS', 'percent':'100'},
		{'id':'03', 'title':'javascript', 'percent':'60'},
		{'id':'04', 'title':'PHP', 'percent':'40'},
		{'id':'05', 'title':'VUE.js', 'percent':'40'},
		{'id':'06', 'title':'React', 'percent':'20'},
		{'id':'07', 'title':'Photoshop', 'percent':'100'},
		{'id':'08', 'title':'Illustrator', 'percent':'100'},
		{'id':'09', 'title':'Adobe XD', 'percent':'80'},
		{'id':'10', 'title':'Photograph', 'percent':'60'},
	];


	var itemSkill = $('.about .skill-ul');
	 $.each(dataSkill, function(index, element) {
		itemSkill.append(
			'<li class="skill-li"><p>' + element.title + '</p><span data-percent="' + element.percent + '"></span></li>'
		);
	});



/* web */
	var dataWeb = [
		{'id':'01', 'date':'2019/10', 'title':'日韓療癒冬旅', 'caption':'精選日韓兩地的療癒系行程', 'cover':'2019_01', 'href':'https://www.bwt.com.tw/action/2019/relaxingwinterreise'},
		{'id':'02', 'date':'2020/01', 'title':'日韓賞櫻懶人包', 'caption':'帶上賞櫻懶人包，旅行打卡沒煩惱！', 'cover':'2020_01', 'href':'https://www.bwt.com.tw/action/2020/jpkrspring'},
		{'id':'03', 'date':'2020/03', 'title':'寶島漫旅行', 'caption':'擁山攬海的寶島漫旅行，即將啟程．．．', 'cover':'2020_02', 'href':'https://www.bwt.com.tw/action/2020/slowDownAndTravelAround'},
		{'id':'04', 'date':'2020/07', 'title':'東南亞旅遊玩咖', 'caption':'跟著旅遊玩咖的腳步行遍東南亞', 'cover':'2020_03', 'href':'https://www.bwt.com.tw/action/2020/SEAtraveler'},
		{'id':'05', 'date':'2020/10', 'title':'GU雙時裝週陪你衣起遊台灣', 'caption':'GU雙十購物節', 'cover':'2020_04', 'href':'https://www.bwt.com.tw/action/2020/bestwaytravelxgu'},
		{'id':'06', 'date':'2020/12', 'title':'高鐵假期', 'caption':'高鐵假期豐富行', 'cover':'2020_05', 'href':'https://www.bwt.com.tw/Destination/HighSpeed?615'},
		{'id':'07', 'date':'2021/01', 'title':'藍寶石公主號：華麗回歸', 'caption':'2021頂級跳島遊輪', 'cover':'2021_01', 'href':'https://www.bwt.com.tw/action/cruises/princess/sapphire2021'},
		{'id':'08', 'date':'2021/01', 'title':'新型冠狀病毒相關旅遊公告', 'caption':'交通部觀光局相關公告', 'cover':'2021_02', 'href':'https://www.bwt.com.tw/action/traveladvice'},
		{'id':'09', 'date':'2021/03', 'title':'跳進上帝的湛藍水族箱：帛琉', 'caption':'感受多樣海洋物種與太平洋湛藍的總和', 'cover':'2021_03', 'href':'https://www.bwt.com.tw/action/2021/bluepalau'},
		{'id':'10', 'date':'2021/07', 'title':'機+酒最快速!最省錢!最安心!', 'caption':'最多全球航班機票和酒店任你組合!', 'cover':'2021_04', 'href':'https://www.bwt.com.tw/action/2021/tickethotel'},
		{'id':'11', 'date':'2021/10', 'title':'享受自己的輕旅行', 'caption':'呼朋伴友的精彩行，說走就走遊台灣！', 'cover':'2021_05', 'href':'https://www.bwt.com.tw/action/2021/buspapago'},
		{'id':'11', 'date':'2021/10', 'title':'享受自己的輕旅行', 'caption':'呼朋伴友的精彩行，說走就走遊台灣！', 'cover':'2022_01', 'href':'https://www.bwt.com.tw/action/2022/kyushutravel'},
	];

	var itemWeb = $('.web .item-cont');
	 $.each(dataWeb, function(index, element) {
		itemWeb.prepend(
		   '<a class="item swiper-slide" href="' + element.href + '" target="_blank">' +
				'<div class="item-img"><img src="images/web/' + element.cover + '.jpg"></div>' +
				'<div class="item-info">' +
					'<p class="date">' + element.date + '</p>' +
					'<p class="title">' + element.title + '</p>' +
					'<p class="caption">' + element.caption + '</p>' +
				'</div>' +
			'</a>'
		);
	});


/* graphic */
	var dataGraphic = [
		{'id':'01', 'title':'peugeot 悠遊卡設計', 'caption':'', 'cover':'peugeot_02'},
		{'id':'02', 'title':'peugeot 悠遊卡皮套設計', 'caption':'', 'cover':'peugeot_03'},
		{'id':'03', 'title':'peugeot 獅子娃娃設計', 'caption':'', 'cover':'peugeot_04'},
		{'id':'04', 'title':'peugeot 維修員獅子娃娃設計', 'caption':'', 'cover':'peugeot_05'},
		{'id':'05', 'title':'peugeot 龍年獅子娃娃設計', 'caption':'', 'cover':'peugeot_06'},
		{'id':'06', 'title':'peugeot 原子筆(藍)設計', 'caption':'', 'cover':'peugeot_07'},
		{'id':'07', 'title':'peugeot 格紋筆記本(藍)設計', 'caption':'', 'cover':'peugeot_08'},
		{'id':'08', 'title':'peugeot 格紋獅徽領帶設計', 'caption':'', 'cover':'peugeot_09'},
		{'id':'09', 'title':'peugeot 輪胎造型抱枕設計', 'caption':'', 'cover':'peugeot_10'},
		{'id':'10', 'title':'桌日曆設計', 'caption':'', 'cover':'calendar_01'},	
		{'id':'11', 'title':'讚果 DM_02', 'caption':'', 'cover':'xango_02'},
		{'id':'12', 'title':'讚果 DM_01', 'caption':'', 'cover':'xango_01'},
		{'id':'13', 'title':'USANA DM_04', 'caption':'', 'cover':'usana_04'},
		{'id':'14', 'title':'USANA DM_03', 'caption':'', 'cover':'usana_03'},
		{'id':'15', 'title':'USANA DM_02', 'caption':'', 'cover':'usana_02'},
		{'id':'16', 'title':'USANA DM_01', 'caption':'', 'cover':'usana_01'},
		{'id':'17', 'title':'碧歐普羅西斯DM', 'caption':'', 'cover':'bioplasis_04'},
		{'id':'18', 'title':'凱瑞絲DM_04', 'caption':'', 'cover':'kerasys_04'},
		{'id':'19', 'title':'凱瑞絲DM_03', 'caption':'', 'cover':'kerasys_03'},
		{'id':'20', 'title':'凱瑞絲DM_02', 'caption':'', 'cover':'kerasys_02'},
		{'id':'21', 'title':'凱瑞絲DM_01', 'caption':'', 'cover':'kerasys_01'},
	];

	var itemGraphic = $('.graphic .item-cont');
	 $.each(dataGraphic, function(index, element) {
		itemGraphic.prepend(
		   '<a class="item" href="images/graphic/' + element.cover + '.jpg" data-sub-html="' + element.title + '">' +
				'<div class="item-img"><img src="images/graphic/' + element.cover + '_s.jpg"></div>' +
			'</a>'
		);
	});




/* codepen */
	var dataCodePen = [
		{'id':'01', 'title':'Animated Checkbox', 'code':'yLJwwGO'},
		{'id':'02', 'title':'Rivalry', 'code':'wvoZJyZ'},
		{'id':'03', 'title':'Turntable', 'code':'vYywEQr'},
		{'id':'04', 'title':'Bubble', 'code':'LYxOPer'},
		{'id':'05', 'title':'Digital clock', 'code':'bGgQvQr'},
		{'id':'06', 'title':'Wave Line', 'code':'JjNByZW'},
		{'id':'07', 'title':'Random Color', 'code':'KKMYQpy'},
	];

	var itemCodePen = $('.codepen-io .item-cont');
	 $.each(dataCodePen, function(index, element) {
		itemCodePen.prepend(
		   '<div class="item swiper-slide">' +
				'<p class="codepen" data-height="480" data-theme-id="dark" data-default-tab="result" data-user="smile-liao" data-slug-hash="' + element.code + '" style="height:480px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="' + element.title + '">' + '</p>' +
				'<div class="item-info">' + '<p class="title">' + element.title + '</p>' + '</div>' +
			'</div>'
		);
	});