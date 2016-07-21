(function() {
    "use strict";
    var e, a, t, i, n, o, s, l, r, d, f, c, p, m, u, g, h, v; //처음 변수로 다 지정해버리고...
	
    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? //안드로이드 아이폰 아이패드 ...유저 에이젼트값
	
	(h = !0, $("html").addClass("mobile")) : (h = !1, $("html").addClass("no-mobile")),
	
	
	// 처음 페이지 로더 될 때....
	$(window).load(function() { //처음 로더 될때 
        $(".page-loader").delay(600).fadeOut("slow") //페이지 로더 클래스에서 딜레이 600에 페이드아웃 슬로우를...
    }), 
	
	// 패럴렉스 이미지
	n = function() {
        var e;  //함수 
        e = $(".bg-img, .parallax"), e.each(function() {   //bg 이미지 패럴렉스를 각각 돌려서 
            $(this).attr("data-background") && $(this).css("background-image", "url(" + $(this).data("background") + ")")
        })
    },

	// smoothScrolling  부드럽게 스크롤링 기능
	n(), m = function() {
        $(window).width() >= 1024 && h === !1 && skrollr.init({
            forceHeight: !1,
            smoothScrolling: !1
        })
    },


	// Owl carousel 칼루셀
	m(), u = function() {
		
		// fullwidth slider
          $(".fullwidth-slider").owlCarousel({  //전체 풀 위드스 값 지정
            autoPlay: 8e3,
            slideSpeed: 350,
            singleItem: !0,
            autoHeight: !0,
            navigation: !0,
            pagination: !0,
            addClassActive: !0,
            navigationText: ["<span class='angle'></span>", "<span class='angle'></span>"],
            afterInit: function() {
                var e;
                e = $(".owl-item.active .animate-e"), 
				$(window).load(function() {
                    e.each(function() {
                        var e;
                        e = $(this).attr("data-effect"), $(this).addClass("animated " + e)
                    })
                })
            },
            beforeMove: function() {  //이전 움직임
                var e;
                e = $(".owl-item.active .animate-e"), e.each(function() {
                    var e;
                    e = $(this).attr("data-effect"), $(this).removeClass("animated " + e)
                })
            },
            afterMove: function() { //다음 움직임
                var e;
                e = $(".owl-item.active .animate-e"), e.each(function() {
                    var e;
                    e = $(this).attr("data-effect"), $(this).addClass("animated " + e)
                })
            }
        }),
		
		
		// fullwidth testimonial slider  전체 위드스 증언 슬라이더
		$(".fullwidth-testimonial-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: !0,
            autoHeight: !0,
            navigation: !0,
            pagination: !0,
            navigationText: ["<span class='angle'></span>", "<span class='angle'></span>"]
        }), 
		
       
	   // 전체 증언 slider
	   $(".small-carousel").owlCarousel({
            autoPlay: 2500,
            stopOnHover: !0,
            items: 6,
            itemsDesktop: [1199, 4],
            itemsTabletSmall: [768, 3],
            itemsMobile: [480, 2],
            pagination: !1,
            navigation: !1
        }),
   		
       
	   // 워크 풀 슬라이더
	   $(".work-full-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: !0,
            autoHeight: !0,
            navigation: !0,
            navigationText: ["<span class='angle'></span>", "<span class='angle'></span>"]
        }), 
		
        
		// 팀 슬라이더
		$(".team-slider").owlCarousel({
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [768, 1],
            itemsMobile: [480, 1],
            slideSpeed: 350,
            singleItem: !0,
            autoHeight: !0,
            navigation: !0,
            pagination: !0,
            navigationText: ["<span class='angle'></span>", "<span class='angle'></span>"]
        })

    }, 
	
	
	u(), p = function() {
		
		// lettering slider 레터링 슬라이더
		$('[data-typer-targets]').typer({
        highlightSpeed: 20,
        typeSpeed: 100,
        clearDelay: 500,
        typeDelay: 200,
        clearOnHighlight: true,
        typerDataAttr: 'data-typer-targets',
        typerInterval: 2000
        }),	   

		
		// skill chart 스킬차트
	   $(".chart").appear(function () {
		$(".chart").easyPieChart({
			barColor: "#00B2CA",
			scaleColor: "#00B2CA",  
			size: "150",
			lineWidth: 5,
			animate: 2000,
			onStep: function (e, t, n) {
				$(this.el).find(".percent").text(Math.round(n))
			}
		})
	   }),
	   
	   // progress bar 프로그래스 바
		$(".progress-bar").appear(function() {
            var e, a, t, i, n;
            t = $(this), 
            i = t.attr("data-progress"), 
            n = 5, 
            a = 30, (
                e = function() {
            t.css("width", a + "%"), i > a && (a += n, setTimeout(e, 40))
            })()
        }),
			
        
		// Mail 에이젝스 통신 보내기
        $('#mc-form').ajaxChimp({
            url: "https://hashtheme.us12.list-manage.com/subscribe/post?u=37a62f2c85299c0756f6b492d&amp;id=edbe78d130"
        }),
		

	    // 컨텍트 폼 폼 벨리데이션
	   
	   $("#contact-submit").on("click", function(e) {

            //전송되는거 방지용
            e.preventDefault();

            /*폼이 일치되는지 안되는지 확인*/
            var error = false;
            var name = $('#name').val();
            var email = $('#email').val();
            var subject = $('#subject').val();
            var message = $('#message').val();

            /* 벨리데이션 체킹 해주기*/
			
            if (name.length == 0) {
                var error = true;
                $('#name').css("border-color", "#D8000C");
            } else {
                $('#name').css("border-color", "#666");
            }
            if (email.length == 0 || email.indexOf('@') == '-1') {
                var error = true;
                $('#email').css("border-color", "#D8000C");
            } else {
                $('#email').css("border-color", "#666");
            }
            if (subject.length == 0) {
                var error = true;
                $('#subject').css("border-color", "#D8000C");
            } else {
                $('#subject').css("border-color", "#666");
            }
            if (message.length == 0) {
                var error = true;
                $('#message').css("border-color", "#D8000C");
            } else {
                $('#message').css("border-color", "#666");
            }

            //벨리데이션이 오류 체크해줌
            if (error == false) {
                //서밋 버튼 안 될때.
                $('#contact-submit').attr({
                    'disabled': 'false',
                    'value': 'Sending...'
                });

                /* 에이젝스를 이용해서 php로 옮겨갈 수 있게 */
                $.post("mail.php", $("#contact-form").serialize(), function(result) {
                    if (result == 'sent') {
                        $('#cf-submit').remove();
                        $('#mail-success').fadeIn(500);
                    } else { 
                        $('#mail-fail').fadeIn(500);
                        $('#contact-submit').removeAttr('disabled').attr('value', 'Send The Message');
                    }
                });
            }
        })
	
    },	

	
    // 미디어 쿼리
	
	$(window).width() >= 1024 && h === !1 && p(), a = function(e, a) {
        e.height(a.height()), e.css({
            "line-height": a.height() + "px"
        })
    }, 
	
	v = $(".navbar-mobile"), e = $(".navbar-desktop"), s = function() {
        $(".mobile-on .navbar-desktop > ul").css("max-height", $(window).height() - $(".main-nav").height() - 20 + "px"), $(window).width() <= 1024 ? $(".main-nav").addClass("mobile-on") : $(window).width() > 1024 && ($(".main-nav").removeClass("mobile-on"), e.show())
    },	
	
	
	// 네브 메뉴 픽스드 nav menu fixed
	
	o = function() {
        var t, i, n;
        t = function() {
            $(window).scrollTop() > 10 ? ($(".js-transparent").removeClass("transparent"), 
			$(".main-nav, .nav-logo-wrap .logo, .navbar-mobile").addClass("small-height")) : 
			($(".js-transparent").addClass("transparent"), 
            $(".main-nav, .nav-logo-wrap .logo, .navbar-mobile").removeClass("small-height"))
        }, 
		
		$(".js-stick").sticky({
            topSpacing: 0
        }), 
		
		a($(".inner-nav > ul > li > a"), $(".main-nav")), a(v, $(".main-nav")), v.css({
            width: $(".main-nav").height() + "px"
        }), 
		
		$(".main-nav").hasClass("transparent") && $(".main-nav").addClass("js-transparent"), 
		t(), 
		
		$(window).scroll(function() {
            t()
        }),
		
		v.on("click", function() {
            e.hasClass("js-opened") ? (e.slideUp("slow").removeClass("js-opened"), $(this).removeClass("active")) : (e.slideDown("slow").addClass("js-opened"), $(this).addClass("active"))
        }),
		
		e.find("a:not(.menu-has-sub)").on("click", function() {
            v.hasClass("active") && (e.slideUp("slow").removeClass("js-opened"), v.removeClass("active"))
        }), 
		
		i = $(".menu-has-sub"), n = void 0, $(".mobile-on .menu-has-sub").find(".fa:first").removeClass("fa-angle-right").addClass("fa-angle-down"), i.on("click", function() {
        return $(".main-nav").hasClass("mobile-on") ? (n = $(this).parent("li:first"), n.hasClass("js-opened") ? n.find(".menu-sub:first").slideUp(function() {
                n.removeClass("js-opened"), n.find(".menu-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down")
            }) : ($(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up"), n.addClass("js-opened"), n.find(".menu-sub:first").slideDown()), !1) : void 0
        }),
		
		n = i.parent("li"), n.hover(function() {
            $(".main-nav").hasClass("mobile-on") || $(this).find(".menu-sub:first").stop(!0, !0).fadeIn("fast")
        }, 
		
		function() {
            $(".main-nav").hasClass("mobile-on") || $(this).find(".menu-sub:first").stop(!0, !0).delay(100).fadeOut("fast")
        })
    },
	
	
   // 윈도우 리사이즈
	
	o(), s(), $(window).resize(function() {
        s()
    }), 
	
	
	// 부드럽게 스크롤링
	
	c = function() {
        var e, a;
        $(".scroll li a, a.scroll").smoothScroll({
            speed: 1200
        }), a = $("body section"), e = $(".scroll-nav li a"), 
		$(window).scroll(function() {
            a.filter(":in-viewport:first").each(function() {
                var a, t;
                t = $(this), a = $('.scroll-nav li a[href$="#' + t.attr("id") + '"]'), e.removeClass("active"), a.addClass("active")
            })
        })
    },
	
	
	// 포트폴리오 isotope
	
	c(), t = function() {
        var e, a, t, i;
        e = 0, a = $(".work-container"), i = ".work-item", t = "masonry", a.imagesLoaded(function() {
            a.isotope({
                itemSelector: i,
                layoutMode: t,
                filter: e
            })
        }),
		$(".filter li a").on("click", function() {
            return $(".filter li").removeClass("active"), $(this).parent().addClass("active"), e = $(this).attr("data-filter"), a.isotope({
                itemSelector: i,
                layoutMode: t,
                filter: e
            }), !1
        })
    },
	
	
	//블로그 masonry
	
	t(), f = function() {
        var e;
        e = $(".blog-masonry"), e.imagesLoaded(function() {
            e.isotope({
                itemSelector: ".post-masonry"
            })
        })
    }, 
	
	
	//구글 맵
	
	f(), d = function() {
       
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            var mapOptions = {
                scrollwheel: false,
                zoom: 16,

                center: new google.maps.LatLng(37.238927, 127.055817), //수원 망포
                styles: [{
                    featureType: "landscape",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 300
                    }, {
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 51
                    }, {
                        visibility: "off"
                    }]
                }, {
                    featureType: "road.highway",
                    stylers: [{
                        saturation: -100
                    }, 
					{
                        lightness: 51
                    }, 
					{
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road.arterial",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 30
                    }, {
                        visibility: "on"
                    }]
                }, {
                    featureType: "road.local",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 40
                    }, {
                        visibility: "on"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        saturation: -100
                    },
					{
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "administrative.province",
                    stylers: [{
                        visibility: "off"
                    }] /**/
                }, {
                    featureType: "administrative.locality",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative.neighborhood",
                    stylers: [{
                        visibility: "on"
                    }] /**/
                }, {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [{
                        visibility: "on"
                    }, {
                        lightness: -25
                    }, {
                        saturation: -100
                    }]
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        hue: "#ffff00"
                    }, {
                        lightness: -25
                    }, {
                        saturation: -97
                    }]
                }]
            };
            var contentString = '<div id="mapcontent">' + '<p>경기도 수원시 영통구 영통로 127 센타프라자</p></div>';
            var infowindow = new google.maps.InfoWindow({
                maxWidth: 320,
                content: contentString
            });
            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);
            var image = new google.maps.MarkerImage('img/map.png', null, null, null, new google.maps.Size(60, 71))
            var myLatLng = new google.maps.LatLng(37.238927, 127.055817);


            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: image,
                title: '여기를 누르세요'
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
        }
		
	  },


    // 포트폴리오 매그니픽
	
	d(), r = function() {
			
        // 포트폴리오 갤러리
		$(".work-gallery").magnificPopup({
            tLoading: "",
            gallery: {
                enabled: !0
            },
		    mainClass: "my-mfp-zoom-in"
        }), 
		
	    // 포트폴리오 팝업
		$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
        overflowY: 'auto',
		showCloseBtn: !1,
        closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
       }),

       // 포트폴리오 팝업 모달 dismiss 유실
	   $(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	   }),
	   $(".magnific, .lightbox").magnificPopup({
            tLoading: ""
        }), 
		
		// 비디오 responsive
		$(".video, .blog-image").fitVids()
    }, 
	
	
	//유튜브 비디오
	
	r(), i = function() {
        var e;
        e = $(".player"), e.length && $(window).width() >= 1024 && h === !1 && $(function() {
            e.YTPlayer()
        })
    },
	
	
	// 팬 팩트
	
	i(), l = function() {
        $(window).width() >= 1024 && h === !1 && $(".focus-number").appear(function() {
            var e;
            e = $(this), e.countTo({
                from: 0,
                to: e.html(),
                speed: 1300,
                refreshInterval: 60
            })
        })
    }, 
	l(), 
	
	
	// 와우 애니메이션
	
	(g = function() {
        var e;
        e = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !1,
            live: !0
        }), 
		$("body").hasClass("appear-animate") && e.init()
    })()
	
}).call(this);








