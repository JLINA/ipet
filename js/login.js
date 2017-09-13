$(function() {
	$(".fa-long-arrow-left").on("click", function() {
			window.location.href = "../welcome.html"
		})
		//点击登录验证密码和用户名
	$(".registersubmit").on("click", function() {
		var $istrue = /^[a-zA-Z0-9.]{4,10}$/.test($(".adminphone").val());
		var $ispassword = /^[a-zA-Z0-9.]{4,12}$/.test($(".passwords").val());
		if ($ispassword && $istrue) {
			$(".tieps").css({
				"display": "none"
			});
			var bRig = false;
			var $snumber = $('.adminphone').val();
			var $spassword1 = $('.passwords').val();
			if ($snumber != "" && $spassword1 != "") {
				var sCookie = $.cookie('user');
				if (sCookie == '' || sCookie == undefined) {
					$(".tieps").css({
						"display": "block"
					});
					$(".logintip").html("用户未注册！");

				} else {
					var aCookie = JSON.parse(sCookie);
					$.each(aCookie, function() {
						if (this.name == $snumber && this.password == $spassword1) {
							bRig = true;
						}
					})
					if (bRig == true) {
						var obj = {
							type: true,
							name: $snumber
						};
					    window.location.href="index.html";
					} else {
						$(".tieps").css({
							"display": "block"
						});
						$(".logintip").html("用户未注册！");
						var obj = {
							type: false
						};
						setInterval(function() {
							window.location.href = "register.html";
						}, 2000)
					}
				}
				$.cookie('login', JSON.stringify(obj), {
					expires: 7,
					path: "/"
				});
				console.log("qq," + $.cookie('user'));
				console.log("qq," + $.cookie('login'));
			} else {
				$(".tieps").css({
					"display": "block"
				});
				$(".logintip").html("输入错误！");
			}
		} else if ($ispassword == true && $istrue == false) {
			$(".tieps").css({
				"display": "block"
			});
			$(".logintip").html("请输入正确的用户名！");
		} else if ($ispassword == false && $istrue == true) {
			$(".tieps").css({
				"display": "block"
			});
			$(".logintip").html("请输入正确的密码！");
		} else if ($ispassword == false && $istrue == false) {
			$(".tieps").css({
				"display": "block"
			});
			$(".logintip").html("请输入正确的用户名和密码！");
		}
	})
})