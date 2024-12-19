/* NT Addons for Elementor v1.0 */

!(function ($) {

    // wavoSliderHero
    function wavoSliderHero($scope, $) {
        $scope.find('.slider-hero-type-template >.elementor[data-elementor-type="section"] .elementor-section-wrap').each(function () {
            var wavoSlickContent = $( this );
            if(!wavoSlickContent.length) return;
            wavoSlickContent.addClass( 'slick-slider' );

            wavoSlickContent.find('.elementor-element[data-element_type="section"]').each(function () {
                $( this ).addClass( 'slick-slide slick-template' );
            });
        });

        $scope.find('.slider-hero').each(function () {

            var wavoSlider = $( this );
            var wavoSliderHero = wavoSlider.find( '.slick-slider' );
            var myData      = wavoSlider.data( 'slider-settings' );

            var mydots      = myData.dots;
            var mydots2     = myData.dots2;
            var mydots3     = myData.dots3;
            var myspeed     = myData.speed;
            var myarrows    = myData.arrows;
            var myarrows2   = myData.arrows2;
            var myarrows3   = myData.arrows3;
            var myfade      = myData.fade;
            var myautoplay  = myData.autoplay;

            if(!wavoSliderHero.length) return;
            wavoSliderHero.slick({
                speed: myspeed,
                fade: myfade,
                autoplay:myautoplay,
                mobileFirst:true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<span class="slick-prev"><span class="icon is-back"></span></span>',
                nextArrow: '<span class="slick-next"><span class="icon is-next"></span></span>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            arrows: myarrows,
                            dots: mydots
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: myarrows2,
                            dots: mydots2
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: myarrows3,
                            dots: mydots3
                        }
                    }
                ]
            });
            // On before slide change
            wavoSliderHero.on('beforeChange', function(event, slick, currentSlide, nextSlide){

                $( ".slick-slide:not(.slick-active)" ).find('[data-settings]').each(function (index,elem) {
                    var $this = $( elem );
                    var $settings = $this.attr( "data-settings");
                    var jsonString = $.parseJSON($settings);
                    var animation = jsonString._animation;
                    $( elem ).removeClass( animation );
                    var delay = jsonString._animation_delay;
                    $( elem ).hide();

                });

            });
            // On before slide change
            wavoSliderHero.on('afterChange', function(event, slick, currentSlide, nextSlide){
                $( ".slick-slide.slick-active" ).find('[data-settings]').each(function (index,elem) {
                    var $this = $( elem );
                    var $settings = $this.attr( "data-settings");
                    var jsonString = $.parseJSON($settings);
                    var animation = jsonString._animation;
                    $( elem ).addClass( animation ).show();
                });

            });
        });

        $scope.find('.slider-hero2').each(function () {
            var wavoSlider2 = $( this );
            var wavoSliderHero2 = wavoSlider2.find( '.slick-slider' );
            var myData      = wavoSlider.data( 'slider-settings' );

            var mydots      = myData.dots;
            var mydots2     = myData.dots2;
            var mydots3     = myData.dots3;
            var myspeed     = myData.speed;
            var myarrows    = myData.arrows;
            var myarrows2   = myData.arrows2;
            var myarrows3   = myData.arrows3;
            var myfade      = myData.fade;
            var myautoplay  = myData.autoplay;

            if(!wavoSliderHero2.length) return;
            wavoSliderHero2.not('.slick-initialized').slick({
                speed: myspeed,
                fade: myfade,
                autoplay:myautoplay,
                mobileFirst:true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<span class="slick-prev"><span class="icon is-back"></span></span>',
                nextArrow: '<span class="slick-next"><span class="icon is-next"></span></span>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            arrows: myarrows,
                            dots: mydots
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: myarrows2,
                            dots: mydots2
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: myarrows3,
                            dots: mydots3
                        }
                    }
                ]
            });
        });
    }

    /* homeSlider */
    function wavoHomeSlider($scope, $) {
        $scope.find('.home-slider').each(function () {
            var mySlider      = $( this );
            var myData        = mySlider.data( 'slider-settings' );
            var mySocials     = mySlider.find('.social .icon');

            var myspeed       = myData.speed;
            var myarrows      = myData.arrows;
            var myparallax    = myData.parallax;
            var mymobparallax = myData.mobparallax;
            var myautoplay    = myData.autoplay;
            var myloop        = myData.loop;
            var windowWidth   = window.innerWidth;
            var getmobile     = windowWidth <= 1024 ? true : false;
            var parallax;

            var parallaxSlider;
            var parallaxSliderOptions = {
                speed       : myspeed,
                autoplay    : myautoplay,
                parallax    : myparallax,
                loop        : myloop,
                pagination  : {
                    el: '.slider .parallax-slider .swiper-pagination',
                    clickable: true
                },
                on: {
                    init: function () {
                        var swiper = this;
                        if ( true == myparallax ) {
                            if ( getmobile && false == mymobparallax ) {
                                parallax = false;
                            } else {
                                parallax = true;
                            }
                        } else {
                            parallax = false;
                        }
                        for ( var i = 0; i < swiper.slides.length; i++ ) {
                            if ( parallax ) {
                                $( swiper.slides[i] ).find( '.bg-img' ).attr({ 'data-swiper-parallax': 0.75 * swiper.width });
                            }

                        }
                    },
                    resize: function () {
                        this.update();
                    }
                },
                pagination: {
                    el: '.slider .parallax-slider .swiper-pagination',
                    type: 'fraction',
                },
                navigation: {
                    nextEl: '.slider .parallax-slider .next-ctrl',
                    prevEl: '.slider .parallax-slider .prev-ctrl'
                }
            };
            parallaxSlider = new Swiper( '.slider .parallax-slider', parallaxSliderOptions );

            mySocials.on( 'click', function () {
                $( this ).parent().toggleClass( "active" );
            });

            var myWin = $(window);
            var myWinH = myWin.height();
            if ( mySlider.hasClass('fixed-slider') ) {
                myWin.on('scroll', function() {
                    var bodyScroll = myWin.scrollTop();
                    var myFixed = mySlider.hasClass('fixed-slider')
                    if ( bodyScroll >= myWinH ) {
                            mySlider.removeClass('fixed-slider');
                    } else {
                        mySlider.addClass('fixed-slider');
                    }
                });
            }
        });
    }

    /* homeSlider */
    function wavoAnimationFix() {
        $scope.find('body:not(.elementor-page)').each(function () {
            var myTarget     = $( this ),
                myInvisible  = myTarget.find( '.elementor-invisible' );

            myInvisible.each( function () {

                var $this     = $( this ),
                    animData  = $this.data('settings'),
                    animName  = animData._animation,
                    animDelay = animData._animation_delay;
                $this.addClass( 'wow '+ animName ).removeClass( 'elementor-invisible' );
                $this.css( 'animation-delay', animDelay + 'ms');
            });

        });
    }

    /* homeSlider */
    function wavoOnepage($scope, $) {
        $scope.find('.home-onepage').each(function () {
            var mySlider     = $( this ),
                myPSlider    = mySlider.find( '.parallax-slider-two' ),
                mySocials    = myPSlider.find( '.social .icon' ),
                mySplitText  = mySlider.find( '.wavo-headig-split .elementor-heading-title' ),
                myInvisible  = mySlider.find( '.elementor-invisible' ),
                mySlide      = myPSlider.find( '.elementor-top-section' ),
                myWrapper    = myPSlider.find( '.swiper-wrapper' ),
                myPage       = mySlider.find( '[data-elementor-type="page"]' ),
                myPageClass  = mySlider.find( '[data-elementor-type="page"]' ).attr( 'class' ),
                myPagination = myPSlider.find( '.swiper-pagination' ),
                myScrollbar  = myPSlider.find( '.swiper-scrollbar' ),
                myNextEl     = myPSlider.find( '.next-ctrl' ),
                myPrevEl     = myPSlider.find( '.prev-ctrl' ),
                myThumbs     = mySlider.find( '.gallery-thumbs' ),
                myText       = mySlider.find( '.gallery-text' ),
                myData       = mySlider.data( 'slider-settings' ),
                myDestroy    = myData.destroy,
                myDirection  = myData.direction,
                mySpeed      = myData.speed,
                myWhell      = myData.mousewheel,
                myParallax   = myData.parallax,
                myMobParallax= myData.mobparallax,
                myThumb      = myData.thumbs,
                myAutoplay   = myData.autoplay,
                myLoop       = myData.loop,
                thumbs       = false,
                pagination   = false,
                navigation   = false,
                scrollbar    = false,
                parallaxSlider,
                myThumbsNav,
                myTextNav,
                myVideoMuteYoutube,
                myVideoMuteVimeo,
                myVideoHtml,
                myEqualizer,
                windowWidth  = window.innerWidth,
                getdirection = windowWidth <= 1024 ? 'horizontal' : myDirection,
                getmousewheel= windowWidth <= 1024 ? false : myWhell,
                getmobile    = windowWidth <= 1024 ? true : false;
                getmobilee   = 'true' == myDestroy ? getmobile : false;

            function getDirection() {
                return getdirection;
            };
            function getMousewheel() {
                return getmousewheel;
            };

            if ( mySlider.hasClass('video-unmute') ) {
                myVideoMuteYoutube = 'mute=0';
                myVideoMuteVimeo = 'muted=0';
                myVideoHtml = 'muted';
                myEqualizer = '<div class="equaliser-container"><ol class="equaliser-column"><li class="colour-bar"></li></ol><ol class="equaliser-column"><li class="colour-bar"></li></ol><ol class="equaliser-column"><li class="colour-bar"></li></ol><ol class="equaliser-column"><li class="colour-bar"></li></ol><ol class="equaliser-column"><li class="colour-bar"></li></ol></div>';
            } else {
                myVideoMuteYoutube = 'mute=1';
                myVideoMuteVimeo = 'muted=1';
            }

            if ( false == getmobilee ) {

                $( 'html' ).addClass( 'betakit-vh-100' );
                $( 'body' ).addClass( 'betakit-vh-100' );

                mySlider.addClass( myPageClass );

                mySlide.each( function () {

                    if ( true == myParallax ) {
                        if ( windowWidth <= 1024 && false == myMobParallax ) {

                            $( this ).addClass( 'swiper-slide' );

                        } else {
                            $( this ).addClass( 'bg-img' ).wrap( '<div class="swiper-slide"></div>' );
                        }

                    } else {

                        $( this ).addClass( 'swiper-slide' );

                    }

                    var html_video,
                        video = $( this ).data('wavo-bg-video'),
                        provider = video ? video.provider : '',
                        videoid = video ? video.video_id : '',
                        videocontainer = $( this ).find('.elementor-background-video-container');

                    if ( videoid.length ) {

                        videocontainer.find('div.elementor-background-video-embed').remove();

                        if ( 'vimeo' == provider ) {
                            html_video = '<iframe class="elementor-background-embed-video vimeo-video" title="vimeo Video Player" src="https://player.vimeo.com/video/'+video.video_id+'?autoplay=1&loop=1&autopause=0&'+myVideoMuteVimeo+'" allow="autoplay; fullscreen" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0" data-ready="true" width="640" height="360"></iframe>'+myEqualizer;
                        }

                        if ( 'youtube' == provider ) {
                            html_video = '<iframe class="elementor-background-embed-video youtube-video" title="youtube Video Player" src="https://www.youtube.com/embed/'+video.video_id+'?controls=0&rel=0&autoplay=1&playsinline=1&enablejsapi=1&version=3&playerapiid=ytplayer&'+myVideoMuteYoutube+'" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0" width="640" height="360"></iframe>'+myEqualizer;
                        }
                        if ( 'hosted' == provider ) {
                            videocontainer.find('video:first-child').remove();
                            html_video = '<video class="elementor-background-video-hosted elementor-html5-video video-hosted" autoplay '+myVideoHtml+' playsinline loop src="'+video.video_id+'"></video>'+myEqualizer;
                        }

                        videocontainer.prepend( html_video );
                    }

                });

                myPSlider.find( '.swiper-slide' ).wrapAll( '<div class="swiper-wrapper"></div>' );

                myPSlider.find( '.swiper-wrapper' ).prependTo( myPSlider );

                myPage.remove();

                mySplitText.each( function () {
                    var $this = $( this );
                    $this.addClass('wow');

                    Splitting({
                      target: $this,
                    });
                });

                myInvisible.each( function () {

                    var $this     = $( this ),
                        animData  = $this.data('settings'),
                        animDelay = animData._animation_delay;

                    $this.css( 'animation-delay', animDelay + 'ms');
                    $this.removeClass( 'elementor-invisible' ).addClass( 'has-def-animation' );
                });

                if ( myData.pagination ) {

                    if ( 'dots' == myData.pagination ) {

                        pagination = {
                            el             : myPagination,
                            clickable      : true,
                            renderBullet   : function ( index, className ) {
                                return '<span class="nav__item ' + className + '"><svg class="nav__icon"><use xlink:href="#icon-circle"></use></svg></span>';
                            }
                        }

                    } else if ( 'number' == myData.pagination ) {

                        pagination = {
                            el             : myPagination,
                            clickable      : true,
                            renderBullet   : function ( index, className ) {
                                return '<span class="nav__item ' + className + '"><span class="number__item">' + ( index + 1 ) + '</span><svg class="nav__icon"><use xlink:href="#icon-circle"></use></svg></span>';
                            }
                        };

                    } else if ( 'thumb' == myData.pagination ) {

                        myThumbsNav = new Swiper( myThumbs, {
                            spaceBetween                : 10,
                            slidesPerView               : 'auto',
                            centeredSlides              : false,
                            watchOverflow               : false,
                            touchRatio                  : 0.2,
                            slideToClickedSlide         : true,
                            virtualTranslate            : false,
                            freeMode                    : false,
                            speed                       : 1000,
                            autoplay                    : false,
                            loop                        : false,
                            releaseOnEdges              : true,
                            mousewheel                  : getMousewheel(),
                            direction                   : getDirection(),
                            watchSlidesVisibility       : true,
                            handleElementorBreakpoints  : true,
                            observer                    : true,
                            observeParents              : true,
                            on                          : {
                                resize: function () {
                                    myThumbsNav.changeDirection( getDirection() );
                                }
                            }
                        });

                        thumbs = {
                          swiper : myThumbsNav
                        }

                        pagination = {
                            el   : myPagination,
                            type : 'fraction'
                        }

                    } else if ( 'custom' == myData.pagination ) {

                        var myTextNav = new Swiper( myText, {
                            spaceBetween                : 10,
                            slidesPerView               : 'auto',
                            centeredSlides              : false,
                            watchOverflow               : false,
                            touchRatio                  : 0.2,
                            slideToClickedSlide         : true,
                            virtualTranslate            : false,
                            freeMode                    : false,
                            speed                       : 1000,
                            autoplay                    : false,
                            loop                        : false,
                            releaseOnEdges              : true,
                            mousewheel                  : getMousewheel(),
                            direction                   : getDirection(),
                            watchSlidesVisibility       : true,
                            handleElementorBreakpoints  : true,
                            on                          : {
                                resize: function () {
                                    myTextNav.changeDirection( getDirection() );
                                }
                            }
                        });

                        thumbs = {
                          swiper : myTextNav
                        }

                        pagination = {
                            el   : myPagination,
                            type : 'fraction'
                        }

                    } else {

                        pagination = {
                            el   : myPagination,
                            type : 'fraction'
                        }

                    }
                }

                if ( true == myData.navigation && 'thumbs' != myData.pagination && 'custom' != myData.pagination ) {
                    navigation = {
                        nextEl: myNextEl,
                        prevEl: myPrevEl
                    };
                } else {

                    navigation = false;
                }

                if ( true == myData.scrollbar && 'thumbs' != myData.pagination && 'custom' != myData.pagination ) {
                    scrollbar = {
                      el  : myScrollbar,
                      hide: false,
                  };
                } else {

                    scrollbar = false;
                }

                var parallaxSliderOptions = {
                    speed                       : mySpeed,
                    parallax                    : myParallax,
                    autoplay                    : myAutoplay,
                    loop                        : myLoop,
                    releaseOnEdges              : true,
                    mousewheel                  : getMousewheel(),
                    allowTouchMove              : true,
                    direction                   : getDirection(),
                    watchSlidesVisibility       : true,
                    handleElementorBreakpoints  : true,
                    observer                    : true,
                    on: {
                        init: function () {
                            var swiper = this;
                            for ( var i = 0; i < swiper.slides.length; i++ ) {
                                $( swiper.slides[i] ).find( '.bg-img' ).attr( { 'data-swiper-parallax': 0.75 * swiper.height } );
                            }
                            setTimeout(function(){
                                mySlider.find( '.swiper-slide:not(:first-child)' ).each(function () {

                                    var iframe = $( this ).find('iframe');
                                    var vid = $( this ).find('.video-hosted');
                                    if ( iframe.size() && iframe.hasClass('youtube-video') ) {
                                        iframe[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
                                    }
                                    if ( iframe.size() && iframe.hasClass('vimeo-video') ) {
                                        iframe[0].contentWindow.postMessage('{"method":"pause"}', '*');
                                    }
                                    if ( vid.size() ) {
                                        vid.get(0).pause();
                                    }
                                });
                            }, 2000);

                        },
                        slideChange: function () {

                            var activeSlid = $( '.swiper-slide-visible .has-def-animation' );
                            var inactiveSlid = $( '.swiper-slide:not(.swiper-slide-visible) .has-def-animation' );
                            activeSlid.removeClass( 'animated' );

                            inactiveSlid.each(function () {
                                var $this = $( this ),
                                    animData = $this.data('settings'),
                                    anim = animData._animation;
                                if ( 'undefined' === typeof animData._animation ) {
                                    anim = animData.animation;
                                }

                                $this.removeClass( 'animated ' + anim );

                            });

                            activeSlid.each(function () {
                                var $this = $( this ),
                                    animData = $this.data( 'settings' ),
                                    anim = animData._animation;
                                if ( 'undefined' === typeof animData._animation ) {
                                    anim = animData.animation;
                                }
                                $this.addClass( 'animated ' + anim );
                            });

                            $( '.swiper-slide:not(.swiper-slide-visible)' ).each(function () {

                                var iframe = $( this ).find('iframe');
                                var vid = $( this ).find('.video-hosted');
                                if ( iframe.size() && iframe.hasClass('youtube-video') ) {
                                    iframe[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
                                }
                                if ( iframe.size() && iframe.hasClass('vimeo-video') ) {
                                    iframe[0].contentWindow.postMessage('{"method":"pause"}', '*');
                                }
                                if ( vid.size() ) {
                                    vid.get(0).pause();
                                }

                            });

                            $( '.swiper-slide-visible' ).each(function () {

                                var iframe2 = $( this ).find('iframe');
                                var vid = $( this ).find('.video-hosted');
                                if ( iframe2.size() && iframe2.hasClass('youtube-video') ) {
                                    iframe2[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
                                }
                                if ( iframe2.size() && iframe2.hasClass('vimeo-video') ) {
                                    iframe2[0].contentWindow.postMessage('{"method":"play"}', '*');
                                }
                                if ( vid.size() ) {
                                    vid.get(0).play();
                                }
                            });


                            mySlider.find( '.wow' ).removeClass( 'animated' );

                            $( '.swiper-slide-visible .wow' ).addClass( 'animated' );

                        },
                        resize: function () {
                            this.update();
                        }
                    },
                    pagination : pagination,
                    navigation : navigation,
                    scrollbar  : scrollbar,
                    thumbs     : thumbs
                };

                parallaxSlider = new Swiper( myPSlider, parallaxSliderOptions );

            } else {

                myPSlider.addClass('slider-destroyed');

                myPSlider.find( '.elementor-heading-title.splitting:not(.animated)' ).each( function () {


                    var $this = $( this );
                    $this.css(
                        {
                        'visibility': 'hidden'
                        }
                    );
                });

            }

            mySocials.on( 'click', function () {
                $( this ).parent().toggleClass( "active" );
            });

            /*
            $( window ).resize(function() {

                if ( window.innerWidth <= 1024 ) {

                    if ( !( myPSlider.hasClass('slider-destroyed') ) ) {
                        myPSlider.addClass('slider-destroyed');
                        parallaxSlider.destroy(true, true);
                    }

                } else {

                    if ( myPSlider.hasClass('slider-destroyed') ) {
                        myPSlider.removeClass('slider-destroyed');
                        parallaxSlider = new Swiper( myPSlider, parallaxSliderOptions );
                    }

                }
            });
            */
        });
    }

    /* wavoServicesItem */
    function wavoServicesItem($scope, $) {
        $scope.find( '.about' ).each(function () {
            var myTarget  = $( this );
            var myElement = myTarget.find( '.items' );
            var mySvg     = myTarget.find( 'svg' );
            var myElH     = myTarget.height() + 75;
            var myWin     = $(window);
            var myAnim    = true;

            myElement.on('mouseenter', function () {
                $('.about .items').removeClass("active");
                $(this).addClass("active");
            });

            myWin.on('scroll', function() {
                var _targetoffset = myTarget.offset().top - myElH;
                var bodyScroll = myWin.scrollTop();

                if ( bodyScroll >= _targetoffset ) {
                    if ( myAnim ) {
                        var $svg = mySvg.drawsvg({
                            duration: 4000,
                        });
                        $svg.drawsvg('animate');
                    }
                    myAnim = false;
                }
            });
        });
    }
    /* wavoProjectsSlider */
    function wavoProjectsSlider( $scope, $ ) {
        $scope.find( '.metro' ).each(function () {
            var myTarget   = $( this );
            var mySlider   = myTarget.find( '.swiper-container' );
            var myData     = myTarget.data( 'slider-settings' );

            var myspeed      = myData.speed;
            var myperview    = myData.perview;
            var mymdperview  = myData.mdperview;
            var mysmperview  = myData.smperview;
            var myxsperview  = myData.xsperview;
            var myautoplay   = myData.autoplay;
            var myloop       = myData.loop;
            var myprogress   = false;
            var mynav        = false;

            if ( true == myData.progress ) {
                myprogress = {
                    el  : myTarget.find( '.swiper-pagination' ),
                    type: 'progressbar'
                };
            }
            if ( true == myData.nav ) {
                mynav = {
                    nextEl: myTarget.find( '.next-ctrl' ),
                    prevEl: myTarget.find( '.prev-ctrl' )
                };
            }
            var mySwiper     = new Swiper( mySlider, {
                slidesPerView : myperview,
                spaceBetween  : 0,
                speed         : myspeed,
                loop          : myloop,
                autoplay      : myautoplay,
                centeredSlides: true,
                breakpoints   : {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    480: {
                        slidesPerView: myxsperview,
                        spaceBetween: 0
                    },
                    640: {
                        slidesPerView: mysmperview,
                        spaceBetween: 0
                    },
                    991: {
                        slidesPerView: mymdperview,
                        spaceBetween: 0
                    }
                },
                pagination: myprogress,
                navigation: mynav
            });

        });

        $scope.find( '.slider-scroll' ).each(function () {
            var myTarget   = $( this );
            var mySlider   = myTarget.find( '.swiper-container' );
            var myData     = myTarget.data( 'slider-settings' );

            var myspeed      = myData.speed;
            var myperview    = myData.perview;
            var mymdperview  = myData.mdperview;
            var mysmperview  = myData.smperview;
            var myxsperview  = myData.xsperview;
            var myautoplay   = myData.autoplay;
            var myloop       = myData.loop;
            var myspace      = myData.space ? myData.space : 30;
            var myprogress   = false;
            var mynav        = false;

            if ( true == myData.progress ) {
                myprogress = {
                    el  : myTarget.find( '.swiper-pagination' ),
                    type: 'progressbar'
                };
            }
            if ( true == myData.nav ) {
                mynav = {
                    nextEl: myTarget.find( '.next-ctrl' ),
                    prevEl: myTarget.find( '.prev-ctrl' )
                };
            }

            var scrollSwiper = new Swiper( mySlider, {
                handleElementorBreakpoints: true,
                slidesPerView : myperview,
                spaceBetween  : myspace,
                mousewheel    : false,
                centeredSlides: true,
                speed         : myspeed,
                loop          : myloop,
                autoplay      : myautoplay,
                breakpoints   : {
                    320: {
                        slidesPerView: 1
                    },
                    480: {
                        slidesPerView: myxsperview
                    },
                    768: {
                        slidesPerView: mysmperview
                    },
                    1024: {
                        slidesPerView: mymdperview
                    }
                },
                navigation: mynav
            });

        });
    }
    /* wavoBlogSlider */
    function wavoBlogSlider( $scope, $ ) {
        $scope.find( '.nt-blog' ).each(function () {
            var myTarget   = $( this );
            var mySlider   = myTarget.find( '.swiper-img' );
            var mySlider2  = myTarget.find( '.swiper-content' );
            var myData     = myTarget.data( 'slider-settings' );

            var myspeed    = myData.speed;
            var myautoplay = myData.autoplay;
            var myloop     = myData.loop;

            var mySwiper = new Swiper( mySlider, {
                slidesPerView: 1,
                spaceBetween : 0,
                speed        : myspeed,
                loop         : myloop,
                effect       : 'fade',
                pagination   : {
                    el  : myTarget.find( '.swiper-pagination' ),
                    type: 'fraction'
                },
                navigation: {
                    nextEl: myTarget.find( '.next-ctrl' ),
                    prevEl: myTarget.find( '.prev-ctrl' )
                }
            });
            var mySwiper2 = new Swiper( mySlider2, {
                slidesPerView: 1,
                spaceBetween: 0,
                speed: myspeed,
                loop: myloop,
                pagination: {
                    el: myTarget.find( '.swiper-pagination' ),
                    type: 'fraction'
                },
                navigation: {
                    nextEl: myTarget.find( '.next-ctrl' ),
                    prevEl: myTarget.find( '.prev-ctrl' )
                }
            });
        });
    }
    /* wavoTestimonialsSlider */
    function wavoTestimonialsSlider( $scope, $ ) {
        $scope.find( '.testimonials' ).each(function () {
            var myTarget  = $( this );
            var myData  = myTarget.data( 'slider-settings' );
            var mySlider  = myTarget.find( '.slider-for' );
            var mySlider2 = myTarget.find( '.slider-nav' );
            var myarrows = true == myData.arrows || false == myData.autoplay ? true : myData.arrows;

            mySlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: myarrows, //true,
                prevArrow: '.prev',
                nextArrow: '.next',
                dots: false,
                autoplay: myData.autoplay, //true,
                fade: myData.fade, //true,
                speed: myData.speed, //true,
                asNavFor: '.slider-nav'
            });
            mySlider2.slick({
                slidesToShow: 1,
                asNavFor: '.slider-for',
                arrows: false,
                dots: false,
                autoplay: myData.autoplay, //true,
                speed: myData.speed, //true,
                focusOnSelect: true
            });

        });
    }
    /* wavoTestimonialsSlider 2*/
    function wavoTestimonialsSlider2( $scope, $ ) {
        $scope.find( '.testimonials2' ).each(function () {
            var myTarget  = $( this );
            var mySlider  = myTarget.find( '.testimonials-slider' );
            var myData  = myTarget.data( 'slider-settings' );
            mySlider.slick({
                slidesToShow: myData.show,
                slidesToScroll: myData.showscroll,
                arrows: myData.arrows, //true,
                prevArrow: '.prev',
                nextArrow: '.next',
                dots: myData.dots,
                autoplay: myData.autoplay, //true,
                fade: myData.fade, //true,
                speed: myData.speed, //true,
                //appendArrows: '.navs', //true,
                responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: myData.mdarrows,
                        dots: myData.mddots,
                        slidesToShow: myData.mdshow
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: myData.smarrows,
                        dots: myData.smdots,
                        slidesToShow: myData.smshow
                    }
                }
            ]
            });

        });
    }
    /* wavoGalleryIsotope */
    function wavoGalleryIsotope( $scope, $ ) {
        $scope.find( '.portfolio' ).each(function () {
            var myGallery = $( this );
            var myIsotope = myGallery.find(".gallery");
            var myFilters = myGallery.find(".filtering");
            var layout = myIsotope.data("layout-mode");
            if ( myIsotope ) {
                myIsotope.isotope({
                    itemSelector: '.items',
                    layoutMode: layout
                });
                var $gallery = myIsotope.isotope();
                myFilters.on('click', 'span', function () {
                    var filterValue = $(this).attr('data-filter');
                    $gallery.isotope({ filter: filterValue });
                });
                myFilters.on('click', 'span', function () {
                    $(this).addClass('active').siblings().removeClass('active');
                    myIsotope.find('.item-img').removeClass('wow fadeInUp').removeAttr('style');
                    myIsotope.find('.item-img-overlay-two').removeClass('item-img-overlay-two wow2').removeAttr('style');
                });
            }
        });
    }
    /* wavoMasonryBlog */
    function wavoMasonryBlog() {
        $( '.blog--masonry-row' ).each(function(){
            var myMasonry = $( this ).attr('id');

            if ( myMasonry ) {
                var container = document.querySelector('#'+myMasonry);
                var msnry;
                imagesLoaded( container, function() {
                   msnry = new Masonry( container, {
                       itemSelector: '.item--masonry'
                   });
                });
            }
        });
    }
    /* wavoJustifiedGallery */
    function wavoJustifiedGallery( $scope, $ ) {
        $scope.find( '.justified-gallery' ).each(function () {
            var myJustified = $( this );
            var myData    = myJustified.data( 'wavo-justified' );
            var myRows    = myData.rows;
            var myMargins = myData.margins;
            var myLastRow = myData.lastrow;
            if ( myJustified ) {
                myJustified.justifiedGallery({
                    rowHeight: myRows,
                    margins  : myMargins,
                    lastRow  : myLastRow
                });
            }
        });
    }
    /* wavoDataBgImage */
    function wavoBgImage() {
        $( '[data-wavo-bg-src]' ).each(function () {
            var myBg = $( this );
            var mySrc = $( this ).data('wavo-bg-src');
            if ( mySrc ) {
                myBg.css( 'background-image', 'url(' + mySrc + ')' );
            }
        });
    }
    /* wavoParallaxie */
    function wavoParallaxie( $scope, $ ) {
        $scope.find( '.page-header .bg-img' ).each(function () {
            var myParallaxie  = $( this );
            var myWinw  = $( window ).width();
            var myData  = myParallaxie.data( 'wavo-parallaxie' );
            var myspeed = myData.speed;
            var mymdspeed = myData.mdspeed ? myData.mdspeed : myspeed;
            var mysmspeed = myData.smspeed ? myData.smspeed : myspeed;
            var myoffset = myData.offset ? myData.offset : 0;

            if ( myParallaxie ) {
                    if ( myWinw > 480 && myWinw <= 768 ) {
                        myoffset = myData.mdoffset;
                        myspeed = mymdspeed;
                    }
                    if ( myWinw < 480 ) {
                        myoffset = myData.smoffset;
                        myspeed = mysmspeed;
                    }
                $( window ).on('resize', function(){
                    if ( myWinw > 480 && myWinw <= 768 ) {
                        myoffset = myData.mdoffset;
                        myspeed = mymdspeed;
                    }
                    if ( myWinw < 480 ) {
                        myoffset = myData.smoffset;
                        myspeed = mysmspeed;
                    }
                });
                myParallaxie.parallaxie({
                    speed: myspeed,
                    size : 'cover',
                    offset : myoffset,
                });
            }
        });
    }
    /* wavoPopupVideo */
    function wavoPopupVideo( $scope, $ ) {
        $scope.find( 'a.popup-video' ).each(function () {
            var myVideo = $( this );
            if ( myVideo ) {
                myVideo.YouTubePopUp();
            }
        });
    }

    // wavoBackground2
    function wavoBackground($scope, $) {
        $scope.find('[data-wavo-background]').each(function () {
            var myElements = $('[data-wavo-background]');
            if (myElements.length) {
                myElements.each(function (i, el) {
                    var myElement    = $(el);
                    var myBackground = myElement.data('wavoBackground');
                    if (!myBackground) {
                        return true; // next iteration
                    }
                    myElement.css({'background-image': 'url("'+ myBackground +'")'});
                    myElement.removeAttr('data-wavo-background');
                });
            }
        });
    }

    // wavoIsotope
    function wavoIsotope($scope, $) {
        $scope.find('[data-wavo-isotope]').each(function () {
            var myIsotopes = $('[data-wavo-isotope]');
            if (myIsotopes.length) {
                myIsotopes.each(function (i, el) {
                    var myIsotope = $(el);
                    var myData    = myIsotope.data('wavoIsotope');
                    if (!myData.itemSelector) {
                        return true; // next iteration
                    }
                    myIsotope.imagesLoaded(function() {
                        // Isotope Options
                        var myIsotopeOptions = {
                            percentPosition: true,
                            layoutMode: myData.layoutMode || 'masonry',
                            itemSelector: myData.itemSelector,
                            masonry: {
                                columnWidth: '.grid_sizer'
                            }
                        };
                        // Isotope Init
                        myIsotope.isotope(myIsotopeOptions);
                        // Isotope Filter
                        if ($('[data-wavo-isotope-filter]').length) {
                            var myFilters    = $('[data-wavo-isotope-filter]').filter(function (i, el) {
                                var myFilter = $(el);
                                var myFilterData = myFilter.data('wavoIsotopeFilter');
                                return myFilterData.name === myData.name && myFilterData.selector;
                            });
                            if (myFilters.length) {
                                myFilters.on('click', function (e) {
                                    e.preventDefault();
                                    var myFilter = $(this);
                                    var myFilterData = myFilter.data('wavoIsotopeFilter');
                                    var myFilterSelector = myFilterData.selector;
                                    var myFilterParent = myFilter.parent();
                                    myFilterParent.siblings().removeClass('is-active');
                                    myFilterParent.addClass('is-active');
                                    myIsotope.isotope({filter: myFilterSelector});
                                });
                            }
                        }
                    });
                });
            }
        });
    }


   // wavoJarallax
    function wavoJarallax() {
            var myParallaxs = $('.wavo-parallax');
            //var myParallaxVideo = $('[data-jarallax-video]');
            myParallaxs.each(function (i, el) {
                var myParallax = $(el);
                var myData     = myParallax.data('wavoParallax');
                if (!myData) {
                    return true; // next iteration
                }

                myParallax.jarallax({
                    type            : myData.type,
                    speed           : myData.speed,
                    imgSize         : myData.imgsize,
                    imgSrc          : myData.imgsrc,
                    disableParallax : myData.mobile ? /iPad|iPhone|iPod|Android/ : null,
                    keepImg         : false,
                });

            });
    }

    // wavoHeadingJarallax
    function wavoHeadingJarallax($scope, $) {
        $scope.each(function () {
            var myElement   = $(this);
            var myBgElement = myElement.find('.elementor-widget-container');
            if (!myElement) {
                return;
            }
            myBgElement.jarallax();
        });

    }

   // wavoHeadingSplit
    function wavoHeadingSplit( $scope, $ ) {
        $scope.each(function () {

            var myElement = $(this);
            var myId      = myElement.data( 'id' );
            var myData    = myElement.data( 'split-settings' );
            var mySplit   = myElement.find( '.elementor-heading-title' );
            if ( myElement.hasClass( 'wavo-headig-split' ) && myData ) {
                mySplit.addClass('wow');

                Splitting({
                  target: mySplit,
                  //by: "chars",
                });
            }
        });
    }

   // wavoJarallax
    function wavoImageJarallax($scope, $) {
        $scope.each(function () {

            var myElement = $(this);
            var myId      = myElement.data('id');
            var myData    = myElement.data('image-parallax-settings');

            if ( myElement.hasClass('wavo-image-parallax') && myData ) {

                var myParallax = myElement.find('img').addClass('parallax-image-'+myId);
                var image      = document.getElementsByClassName('parallax-image-'+myId);
                new simpleParallax(image, {
                    orientation: myData.orientation,
                    scale: myData.scale,
                    overflow: myData.overflow,
                    delay: myData.delay,
                    maxTransition: myData.maxtrans
                });
            }
        });
    }


    // ntrNavMenus
    function wavoNavMenus($scope, $) {
        $scope.find('[data-ntr-custom-header]').each(function (i, el) {
            var myHeader = $(el);
            if (myHeader.length) {
                myHeader.find('.header_nav_sub').each(function (i, eli) {
                    var $_this = $(eli);
                    $_this.find('> ul > li').each(function (i, eli) {
                        var $_this = $(eli);
                        $_this.attr( 'style', '--char-index:'+i );
                    });
                });
                if (myHeader.hasClass('is-split')) {

                    if ( $('body').hasClass('split-animation-enabled') ) {
                        Splitting({
                            target: '.button_text',
                        });
                    }
                }
                myHeader.each(function (i, ell) {
                    var myHeader2 = $(ell);
                    var myHeaderNav = myHeader2.find('.header_nav');
                    var myHeaderNavArrows = $('.header_nav_arrow', myHeaderNav);
                    var myHeaderNavToggle = $('.header_nav_toggle', myHeader);
                    var myHeaderNavClose = $('.header_nav_close', myHeader);
                    var myHeaderHandlers = {
                        navOpen: function () {
                            myHeaderNav.addClass('is-active');
                            $(document).on('click.ntrHeaderNav', function (e) {
                                if (!$(e.target).closest(myHeaderNavToggle).length) {
                                    if (!$(e.target).closest(myHeaderNav).length) {
                                        myHeaderHandlers.navClose();
                                    }
                                }
                            });
                            $(document).on('keyup.ntrHeaderNav', function (e) {
                                if (e.keyCode === 27) {
                                    myHeaderHandlers.navClose();
                                }
                            });
                        },
                        navClose: function () {
                            myHeaderNav.removeClass('is-active');
                            $(document).off('click.ntrHeaderNav');
                            $(document).off('keyup.ntrHeaderNav');
                        },
                    };

                    // Conditional Handlers
                    var myMedia = window.matchMedia('(max-width: 1199px)');
                    var myMediaHandler = function (m) {
                        if (m.matches) {
                            myHeaderNavToggle.on('click.ntrHeaderNavToggle', function (e) {
                                e.preventDefault();
                                if (myHeaderNav.hasClass('is-active')) {
                                    myHeaderHandlers.navClose();
                                } else {
                                    myHeaderHandlers.navOpen();
                                }
                            });
                            myHeaderNavClose.on('click.ntrHeaderNavClose', function (e) {
                                e.preventDefault();
                                myHeaderHandlers.navClose();
                            });
                            myHeaderNavArrows.on('click.ntrHeaderNavArrows', function (e) {
                                e.preventDefault();
                                var myArrow = $(this);
                                var myParent = myArrow.parent('li');
                                if (myParent.hasClass('is-active')) {
                                    myParent.removeClass('is-active');
                                    $('.icon', myArrow).toggleClass('is-arrow-up2 is-arrow-down2');
                                } else {
                                    myParent.addClass('is-active');
                                    $('.icon', myArrow).toggleClass('is-arrow-down2 is-arrow-up2');
                                }
                            });
                        } else {
                            // Remove Nav Events
                            $(document).off('click.ntrHeaderNav');
                            $(document).off('keyup.ntrHeaderNav');
                            myHeaderNavToggle.off('click.ntrHeaderNavToggle');
                            myHeaderNavClose.off('click.ntrHeaderNavClose');
                            myHeaderNavArrows.off('click.ntrHeaderNavArrows');
                        }
                    };
                    myMedia.addListener(myMediaHandler);
                    myMediaHandler(myMedia);

                    // Sticky
                    if (myHeader.hasClass('is-sticky')) {
                        var myWindow = $(window);
                        var myHeaderHolder = $('.header_holder', myHeader);
                        var myHeaderContainer = $('.header_container', myHeader);
                        var mystickyOffset = myHeader.attr('data-ntr-sticky-offset');
                        var myHeaderHeight = myHeaderContainer.outerHeight();
                        var mystickyOffset = myHeaderContainer.offset().top;
                        var mystickyOffsetone = mystickyOffset ? mystickyOffset : myHeaderHeight;
                        var mystickyOffsetTwo = mystickyOffset ? mystickyOffset+myHeaderHeight : 1;
                        var myHeaderTimer;
                        if (!myHeader.hasClass('is-overlay')) {
                            myHeaderHolder.css({'height': myHeaderHeight});
                        }
                        myWindow.on('scroll', function() {
                            if (myHeaderTimer) {
                                clearTimeout(myHeaderTimer);
                            }
                            //myHeaderTimer = setTimeout(function() {
                            if (myWindow.scrollTop() > mystickyOffsetone) {
                                myHeader.addClass('is-sticky-active');
                            } else if (myWindow.scrollTop() < mystickyOffsetTwo ) {
                                myHeader.removeClass('is-sticky-active');
                            }
                            //}, 200);

                        });
                    }
                });
            }
        });
    }

    var NtVegasHandler = function ($scope, $) {
        var target = $scope,
            sectionId = target.data("id"),
            settings = false,
            editMode = elementorFrontend.isEditMode();

        if (editMode) {
            settings = generateEditorSettings(sectionId);
        }

        if (!editMode || !settings) {
            //return false;
        }

        if(settings[1]){
            generateVegas();
        }

        function generateEditorSettings(targetId) {
            var editorElements = null,
                sectionData = {},
                sectionMultiData = {},
                settings = [];

            if (!window.elementor.hasOwnProperty("elements")) {
                return false;
            }

            editorElements = window.elementor.elements;

            if (!editorElements.models) {
                return false;
            }

            $.each(editorElements.models, function(index, elem) {

                if (targetId == elem.id) {

                    sectionData = elem.attributes.settings.attributes;
                } else if ( elem.id == target.closest(".elementor-top-section").data("id") ) {

                    $.each(elem.attributes.elements.models, function(index, col) {
                        $.each(col.attributes.elements.models, function(index,subSec) {
                            sectionData = subSec.attributes.settings.attributes;
                        });
                    });
                }
            });

            if (!sectionData.hasOwnProperty("wavo_vegas_animation_type") || "" == sectionData["wavo_vegas_animation_type"]) {
                return false;
            }

            settings.push(sectionData["wavo_vegas_switcher"]);  // settings[0]
            settings.push(sectionData["wavo_vegas_images"]);    // settings[1]
            settings.push(sectionData["wavo_vegas_animation_type"]);      // settings[2]
            settings.push(sectionData["wavo_vegas_transition_type"]);     // settings[3]
            settings.push(sectionData["wavo_vegas_overlay_type"]);    // settings[4]
            settings.push(sectionData["wavo_vegas_delay"]);     // settings[5]
            settings.push(sectionData["wavo_vegas_duration"]);   // settings[6]
            settings.push(sectionData["wavo_vegas_shuffle"]);   // settings[7]
            settings.push(sectionData["wavo_vegas_timer"]);   // settings[8]

            if (0 !== settings.length) {
                return settings;
            }

            return false;
        }


        function generateVegas() {

            var vegas_animation  = settings[2] ? Object.values(settings[2]) : 'kenburns';
            var vegas_transition = settings[3] ? Object.values(settings[3]) : 'slideLeft';
            var vegas_delay      = settings[5] ? settings[5] : 7000;
            var vegas_duration   = settings[6] ? settings[6] : 2000;
            var vegas_shuffle    = 'yes' == settings[7] ? true : false;
            var vegas_timer      = 'yes' == settings[8] ? true : false;
            var vegas_overlay    = 'none' != settings[4] ? true : false;

            if(settings[1].length){

                if ( settings[0] == 'yes' && !$('#vegas-js_' + sectionId ).size() ) {
                    $('<div id="vegas-js_' + sectionId + '" class="wavo-vegas-effect"></div>').prependTo(target);

                    var images = [];
                    for(i = 0; i<settings[1].length; i++){
                        images.push({ src: settings[1][i]['url'] });
                    }

                    setTimeout(function() {
                        $('#vegas-js_' + sectionId).vegas({
                            delay: vegas_delay,
                            timer: vegas_timer,
                            shuffle: vegas_shuffle,
                            animation: vegas_animation,
                            transition: vegas_transition,
                            transitionDuration: vegas_duration,
                            overlay: vegas_overlay,
                            slides: images
                        });
                    }, 500);

                } else {
                    if ( settings[0] != 'yes' && $('#vegas-js_' + sectionId ).size() ) {
                        $('#vegas-js_' + sectionId ).remove();
                    }
                }

            }

        }
    }


    // NtVegas Preview function
    function NtVegas() {

        $(".elementor-section[data-vegas-settings]").each(function (i, el) {
            var myVegas = jQuery(el);
            var myVegasId = myVegas.data('vegas-id');
            var myElementType = myVegas.data('element_type');
            if ( myElementType == 'section' ) {

                $('<div id="vegas-js_' + myVegasId + '" class="wavo-vegas-effect"></div>').prependTo(myVegas);

                var settings = myVegas.data('vegas-settings');

                if(settings.slides.length) {

                    var vegas_animation  = settings.animation ? settings.animation : 'kenburns';
                    var vegas_transition = settings.transition ? settings.transition : 'slideLeft';
                    var vegas_delay      = settings.delay ? settings.delay : 7000;
                    var vegas_duration   = settings.duration ? settings.duration : 2000;
                    var vegas_shuffle    = 'yes' == settings.shuffle ? true : false;
                    var vegas_timer      = 'yes' == settings.timer ? true : false;
                    var vegas_overlay    = 'none' != settings.overlay ? true : false;

                    $( '#vegas-js_' + myVegasId ).vegas({
                        delay: vegas_delay,
                        timer: vegas_timer,
                        shuffle: vegas_shuffle,
                        animation: vegas_animation,
                        transition: vegas_transition,
                        transitionDuration: vegas_duration,
                        overlay: vegas_overlay,
                       slides: settings.slides
                    });
                }
            }

        });

    }


    var NtParticlesHandler = function ($scope, $) {
        var target = $scope,
            sectionId = target.data("id"),
            settings = false,
            editMode = elementorFrontend.isEditMode();

        if (editMode) {
            settings = generateEditorSettings(sectionId);
        }

        if (!editMode || !settings) {
            return false;
        }

        if ( "none" != settings[1]) {
            target.addClass('wavo-particles');
            $('<div id="particles-js_' + sectionId + '" class="wavo-particles-effect"></div>').prependTo(target);
            generateParticles();
        }

        function generateEditorSettings(targetId) {
            var editorElements = null,
                sectionData = {},
                sectionMultiData = {},
                settings = [];

            if (!window.elementor.hasOwnProperty("elements")) {
                return false;
            }

            editorElements = window.elementor.elements;

            if (!editorElements.models) {
                return false;
            }

            $.each(editorElements.models, function(index, elem) {

                if (targetId == elem.id) {

                    sectionData = elem.attributes.settings.attributes;
                } else if ( elem.id == target.closest(".elementor-top-section").data("id") ) {

                    $.each(elem.attributes.elements.models, function(index, col) {
                        $.each(col.attributes.elements.models, function(index,subSec) {
                            sectionData = subSec.attributes.settings.attributes;
                        });
                    });
                }
            });

            if (!sectionData.hasOwnProperty("wavo_particles_type") || "none" == sectionData["wavo_particles_type"]) {
                return false;
            }

            settings.push(sectionData["wavo_particles_switcher"]);  // settings[0]
            settings.push(sectionData["wavo_particles_type"]);      // settings[1]
            settings.push(sectionData["wavo_particles_shape"]);     // settings[2]
            settings.push(sectionData["wavo_particles_number"]);    // settings[3]
            settings.push(sectionData["wavo_particles_color"]);     // settings[4]
            settings.push(sectionData["wavo_particles_opacity"]);   // settings[5]
            settings.push(sectionData["wavo_particles_size"]);      // settings[5]

            if (0 !== settings.length) {
                return settings;
            }

            return false;
        }


        function generateParticles() {

            var type     = settings[1] ? settings[1] : 'deafult';
            var shape    = settings[2] ? settings[2] : 'buble';
            var number   = settings[3] ? settings[3] : '';
            var color    = settings[4] ? settings[4] : '#fff';
            var opacity  = settings[5] ? settings[5] : '';
            var d_size   = settings[6] ? settings[6] : '';
            //var n_size   = settings[8] ? settings[8] : '';
            //var s_size   = settings[9] ? settings[9] : '';
            var snumber = number ? number : 6;
            var nbsides = shape == 'star' ? 5 : 6;
            var size    = d_size ? d_size : 100;
            setTimeout(function() {

                if ( type == 'bubble' ) {
                    snumber = number ? number : 6;
                    nbsides = shape == 'star' ? 5 : 6;
                    size    = d_size ? d_size : 100;
                    particlesJS("particles-js_" + sectionId, { "fps_limit": 0, "particles": { "number": { "value": snumber, "density": { "enable": true, "value_area": 800 } }, "color": { "value": color }, "shape": { "type": shape, "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": nbsides }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": opacity, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": size, "random": false, "anim": { "enable": true, "speed": 10, "size_min": 40, "sync": false } }, "line_linked": { "enable": false, "distance": 200, "color": "#ffffff", "opacity": 1, "width": 2 }, "move": { "enable": true, "speed": 8, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "grab" }, "onclick": { "enable": false, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
                } else if( type == 'nasa' ) {
                    snumber = number ? number : 160;
                    size    = d_size ? d_size : 3;
                    particlesJS("particles-js_" + sectionId, { "fps_limit": 0, "particles": { "number": { "value": snumber, "density": { "enable": true, "value_area": 800 } }, "color": { "value": color }, "shape": { "type": shape, "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": opacity, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0, "sync": false } }, "size": { "value": size, "random": true, "anim": { "enable": false, "speed": 4, "size_min": 0.3, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 600 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3 }, "repulse": { "distance": 400, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
                } else if( type == 'snow' ) {
                    snumber = number ? number : 400;
                    size    = d_size ? parseFloat(d_size) : 10;
                    particlesJS("particles-js_" + sectionId, { "fps_limit": 0, "particles": { "number": { "value": snumber, "density": { "enable": true, "value_area": 800 } }, "color": { "value": color }, "shape": { "type": shape, "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": opacity, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": size, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2 }, "move": { "enable": true, "speed": 6, "direction": "bottom", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 0.5 } }, "bubble": { "distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
                } else if( type == 'default' ) {
                    snumber = number ? number : 80;
                    size    = d_size ? d_size : 3;
                    particlesJS("particles-js_" + sectionId, { "fps_limit": 0, "particles": { "number": { "value": snumber, "density": { "enable": true, "value_area": 800 } }, "color": { "value": color }, "shape": { "type": shape, "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": opacity, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": size, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
                } else {
                    target.find('.wavo-particles-effect').remove();
                    target.removeClass('wavo-particles');
                }
            }, 500);

        }
    }

    // ntrParticles Preview function
    function NtParticles() {

        $(".elementor-section[data-particles-settings]").each(function (i, el) {
            var myParticles = $(el);
            var myParticlesId = myParticles.attr('data-particles-id');
            var myElementTtype = myParticles.attr('data-element_type');
            if ( myElementTtype == 'section' ) {

                $('<div id="particles-js_' + myParticlesId + '" class="wavo-particles-effect"></div>').prependTo(myParticles);

                var settings = myParticles.data('particles-settings');

                var type     = settings.type;
                var color    = settings.color ? settings.color : '#fff';
                var opacity  = settings.opacity ? settings.opacity : 0.4;
                var shape    = settings.shape ? settings.shape : 'circle';
                var snumber = settings.number ? settings.number : 6;
                var nbsides = settings.shape == 'star' ? 5 : 6;
                var size    = settings.size ? settings.size : 100;

                if ( type == 'bubble' ) {
                    snumber = settings.number ? settings.number : 6;
                    nbsides = settings.shape == 'star' ? 5 : 6;
                    size = settings.size ? settings.size : 100;
                    particlesJS("particles-js_" + myParticlesId,{ "fps_limit": 0,"particles": { "number": { "value": snumber, "density": { "enable": true, "value_area": 800 } }, "color": { "value": color }, "shape": { "type": shape, "stroke": { "width": 0, "color": "#000" }, "polygon": { "nb_sides": nbsides }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": opacity, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": size, "random": false, "anim": { "enable": true, "speed": 10, "size_min": 40, "sync": false } }, "line_linked": { "enable": false, "distance": 200, "color": "#ffffff", "opacity": 1, "width": 2 }, "move": { "enable": true, "speed": 8, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "grab" }, "onclick": { "enable": false, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
                } else if( type == 'nasa' ) {
                    snumber = settings.number ? settings.number : 160;
                    size = settings.size ? settings.size : 3;
                    particlesJS("particles-js_" + myParticlesId, { "fps_limit": 0,"particles": { "number": { "value": snumber, "density": { "enable": true, "value_area": 800 } }, "color": { "value": color }, "shape": { "type": shape, "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": opacity, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0, "sync": false } }, "size": { "value": size, "random": true, "anim": { "enable": false, "speed": 4, "size_min": 0.3, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 600 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3 }, "repulse": { "distance": 400, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
                } else if( type == 'snow' ) {
                    snumber = settings.number ? settings.number : 400;
                    size = settings.size ? settings.size : 10;
                    particlesJS("particles-js_" + myParticlesId, { "fps_limit": 0,"particles": { "number": { "value": snumber, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#fff" }, "shape": { "type": shape, "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": opacity, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": size, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2 }, "move": { "enable": true, "speed": 6, "direction": "bottom", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 0.5 } }, "bubble": { "distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
                } else if( type == 'default' ) {
                    snumber = settings.number ? settings.number : 80;
                    size = settings.size ? settings.size : 3;
                    particlesJS("particles-js_" + myParticlesId, { "fps_limit": 0,"particles": { "number": { "value": snumber, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
                } else {

                }
            }

        });

    }

    var NtParallaxHandler = function ($scope, $) {
        var target = $scope,
            sectionId = target.data("id"),
            settings = false,
            editMode = elementorFrontend.isEditMode();

        if (editMode) {
            settings = generateEditorSettings(sectionId);
        }

        if (!editMode || !settings) {
            //return false;
        }

        if (settings[0] == "yes") {

            generateJarallax();
        }

        function generateEditorSettings(targetId) {
            var editorElements = null,
                sectionData = {},
                sectionMultiData = {},
                settings = [];

            if (!window.elementor.hasOwnProperty("elements")) {
                return false;
            }

            editorElements = window.elementor.elements;

            if (!editorElements.models) {
                return false;
            }

            $.each(editorElements.models, function(index, elem) {

                if (targetId == elem.id) {

                    sectionData = elem.attributes.settings.attributes;
                } else if ( elem.id == target.closest(".elementor-top-section").data("id") ) {

                    $.each(elem.attributes.elements.models, function(index, col) {
                        $.each(col.attributes.elements.models, function(index,subSec) {
                            sectionData = subSec.attributes.settings.attributes;
                        });
                    });
                }
            });

            if (!sectionData.hasOwnProperty("wavo_parallax_type") || "" == sectionData["wavo_parallax_type"]) {
                return false;
            }

            settings.push(sectionData["wavo_parallax_switcher"]);                          // settings[0]
            settings.push(sectionData["wavo_parallax_type"]);                              // settings[1]
            settings.push(sectionData["wavo_parallax_speed"]);                             // settings[2]
            settings.push(sectionData["wavo_parallax_bg_size"]);                           // settings[3]
            settings.push("yes" == sectionData["wavo_parallax_mobile_support"] ? 0 : 1);   // settings[4]
            settings.push("yes" == sectionData["wavo_add_parallax_video"] ? 1 : 0);        // settings[5]
            settings.push(sectionData["wavo_local_video_format"]);                         // settings[6]
            settings.push(sectionData["wavo_parallax_video_url"]);                         // settings[7]
            settings.push(sectionData["wavo_parallax_video_start_time"]);                  // settings[8]
            settings.push(sectionData["wavo_parallax_video_end_time"]);                    // settings[9]
            settings.push(sectionData["wavo_parallax_video_volume"]);                      // settings[10]


            if (0 !== settings.length) {
                return settings;
            }

            return false;
        }

        function responsiveParallax(android, ios) {
            switch (true || 1) {
                case android && ios:
                    return /iPad|iPhone|iPod|Android/;
                    break;
                case android && !ios:
                    return /Android/;
                    break;
                case !android && ios:
                    return /iPad|iPhone|iPod/;
                    break;
                case !android && !ios:
                    return null;
            }
        }

        function generateJarallax() {
            var $type     = settings[1] ? settings[1] : 'scroll';
            var $speed    = settings[2] ? settings[2] : '0.4';
            var $imgsize  = settings[3] ? settings[3] : 'cover';

            setTimeout(function() {

                target.jarallax({
                    type            : $type,
                    speed           : $speed,
                    imgSize         : $imgsize,
                    disableParallax : responsiveParallax(1 == settings[4])
                });

            }, 500);

        }
    }

    class ShapeOverlays {
        constructor(elm) {
            this.elm = elm;
            this.path = elm.querySelectorAll('path');
            this.numPoints = 18;
            this.duration = 600;
            this.delayPointsArray = [];
            this.delayPointsMax = 300;
            this.delayPerPath = 100;
            this.timeStart = Date.now();
            this.isOpened = false;
            this.isAnimating = false;
        }
        toggle() {
            this.isAnimating = true;
            const range = 4 * Math.random() + 6;
            for (var i = 0; i < this.numPoints; i++) {
                const radian = i / (this.numPoints - 1) * Math.PI;
                this.delayPointsArray[i] = (Math.sin(-radian) + Math.sin(-radian * range) + 2) / 4 * this.delayPointsMax;
            }
            if (this.isOpened === false) {
                this.open();
            } else {
                this.close();
            }
        }
        open() {
            this.isOpened = true;
            this.elm.classList.add('is-opened');
            this.timeStart = Date.now();
            this.renderLoop();
        }
        close() {
            this.isOpened = false;
            this.elm.classList.remove('is-opened');
            this.timeStart = Date.now();
            this.renderLoop();
        }
        updatePath(time) {
            const points = [];
            for (var i = 0; i < this.numPoints + 1; i++) {
                points[i] = ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100
            }

            let str = '';
            str += (this.isOpened) ? 'M 0 0 V ' + points[0] : 'M 0 ' + points[0];
            for (var i = 0; i < this.numPoints - 1; i++) {
                const p = (i + 1) / (this.numPoints - 1) * 100;
                const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
                str += ' C ' + cp +' '+ points[i] +' '+ cp +' '+ points[i + 1] +' '+ p +' '+ points[i + 1];
            }
            str += (this.isOpened) ? 'V 0 H 0' : 'V 100 H 0';
            return str;
        }
        render() {
            if (this.isOpened) {
                for (var i = 0; i < this.path.length; i++) {
                    this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
                }
            } else {
                for (var i = 0; i < this.path.length; i++) {
                    this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
                }
            }
        }
        renderLoop() {
            this.render();
            if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
                requestAnimationFrame(() => {
                    this.renderLoop();
                });
            }
            else {
                this.isAnimating = false;
            }
        }
    }

    function shapeOverlaysMenu($Scope, $) {
        const elmNavi = document.querySelector('.wavo-shape-overlay-menu');
        const elmHamburger = document.querySelector('.hamburger');
        const gNavItems = document.querySelectorAll('.global-menu__item');
        const elmOverlay = document.querySelector('.shape-overlays');
        const overlay = new ShapeOverlays(elmOverlay);

        elmHamburger.addEventListener('click', () => {
            if (overlay.isAnimating) {
                return false;
            }
            overlay.toggle();
            if (overlay.isOpened === true) {
                elmNavi.classList.add('is-opened-navi');
                elmHamburger.classList.add('is-opened-navi');
                for (var i = 0; i < gNavItems.length; i++) {
                    gNavItems[i].classList.add('is-opened');
                }
            } else {

                for (var i = 0; i < gNavItems.length; i++) {
                    gNavItems[i].classList.remove('is-opened');
                }
                setTimeout(function(){
                elmNavi.classList.remove('is-opened-navi');
                elmHamburger.classList.remove('is-opened-navi');
                }, 1000);
            }
        });

        for (var i = 0; i < gNavItems.length; i++) {
            gNavItems[i].addEventListener('click', () => {
                if (overlay.isAnimating) {
                    return false;
                }
                overlay.toggle();
                if (overlay.isOpened === true) {
                    elmNavi.classList.add('is-opened-navi');
                    elmHamburger.classList.add('is-opened-navi');
                    for (var i = 0; i < gNavItems.length; i++) {
                        gNavItems[i].classList.add('is-opened');
                    }
                } else {

                    for (var i = 0; i < gNavItems.length; i++) {
                        gNavItems[i].classList.remove('is-opened');
                    }
                    setTimeout(function(){
                    elmNavi.classList.remove('is-opened-navi');
                    elmHamburger.classList.remove('is-opened-navi');
                    }, 1000);
                }
            });
        }
    }


    function updatePageSettings(newValue) {
        var settings = false,
            editMode = elementorFrontend.isEditMode();
        if (!editMode ) {
            return false;
        }
        if (editMode) {

            var page_skin   = elementor.settings.page.model.attributes.wavo_elementor_page_skin;
            var nav_skin    = elementor.settings.page.model.attributes.wavo_elementor_page_nav_skin;
            var hide_header = elementor.settings.page.model.attributes.wavo_elementor_hide_page_header;
            var hide_footer = elementor.settings.page.model.attributes.wavo_elementor_hide_page_footer;

            if ( page_skin && 'dark' === page_skin ) {
                $('body').removeClass('light').addClass( 'dark' );
            } else {
                $('body').removeClass('dark').addClass( 'light' );
            }
            if ( nav_skin && 'dark' === nav_skin ) {
                $('body .topnav').addClass('dark');
            }
            if ( hide_header && 'yes' === hide_header ) {
                $('body .wavo-main-header.header').hide();
                $('body .topnav').hide();
                $('body .hamenu').hide();
            } else {
                $('body .wavo-main-header.header').show();
                $('body .topnav').show();
                $('body .hamenu').show();
            }
            if ( hide_footer && 'yes' === hide_footer ) {
                $('body .footer-sm').hide();
            } else {
                $('body .footer-sm').show();
            }

        }
    }


    jQuery(window).on('load', function () {
        wavoBgImage();
        wavoGalleryIsotope(jQuery('body'),$);
        wavoMasonryBlog();
    });

    jQuery(window).on('elementor/frontend/init', function () {

        if ( typeof elementor != "undefined" && typeof elementor.settings.page != "undefined") {

            elementor.settings.page.addChangeCallback( 'wavo_elementor_page_skin', updatePageSettings );
            elementor.settings.page.addChangeCallback( 'wavo_elementor_hide_page_header', updatePageSettings );
            elementor.settings.page.addChangeCallback( 'wavo_elementor_page_header_type', updatePageSettings );
            elementor.settings.page.addChangeCallback( 'wavo_elementor_hide_page_header_topbar', updatePageSettings );
            elementor.settings.page.addChangeCallback( 'wavo_elementor_hide_page_footer', updatePageSettings );
            elementor.settings.page.addChangeCallback( 'wavo_elementor_hide_page_footer_widget_area', updatePageSettings );
            elementor.settings.page.addChangeCallback( 'wavo_elementor_hide_page_footer_copyright', updatePageSettings );
        }

        elementorFrontend.hooks.addAction('frontend/element_ready/section', wavoJarallax);
        elementorFrontend.hooks.addAction('frontend/element_ready/image.default', wavoImageJarallax);
        elementorFrontend.hooks.addAction('frontend/element_ready/wavo-header-menu.default', wavoNavMenus);
        elementorFrontend.hooks.addAction('frontend/element_ready/wavo-home-slider.default', wavoHomeSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/wavo-onepage.default', wavoOnepage);
        elementorFrontend.hooks.addAction('frontend/element_ready/wavo-services-item.default', wavoServicesItem);
        elementorFrontend.hooks.addAction('frontend/element_ready/wavo-projects-slider.default', wavoProjectsSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/wavo-justified-gallery.default', wavoJustifiedGallery);
        elementorFrontend.hooks.addAction('frontend/element_ready/wavo-popup-video.default', wavoPopupVideo);
        elementorFrontend.hooks.addAction('frontend/element_ready/wavo-testimonials.default', wavoTestimonialsSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/wavo-testimonials-two.default', wavoTestimonialsSlider2);
        elementorFrontend.hooks.addAction('frontend/element_ready/wavo-blog-slider.default', wavoBlogSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/wavo-page-hero.default', wavoParallaxie);

        var editMode = elementorFrontend.isEditMode();
        if (editMode) {
            elementorFrontend.hooks.addAction('frontend/element_ready/global', NtVegasHandler);
            elementorFrontend.hooks.addAction('frontend/element_ready/global', NtParticlesHandler);
            elementorFrontend.hooks.addAction('frontend/element_ready/global', NtParallaxHandler);
            elementorFrontend.hooks.addAction('frontend/element_ready/wavo-shape-overlays-menu.default', shapeOverlaysMenu);
        } else {
            NtVegas();
            NtParticles();
        }

        elementorFrontend.hooks.addFilter( 'frontend/handlers/menu_anchor/scroll_top_distance', function( scrollTop ) {
            if( $('.nt-locomotive-wrapper').size() ){
                return false;
            } else {
                return scrollTop;
            }
        });

    });

})(jQuery);
