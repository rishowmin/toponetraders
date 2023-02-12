// SmartMenus init
$(function() {
    $('#main-menu').smartmenus({
      mainMenuSubOffsetX: -1,
      mainMenuSubOffsetY: 4,
      subMenusSubOffsetX: 6,
      subMenusSubOffsetY: -6
    });
  });
  
  // SmartMenus mobile menu toggle button
  $(function() {
    var $mainMenuState = $('#main-menu-state');
    if ($mainMenuState.length) {
      // animate mobile menu
      $mainMenuState.change(function(e) {
        var $menu = $('#main-menu');
        if (this.checked) {
          $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
        } else {
          $menu.show().slideUp(250, function() { $menu.css('display', ''); });
        }
      });
      // hide mobile menu beforeunload
      $(window).bind('beforeunload unload', function() {
        if ($mainMenuState[0].checked) {
          $mainMenuState[0].click();
        }
      });
    }
  });

  // SmartMenus CSS animated sub menus - toggle animation classes on sub menus show/hide
  $(function() {
    $('#main-menu').bind({
      'show.smapi': function(e, menu) {
        $(menu).removeClass('hide-animation').addClass('show-animation');
      },
      'hide.smapi': function(e, menu) {
        $(menu).removeClass('show-animation').addClass('hide-animation');
      }
    }).on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', 'ul', function(e) {
      $(this).removeClass('show-animation hide-animation');
      e.stopPropagation();
    });
  });
