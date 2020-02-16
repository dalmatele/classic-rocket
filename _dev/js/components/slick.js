import $ from 'jquery';


export default class SlickSlider {
    init() {
        $('[data-slick]').not('.slick-initialized').each(function() {
            let self = $( this );
            if(self.data('count') === 1){
                return;
            }

            self.slick({
                // http://www.pdqcoders.com/font-based-icons.html
                prevArrow:"<button type=\"button\" class=\"btn btn-link slick-prev slick-arrow hidden-md-down\" style=\"margin-left:70%;margin-top:269%;opacity:0.5;\"><i class=\"material-icons up\">&#xE313;</i></button>",
                nextArrow:"<button type=\"button\" class=\"btn btn-link slick-next slick-arrow hidden-md-down\" style=\"margin-right:70%;margin-top: -42%;opacity:0.5;\"><i class=\"material-icons down\">&#xE316;</i></button>"

                });
        });
    }

}
