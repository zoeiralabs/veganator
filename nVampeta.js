//nCage 
(function($) {
	
    var self = $.nCage = new function(){};
	
    $.extend(self, {
        nCageImgs : [
		'http://1.bp.blogspot.com/_Ytf2Ze0HWAA/TGvat7eAx1I/AAAAAAAAAlA/rAIdDz9ThO8/s400/m_vampeta2_0e156bc6f4f2048e8089c5fc47cf4a7a.jpg',
		'http://i1.r7.com/data/files/2C95/948F/3D68/381E/013D/6944/E84A/57B5/vampeta.jpg',
		'http://contraversao.com/wp-content/uploads/2012/05/vampeta.jpg',
		'http://imguol.com/2012/09/25/vampeta-fala-sobre-ensaio-nu-para-a-g-magazine-1348607286095_956x500.jpg',
		'http://cdn.foxsports.com.br/sites/foxsports-br/files/img/notes/materia/620x465/vampeta-livro-640x480-fotoarena.jpg',
		'http://www.guimaonline.com.br/news/images/News/2014/01/220114/vampeta.jpg',
		'http://www.onordeste.com/administrador/personalidades/imagemPersonalidade/d14c6ee892651fe951b6e148209dc00e593.jpg',
		'http://1.bp.blogspot.com/-6j2MMnPnt9o/Ul1HFs2rbkI/AAAAAAAABBo/LjxltuizyHk/s1600/13276251.jpeg',
		'http://www.radiostilo.com/sitedata/imgsdt/noticiasLe/1386/vampeta.jpg',
		'http://s2.glbimg.com/kBZ7-_zVpOcKd50zyflOrHS-b6M=/620x470/s.glbimg.com/es/ge/f/original/2011/02/09/vampeta_rincon7_gcom_95.jpg',
		'http://andrebarcinski.folha.blog.uol.com.br/images/vampeta.jpg',
		'http://www.estadao.com.br/fotos/vampeta292_JOSE_PATRICIO__ae_22122009.jpg',
		'http://g.glbimg.com/og/gs/gsat2/f/original/2012/11/01/vampeta_muvuca.jpg',
		'http://www.blogdomazzarino.com.br/wp-content/uploads/2013/01/vampeta.jpg',
		'http://thesportsalert.com/wp-content/uploads/2014/07/vampeta-brazil.jpg',
		'http://cdn.foxsports.com.br/sites/foxsports-br/files/img/notes/materia/620x465/Corinthians-Vampeta-LivrariaCultura-Livro-Lan%C3%A7amento-640x480-FotoArena.jpg',
		'http://33.media.tumblr.com/tumblr_lqpcckSC8u1r2noxoo1_250.jpg',
		'http://img.r7.com/images/2013/07/01/08_59_09_602_file?dimensions=300x490'
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
        }
    });

    //Run on jQuery ready
    $(function(){
        self.handleImages(self.nCageImgs, 3000);
    });
})(jQuery);

 
