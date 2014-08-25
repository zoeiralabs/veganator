//nVampeta 
(function($) {
	
    var self = $.nVampeta = new function(){};
	
    $.extend(self, {

    	nVampetaBackgrounds : [
    		'http://www.away.com.br/nvampeta/bg1.png'
    	],

        nVampetaImgs : [
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
			'http://img.r7.com/images/2013/07/01/08_59_09_602_file?dimensions=300x490',
			'http://e.i.uol.com.br/futebol/vampeta_careca.jpg',
			'http://www.estadao.com.br/fotos/vampeta292_JOSE_PATRICIO__ae_22122009.jpg',
			'http://borgesluciano.blog.terra.com.br/files/2009/01/vampeta1.jpg',
			'http://andrebarcinski.folha.blog.uol.com.br/images/vampeta.jpg',
			'http://www.lacancha.com/images/p-vampeta.jpg',
			'http://www.bahianoticias.com.br/fotos/esportes_noticias/27094/IMAGEM_NOTICIA_5.jpg',
			'http://futebolcomamendoim.files.wordpress.com/2008/11/vampeta-inter.jpg',
			'http://image.ig.com.br/babado/2005/imagens/0255001-0255500/255312.jpg',
			'http://3.bp.blogspot.com/-RqkKxjdquwI/T-QocNNy4CI/AAAAAAAABpE/quj9LID7kxI/s1600/vampeta.jpg',
			'http://www.correio24horas.com.br/fileadmin/user_upload/tt_news/Diego_Mascarenhas/vampeta_livro2.jpg',
			'http://e.i.uol.com.br/futebol/090129vampeta_acusado208.jpg',
			'http://img.r7.com/images/2014/06/25/35uegnu4hd_i494wnd8_file.jpg?dimensions=460x305',
			'http://s2.glbimg.com/HovKIGkXm7Yp0Kw-UwtS6s_KLf8=/300x230/s.glbimg.com/es/ge/f/original/2014/01/21/vampeta.jpg',
			'http://esporte.ig.com.br/images/361/110/9/1753360.us_vampeta_treina_outros_224_298.jpg',
			'http://www.todopoderosotimao.com/imagens/idolos/vampeta.jpg',
			'http://img.estadao.com.br/fotos/E7/14/0A/XE7140AB961B84A689E5B9B3959424779.jpg',
			'http://borgesluciano.blog.terra.com.br/files/2009/01/vampeta.jpg',
			'http://i1321.photobucket.com/albums/u548/TimedopovoNews/010802766-EX00_zpsb90504b1.jpg',
			'http://e.i.uol.com.br/esporte/futebol/2010/02/22/vampeta-em-treino-no-corinthians-1266866360895_300x230.jpg',
			'http://www.allejo.com.br/wp-content/uploads/2012/03/vampeta-bigode.jpg',
			'http://fw.atarde.uol.com.br/2013/07/340x255_1337052.jpg',
			'http://www.dibico.com.br/wp-content/uploads/2012/08/Vampeta-na-Inter.jpg',
			'http://ig-wp-colunistas.s3.amazonaws.com/futebolargentino/wp-content/uploads/2009/09/brasar12.jpg',
			'http://www.calciobidoni.it/immagini/vampeta-02.jpg',
			'http://www.solofutbol.cl/Imagenes/Albunes%20de%20futbol/brasil/Brasil%202002/vampeta%202002.jpg',
			'http://4.bp.blogspot.com/-WNSEz3hEJ1c/T9jl_S2QDnI/AAAAAAAAAFU/BsmMylYfDC4/s1600/Vampeta.jpg',
			'http://cache-assets.flogao.com.br/s26/10/02/06/107/45268164.jpg'
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
        self.handleImages(self.nVampetaImgs, 3000);
     	self.handleLogo(self.nVampetaBackgrounds, 3000);
    });
})(jQuery);
