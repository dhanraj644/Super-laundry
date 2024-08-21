;(function($){$.fn.jetStickySection=function(options){var defaults={topSpacing:0,zIndex:'',stopper:$('.sticky-stopper'),stickyClass:false};var settings=$.extend({},defaults,options);function checkIndex(){if(typeof settings.zIndex=='number'){return true;}else{return false;}}
var hasIndex=checkIndex();function checkStopper(){if(0<settings.stopper.length||typeof settings.stopper==='number'){return true;}else{return false;}}
var hasStopper=checkStopper();return this.each(function(){var $this=$(this);var topSpacing=settings.topSpacing;var thisHeight=$this.outerHeight();var thisWidth=$this.outerWidth();var zIndex=settings.zIndex;var pushPoint=$this.offset().top-topSpacing;var placeholder=$('<div></div>').width(thisWidth).height(thisHeight).addClass('sticky-placeholder');var stopper=settings.stopper;var $window=$(window);var detached=false;var stick=false;function stickyScroll(){if(detached){return;}
var thisHeight=$this.outerHeight();var windowTop=$window.scrollTop();var stopPoint=stopper;var parentWidth=$this.parent().width();placeholder.width(parentWidth);if(hasStopper&&typeof settings.stopper!=='number'){var stopperTop=stopper.offset().top;stopPoint=(stopperTop-thisHeight)-topSpacing;}
if(pushPoint<windowTop){if(settings.stickyClass)
$this.addClass(settings.stickyClass);$this.after(placeholder).css({position:'fixed',top:topSpacing,width:parentWidth});if(hasIndex){$this.css({zIndex:zIndex});}
if(hasStopper){if(stopPoint<windowTop){var diff=(stopPoint-windowTop)+topSpacing;$this.css({top:diff});}}
if(!stick){$this.trigger('jetStickySection:stick');}
stick=true;}else{if(settings.stickyClass)
$this.removeClass(settings.stickyClass);$this.css({position:'',top:'',left:'',width:''});placeholder.remove();if(stick){$this.trigger('jetStickySection:unstick');}
stick=false;}}
function detachStickyScroll(){detached=true;$window.off('scroll',stickyScroll);$window.off('touchmove',stickyScroll);$window.off('resize',stickyScroll);if(settings.stickyClass)
$this.removeClass(settings.stickyClass);$this.css({position:'',top:'',left:'',width:''});placeholder.remove();}
if($window.innerHeight()>thisHeight){$this.on('jetStickySection:activated',stickyScroll);$window.on('scroll',stickyScroll);$window.on('touchmove',stickyScroll);$window.on('resize',stickyScroll);$this.on('jetStickySection:detach',detachStickyScroll);}});};})(jQuery);