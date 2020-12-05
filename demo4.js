const request = require('request-promise');
const cheerio = require('cheerio');

let get_fb_dtsg = async function(){
	let headers = {
		'authority': 'm.facebook.com',
		'sec-ch-ua': '"Chromium";v="85", "\\Not;A\"Brand";v="99"',
		'x-requested-with': 'XMLHttpRequest',
		'sec-ch-ua-mobile': '?0',
		'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4182.0 Safari/537.36',
		'x-response-format': 'JSONStream',
		'content-type': 'application/x-www-form-urlencoded',
		'accept': '*/*',
		'origin': 'https://m.facebook.com',
		'sec-fetch-site': 'same-origin',
		'sec-fetch-mode': 'cors',
		'sec-fetch-dest': 'empty',
		'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
		'cookie': 'spin=r.1003049282_b.trunk_t.1607059383_s.1_v.2_; c_user=100054852555984; xs=41%3AUfQ28RTCbOCTxQ%3A2%3A1599215223%3A18714%3A14037%3A%3AAcWmdyg_RvglDlS00Dx4NWS6aDiKCXd-P0BEzzEWVw; fr=1luQ51D7PIhp9CUCE.AWUC8sHDl0BCAAcx4m4cvqSsL_4.BfUhZn.YY.AAA.0.0.Bfyce5.AWUkrzVSKbc; datr=x8fJXyTTs4GSl_oY9kspbfCr; m_pixel_ratio=1; wd=1440x680'

	};
	let options = {
		url:'https://m.facebook.com/hienngo96d.tmu/posts/1518280511716530', // link bài viết của m.facebook.com
		method:'GET',
		headers:headers,

	};
	let responseHTML = await request(options);
	responseHTML = responseHTML.replace(/<!--/g,'');
	let $ = cheerio.load(responseHTML);
	let fb_dtsg = $('input[name="fb_dtsg"]').val();
	return fb_dtsg;



};
let like_post = async function(fb_dtsg,postID){
	var headers = {
		'authority': 'm.facebook.com',
		'sec-ch-ua': '"Chromium";v="85", "\\Not;A\"Brand";v="99"',
		'x-requested-with': 'XMLHttpRequest',
		'sec-ch-ua-mobile': '?0',
		'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4182.0 Safari/537.36',
		'x-response-format': 'JSONStream',
		'content-type': 'application/x-www-form-urlencoded',
		'accept': '*/*',
		'origin': 'https://m.facebook.com',
		'sec-fetch-site': 'same-origin',
		'sec-fetch-mode': 'cors',
		'sec-fetch-dest': 'empty',
		'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
		'cookie': 'spin=r.1003049282_b.trunk_t.1607059383_s.1_v.2_; c_user=100054852555984; xs=41%3AUfQ28RTCbOCTxQ%3A2%3A1599215223%3A18714%3A14037%3A%3AAcWmdyg_RvglDlS00Dx4NWS6aDiKCXd-P0BEzzEWVw; fr=1luQ51D7PIhp9CUCE.AWUC8sHDl0BCAAcx4m4cvqSsL_4.BfUhZn.YY.AAA.0.0.Bfyce5.AWUkrzVSKbc; datr=x8fJXyTTs4GSl_oY9kspbfCr; m_pixel_ratio=1; wd=1440x680'
	};

	var options = {
		url: 'https://m.facebook.com/ufi/reaction/?ft_ent_identifier=1518280511716530&story_render_location=permalink&feedback_source=8&is_sponsored=0&ext=1607318599&hash=AeS4CLoyUKsfPwFvUvc&__tn__=%3E*W-R&av=100054852555984&client_id=1607059424815%3A3775271633&session_id=395b09f5-d4f0-43a7-b8e9-281d3acc9f37',
		headers: headers,
		method:'POST',
		form:{
			'reaction_type':'1',
			'ft_ent_identifier':postID, // postID cua bai viet
			'm_sess':'',
			'fb_dtsg':fb_dtsg, // dây là giá trị động , mỗi cookie facebook sẽ có fb_dtsg riêng nhé
			'jazoest':'22078',
			'__csr':'',
			'__req':'a',
			'__a':'AYmGjDavME4qO7jl3zVgu9HYowii6nEOZvM-cyJl0zSEIrAkDj-tf1AdBPwmjb1Oz-bsaieZEeQiefB2QLnlvafazEht20JSDHLjk4Z1pB-jXA',
			'__user':'100054852555984',
		}
	};

	

	let response = await request(options);
	console.log(response);
};
// (intermediate value)(...) is not a function KHI NÀO NÓ BÁO CÁI NÀY THÌ EM THÊM ĐẰNG TRƯỚC HÀM (async ())() dấu ; nhé
(async ()=>{
	// tất cả các code trong này sẽ được chạy ĐẦU TIÊN khi run code
	let fb_dtsg = await get_fb_dtsg();
	console.log(fb_dtsg)
	// đến đây em tự tìm tòi tiếp nhé 
})();
