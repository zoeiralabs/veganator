//Veganator 
(function($) {
	
    var self = $.Veganator = new function(){};
	
    $.extend(self, {

    	veganatorBackgrounds : [
    		'http://www.away.com.br/veganator/bg1.png',
    		'http://www.away.com.br/veganator/bg2.png',
    		'http://www.away.com.br/veganator/bg3.png',
    		'http://www.away.com.br/veganator/bg4.png'
    	],

        veganatorImgs : [
            'http://i.imgur.com/UnVC6lk.gif',
            'http://i.imgur.com/27PWy4U.jpg',
            'http://i.imgur.com/snxbmis.jpg',
            'http://i.imgur.com/wcYGp6R.jpg',
            'http://i.imgur.com/yJhU39V.jpg',
            'http://i.imgur.com/IaL5oDU.jpg',
            'http://i.imgur.com/7az2J3d.jpg',
            'http://i.imgur.com/NP0GJh2.jpg',
            'http://i.imgur.com/JxGoyjw.jpg',
            'http://i.imgur.com/Ya9iMXB.jpg',
            'http://i.imgur.com/A1Kn4lU.jpg',
            'http://i.imgur.com/JBroM07.jpg',
            'http://i.imgur.com/zQIuFjp.jpg',
            'http://i.imgur.com/yh2pbio.jpg',
            'http://i.imgur.com/5HCxbKS.jpg',
            'http://i.imgur.com/PrcrcgJ.jpg',
            'http://i.imgur.com/gsPyBVP.png',
            'http://i.imgur.com/tq5q5Xs.jpg',
            'http://i.imgur.com/mxuXUs1.jpg',
            'http://i.imgur.com/nXpqkFs.jpg',
            'http://i.imgur.com/SzGpfPN.jpg',
            'http://i.imgur.com/MxxcNOf.jpg',
            'http://i.imgur.com/v3jksJt.jpg',
            'http://i.imgur.com/IVzVsB1.jpg',
            'http://i.imgur.com/8TbF3J0.png',
            'http://i.imgur.com/t8tiAoW.jpg',
            'http://i.imgur.com/8rviWrR.jpg',
            'http://i.imgur.com/49cR9qv.jpg',
            'http://i.imgur.com/bubQxoh.jpg',
            'http://i.imgur.com/sCK11Sp.jpg',
            'http://i.imgur.com/zUHW6lN.jpg',
            'http://i.imgur.com/h76CBSN.jpg',
            'http://i.imgur.com/VqpI1l5.jpg',
            'http://i.imgur.com/x0pevtH.jpg',
            'http://i.imgur.com/aDm6cZF.jpg',
            'http://i.imgur.com/oqUfXPo.jpg',
            'http://i.imgur.com/4q9IzKC.jpg',
            'http://i.imgur.com/39qLhtD.jpg',
            'http://i.imgur.com/yjTPJQh.jpg',
            'http://i.imgur.com/6HxOpuY.png',
            'http://i.imgur.com/6arhwOU.jpg',
            'http://i.imgur.com/axjtX3z.jpg',
            'http://i.imgur.com/OsZZXyA.jpg',
            'http://i.imgur.com/4mlTju6.jpg',
            'http://i.imgur.com/jDhg187.jpg',
            'http://i.imgur.com/PybCqL2.png',
            'http://i.imgur.com/RLy8ZEe.png'
        ],

        handleImages : function (lstImgs, time)
        {
            $.each($('img'), function(i,item) { 
                //Skip if image is already replaced
                if($.inArray($(item).attr('src'), lstImgs) == -1)
                {
					var h = $(item).height();
					var w = $(item).width();
					
					//If image loaded
					if(h > 0 && w > 0)
					{
						//Replace
						$(item).css('width', w + 'px').css('height', h + 'px');
						$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
					}
					else
					{
						//Replace when loaded
						$(item).load(function(){
							//Prevent 'infinite' loop
							if($.inArray($(item).attr('src'), lstImgs) == -1)
							{
								var h = $(item).height();
								var w = $(item).width();
								$(item).css('width', w + 'px').css('height', h + 'px');
								$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
							}
						});
					}
				}
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo : function (bgImgs, time)
        {
			$backgroundImages = $(
            	'[class*=logo], [class*=header], [id*=header], [id*=logo],' +
            	'[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
            	'[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,'+
            	'[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            	)
            	.filter(function() {
            		backgroundImg = $(this).css('background-image');
            		return backgroundImg && backgroundImg != 'none';
            	}
            );

            $backgroundImages.each(function(i, item) {
            	$(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
            	$(item).css('background-position', '0 0');
            	$(item).css('background-repeat', 'no-repeat');
            	$(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function(){
        self.handleImages(self.veganatorImgs, 2000);
     	self.handleLogo(self.veganatorBackgrounds, 2000);
    });
})(jQuery);
