var originalLeave=$.fn.popover.Constructor.prototype.leave;$.fn.popover.Constructor.prototype.leave=function(e){var o=e instanceof this.constructor?e:$(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type),t,r;originalLeave.call(this,e),e.currentTarget&&(t=$(e.currentTarget).siblings(".popover"),r=o.timeout,t.one("mouseenter",function(){clearTimeout(r),t.one("mouseleave",function(){$.fn.popover.Constructor.prototype.leave.call(o,o)})}))},$("body").popover({selector:"[data-popover]",trigger:"click hover",placement:"auto",delay:{show:50,hide:400}});