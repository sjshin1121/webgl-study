var Texture = Definer.extend({

    name: 'Texture',

    properties: {
        img: null
    },
    
    constant: {
        'loaded': 'Texture.loaded'
    },

    initialize: function(el) {
        var that = this;
        switch (el.tagName.toLowerCase()) {
            case 'img':
                if (el.complete) {
                    this.img = el;
                    this.dispatch(Texture.loaded);
                }
                else {
                    el.onload = function() {
                        that.img = this;
                        that.dispatch(Texture.loaded);
                    };
                }
                break;
            case 'canvas':break;
            case 'video':break;
            default:
            // 오류처리
        }
    }
});