(function () {

  var usnModule = angular.module('usn', [
    'ui.router',
    'ngAnimate',
    'pascalprecht.translate',
    'ngSanitize'
  ])
    .controller('DonateController', donateController)

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $urlRouterProvider.otherwise('/');

      $stateProvider

      /*
       * Layout
       */

        .state('root', {
          abstract: true,
          url: '',
          views: {
            'header': {
              templateUrl: 'app/common/header/header.html'
            },
            'nav-main': {
              templateUrl: 'app/common/nav/nav-main.html'
            },
            'nav-header': {
              templateUrl: 'app/common/nav/nav-header.html',
              controller: ['$scope', '$stateParams', '$filter', '$translate', '$state', function ($scope, $stateParams, $filter, $translate, $state) {
                $scope.changeLanguage = function (langKey) {
                  $translate.use(langKey);

                  var currentPage = $state.current.name;
                  if (currentPage.toLowerCase().indexOf("donate") >= 0) {
                    $state.go($state.current, $stateParams, {reload: true, inherit: false});
                  }

                };
              }]
            },
            'nav-footer': {
              templateUrl: 'app/common/nav/nav-footer.html'
            }
          }
        })


        /*
         * Unique
         */

        .state('root.index', {
          url: '/',
          views: {
            'content-main@': {
              templateUrl: 'app/components/index/content-main.html'
            }
          }
        })
        .state('root.projects', {
          url: '/projects',
          views: {
            'content-main@': {
              templateUrl: 'app/components/projects/content-main.html'
            }
          }
        })
        .state('root.info', {
          url: '/info',
          views: {
            'content-main@': {
              templateUrl: 'app/components/info/content-main.html'
            }
          }
        })
        .state('root.myusn', {
          url: '/myusn',
          views: {
            'content-main@': {
              templateUrl: 'app/components/myusn/content-main.html'
            }
          }
        })
        .state('root.donate', {
          url: '/donate',
          redirectTo: 'root.donate.step1',
          views: {
            'content-main@': {
              templateUrl: 'app/components/donate/content-main.php',
              controller: 'DonateController'
            }
          }
        })
        .state('root.donate.step1', {
          url: '/step1',
          parent: 'root.donate',
          views: {
            'content-step': {
              templateUrl: 'app/components/donate/content-step-1.html',
              controller: ['$scope', '$stateParams', '$translate', function ($scope, $stateParams, $translate) {
                $(function () {
                  setActiveTab('donate-step1');
                  $('[data-toggle="popover"]').popover();

                  var currentLanguage = $translate.proposedLanguage() || $translate.use();
                  $.validate({
                    modules: 'date, security',
                    lang: currentLanguage
                  });
                  
                  $('.payment-form').on('click', '.payment-alert', function() {
                    $(this).fadeOut();
                  });
                });
              }]
            }
          }
        })
        .state('root.donate.step2', {
          url: '/step2',
          parent: 'root.donate',
          views: {
            'content-step': {
              templateUrl: 'app/components/donate/content-step-2.html',
              controller: ['$scope', '$stateParams', '$translate', '$state', function ($scope, $stateParams, $translate, $state) {
                setActiveTab('donate-step2');

                if ($scope.donate.paymentValue === undefined || $scope.donate.paymentValue <= 0) {
                  $state.go('root.donate.step1', $stateParams, {reload: true, inherit: false});
                  return;
                }

                var currentLanguage = $translate.proposedLanguage() || $translate.use();
                $.validate({
                  lang: currentLanguage
                });
              }]
            }
          }
        })
        .state('root.donate.step3', {
          url: '/step3',
          parent: 'root.donate',
          views: {
            'content-step': {
              templateUrl: 'app/components/donate/content-step-3.html',
              controller: ['$scope', '$stateParams', '$state', function ($scope, $stateParams, $state) {
                setActiveTab('donate-step3');

                if ($scope.donate.paymentValue === undefined || $scope.donate.paymentValue <= 0) {
                  $state.go('root.donate.step1', $stateParams, {reload: true, inherit: false});
                }
                
                $('.payment-form').on('click', '.payment-alert', function() {
                  $(this).fadeOut();
                });

                $('#confirm-dialog').on('hidden.bs.modal', function() {
                  $state.go('root.index', $stateParams, {reload: true, inherit: false});
                });
              }]
            }
          }
        })
        .state('root.donate.payone', {
          url: '/api/services/payone.php',
          parent: 'root.donate'
        })

        /*
         * Templates
         */

        .state('root.template', {
          abstract: true
        })
        .state('root.template.default', {
          url: '/{page}',
          views: {
            'content-main@': {
              templateUrl: 'app/common/templates/default/content-main.html',
              controller: ['$scope', '$stateParams', '$filter', function ($scope, $stateParams, $filter) {
                if ($stateParams.page === '')
                  $stateParams.page = 'index';
                $scope.page = $filter('uppercase')($stateParams.page);
              }]
            }
          }
        })
        .state('root.template.project', {
          url: '/project/{page}',
          views: {
            'header@': {
              templateUrl: 'app/common/templates/project/header.html',
              controller: ['$scope', '$stateParams', '$filter', function ($scope, $stateParams, $filter) {
                $scope.page = $stateParams.page;
              }]
            },
            'content-main@': {
              templateUrl: 'app/common/templates/project/content-main.html',
              controller: ['$scope', '$stateParams', '$filter', function ($scope, $stateParams, $filter) {
                $scope.page = $filter('uppercase')($stateParams.page);
                $scope.page = $scope.page.replace('-', '_');
              }]
            }
          }
        });

    }])

    // log state change errors
    .run(['$rootScope', '$state', function ($rootScope, $state) {
      $rootScope.$on('$stateChangeError', console.log.bind(console));

      $rootScope.$on('$stateChangeStart', function (evt, to, params) {
        if (to.redirectTo) {
          evt.preventDefault();

          $state.go(to.redirectTo, params);
        }
      });
    }]);

})();

setActiveTab = function (currentPage) {
  $('#donate-steps').find('li').each(function (index, element) {
    $(element).removeClass('active');
  });

  var stepClass = currentPage.replace(/\./g, '-');
  $('#donate-steps').find('li.' + stepClass).addClass('active');
};
