!function(){"use strict";define("app/main/templates/cache",["angular"],function(e){return e.module("templatesCache",["app/companies/templates/list.html","app/companies/templates/new.html","app/companies/templates/show.html","app/directors/templates/directors-list.html","app/directors/templates/directors-new.html","app/main/templates/404.html","app/main/templates/footer.html","app/main/templates/layout.html","app/main/templates/navbar.html"]),e.module("app/companies/templates/list.html",[]).run(["$templateCache",function(e){e.put("app/companies/templates/list.html",'<ul class="cd-gallery animated zoomIn"><li ng-repeat="company in vm.companies" class=cd-item><a ui-sref=companies.show(company)><div><h2>{{company.name}}</h2><p>{{company.address}} &nbsp;&nbsp;|&nbsp;&nbsp; {{company.city}} &nbsp;&nbsp;|&nbsp;&nbsp; <span>{{company.country}}</span></p><b>View More</b></div></a></li></ul>')}]),e.module("app/companies/templates/new.html",[]).run(["$templateCache",function(e){e.put("app/companies/templates/new.html",'<div class="cd-fold-content single-page"><header class="animated fadeInDown"><h2 ng-show=vm.company.name>{{vm.company.name}}</h2><h2 ng-hide=vm.company.name>Add New Company</h2></header><div class=container-fluid><form name=companyForm class="companyForm animated fadeIn"><div class=row><div class="col-md-4 text-right"><em>Name</em></div><div class=col-md-5><input required id=name name=name fend-focus=focusNameInput ng-model=vm.company.name placeholder={{vm.company.name}}> <span ng-class="{\'invalid\': companyForm.name.$error.required && companyForm.name.$touched }" class=bar></span><div ng-messages="companyForm.name.$touched && companyForm.name.$error"><div class=error ng-message=required>You did not enter company name</div></div></div></div><div class=row><div class="col-md-4 text-right"><em>Adress</em></div><div class=col-md-5><input required id=address name=address ng-model=vm.company.address placeholder={{vm.company.address}}> <span ng-class="{\'invalid\': companyForm.address.$error.required && companyForm.address.$touched }" class=bar></span><div ng-messages="companyForm.address.$touched && companyForm.address.$error"><div class=error ng-message=required>You did not enter address</div></div></div></div><div class=row><div class="col-md-4 text-right"><em>City</em></div><div class=col-md-5><input required id=city name=city ng-model=vm.company.city placeholder={{vm.company.city}}> <span ng-class="{\'invalid\': companyForm.city.$error.required && companyForm.city.$touched }" class=bar></span><div ng-messages="companyForm.city.$touched &&  companyForm.city.$error"><div class=error ng-message=required>You did not enter city</div></div></div></div><div class=row><div class="col-md-4 text-right"><em>Country</em></div><div class=col-md-5><input required id=country name=country ng-model=vm.company.country placeholder={{vm.company.country}}> <span ng-class="{\'invalid\': companyForm.country.$error.required && companyForm.country.$touched }" class=bar></span><div ng-messages="companyForm.country.$touched && companyForm.country.$error"><div class=error ng-message=required>You did not enter country</div></div></div></div><div class=row><div class="col-md-4 text-right"><em>Email</em></div><div class=col-md-5><input type=email id=email name=email ng-model=vm.company.email placeholder={{vm.company.email}}> <span ng-class="{\'invalid\': companyForm.email.$error.required  && companyForm.email.$touched }" class=bar></span><div ng-messages="companyForm.email.$touched && companyForm.email.$error"><div ng-class="{\'invalid\': companyForm.email.$error.required }" class=error ng-message=email>Must be valid email</div></div></div></div><div class=row><div class="col-md-4 text-right"><em>Phone</em></div><div class=col-md-5><input type=tel id=phone name=phone ng-model=vm.company.phone placeholder={{vm.company.phone}}> <span class=bar></span></div></div><directors-list></directors-list><div class=row><div class="col-md-4 text-right"><em></em></div><div class=col-md-5><directors-new></directors-new></div></div><footer><a ng-class="vm.editing ? \'fadeInDownBig\' : \'\'" class="animated green btn" ng-click=vm.save() ng-disabled=companyForm.$invalid><img src=./shared/img/sync.svg></a></footer></form></div></div><a class=cd-close ng-click=vm.toggleContent(flase)></a>')}]),e.module("app/companies/templates/show.html",[]).run(["$templateCache",function(e){e.put("app/companies/templates/show.html",'<div class="cd-fold-content single-page"><header class="fadeInDown animated"><h2 ng-hide=vm.editing>{{vm.company.name}}</h2><div class="col-md-5 name-input" ng-show=vm.editing><input name=name ng-model=vm.company.name value={{vm.company.name}} fend-focus=focusNameInput required> <span ng-class="{\'invalid\': companyForm.name.$error.required && companyForm.address.$touched }" class=bar></span><div ng-messages="companyForm.name.$touched && companyForm.name.$error"><div class=error ng-message=required>You did not enter name</div></div></div><a ng-class="vm.editing ? \'fadeOut\' : \'zoomInDown\'" class="animated btn" ng-click=vm.edit()><img src=./shared/img/pencil.svg></a></header><div class="container-fluid animated bounceInUp"><form name=companyForm><div class=row><div class="col-md-4 text-right"><em>Adress</em></div><div class=col-md-8 ng-hide=vm.editing><p>{{vm.company.address}}</p></div><div class="col-md-5 animated bounceInUp" ng-show=vm.editing><input name=address required id=address ng-model=vm.company.address value={{vm.company.address}}> <span ng-class="{\'invalid\': companyForm.address.$error.required && companyForm.address.$touched }" class=bar></span><div ng-messages="companyForm.address.$touched && companyForm.address.$error"><div class=error ng-message=required>You did not enter address</div></div></div></div><div class=row><div class="col-md-4 text-right"><em>City</em></div><div class=col-md-8 ng-hide=vm.editing><p>{{vm.company.city}}</p></div><div class="col-md-5 animated bounceInUp" ng-show=vm.editing><input required name=city id=city ng-model=vm.company.city value={{vm.company.city}}> <span ng-class="{\'invalid\': companyForm.city.$error.required && companyForm.city.$touched }" class=bar></span><div ng-messages="companyForm.city.$touched &&  companyForm.city.$error"><div class=error ng-message=required>You did not enter city</div></div></div></div><div class=row><div class="col-md-4 text-right"><em>Country</em></div><div class=col-md-8 ng-hide=vm.editing><p>{{vm.company.country}}</p></div><div class="col-md-5 animated bounceInUp" ng-show=vm.editing><input required name=country id=country ng-model=vm.company.country value={{vm.company.country}}> <span ng-class="{\'invalid\': companyForm.country.$error.required && companyForm.country.$touched }" class=bar></span><div ng-messages="companyForm.country.$touched && companyForm.country.$error"><div class=error ng-message=required>You did not enter country</div></div></div></div><div class=row><div class="col-md-4 text-right"><em>Email</em></div><div class=col-md-8 ng-hide=vm.editing><p>{{vm.company.email}}</p></div><div class="col-md-5 animated bounceInUp" ng-show=vm.editing><input type=email id=email name=email ng-model=vm.company.email value={{vm.company.email}}> <span ng-class="{\'invalid\': companyForm.email.$error.required  && companyForm.email.$touched }" class=bar></span><div ng-messages="companyForm.email.$touched && companyForm.email.$error"><div ng-class="{\'invalid\': companyForm.email.$error.required }" class=error ng-message=email>Must be valid email</div></div></div></div><div class=row><div class="col-md-4 text-right"><em>Phone</em></div><div class=col-md-8 ng-hide=vm.editing><p>{{vm.company.phone}}</p></div><div class="col-md-5 animated bounceInUp" ng-show=vm.editing><input type=tel id=phone name=phone ng-model=vm.company.phone value={{vm.company.phone}}> <span class=bar></span></div></div><directors-list></directors-list><div class="row animated bounceInUp" ng-show=vm.editing><div class="col-md-4 text-right"><em></em></div><div class=col-md-5><directors-new></directors-new></div></div><footer><a ng-class="vm.editing ? \'fadeInLeftBig\' : \'fadeOutLeftBig\'" class="animated delete" ng-click=vm.delete()>DELETE</a> <a ng-class="vm.editing ? \'fadeInDownBig\' : \'fadeOutDownBig\'" class="animated btn green" ng-click=vm.update() ng-disabled=companyForm.$invalid><img ng-if=vm.editing src=./shared/img/sync.svg></a></footer></form></div></div><a class=cd-close ng-click=vm.toggleContent(flase)>XXX</a>')}]),e.module("app/directors/templates/directors-list.html",[]).run(["$templateCache",function(e){e.put("app/directors/templates/directors-list.html",'<div class=row ng-repeat="director in directors"><div class="col-md-4 text-right"><em>Founder {{$index + 1}}</em></div><div class=col-md-5><div class=col-md-8><p>{{director.name}} {{director.surname}}</p></div></div></div>')}]),e.module("app/directors/templates/directors-new.html",[]).run(["$templateCache",function(e){e.put("app/directors/templates/directors-new.html",'<div class=add-new ng-class="{\'add\': newDirectorAdding === false }"><a ng-hide=newDirectorAdding ng-href=# ng-click=addNew()>Add Founder</a><div ng-show=newDirectorAdding class=new-panel><div><input id=directorName name=directorName ng-model=newDirector.name placeholder="Founder Name"> <span class=highlight></span> <span class=bar></span></div><div><input id=directorSurname name=directorSurname ng-model=newDirector.surname placeholder="Founder Surname"> <span class=highlight></span> <span class=bar></span></div><div class="btn green" ng-click=saveDirector()>ADD</div></div></div>')}]),e.module("app/main/templates/404.html",[]).run(["$templateCache",function(e){e.put("app/main/templates/404.html",'<div class=container><div class=row><i class="glyphicon glyphicon-exclamation-sign"></i> Not Found</div></div>')}]),e.module("app/main/templates/footer.html",[]).run(["$templateCache",function(e){e.put("app/main/templates/footer.html",'<div id=footer class="footer hidden-xs"><div class=container><p class=text-muted>Angular.js Demo - Companies CRUD - by <a href=https://github.com/lipenco target=_blank>@lipenco</a></p></div></div>')}]),e.module("app/main/templates/layout.html",[]).run(["$templateCache",function(e){e.put("app/main/templates/layout.html","<div ui-view=navbar><div ng-include=\"'app/main/templates/navbar.html'\"></div></div><main class=cd-main ui-view=content style=margin-top:50px></main><div class=cd-folding-panel><div class=fold-left></div><div class=fold-right></div><div class=cd-fold-content><span ui-view=readCompany></span></div></div>")}]),e.module("app/main/templates/navbar.html",[]).run(["$templateCache",function(e){e.put("app/main/templates/navbar.html",'<div class="navbar navbar-fixed-top" role=navigation><div class=container><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=.navbar-collapse><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href="#/">Companies CRUD</a></div><a ui-sref=companies.new() class="animated btn green zoomInDown"><img src=./shared/img/add.svg></a><div class="navbar-collapse collapse"></div></div></div>')}]),{name:"templatesCache"}}),define("shared/fend/progressbar-loading/module",["require","angular","ngProgress"],function(e){var n=e("angular");return e("ngProgress"),n.module("fend.progressbar.loading",["ngProgress"])}),define("shared/fend/progressbar-loading/factories/progress.config",["require","../module"],function(e){function n(e,n){function o(){e.$on("loadingbar:start:event",function(){n.start()}),e.$on("loadingbar:progress:event",function(e,o){n.set(o)}),e.$on("loadingbar:complete:event",function(){n.complete(),n.stop()})}function a(e){n.color(e)}function r(e){n.height(e)}var t={eventListeners:o,color:a,height:r};return t}var o=e("../module");o.factory("ProgressConfig",n),n.$inject=["$rootScope","ngProgress"]}),define("shared/fend/progressbar-loading/factories/progress.status",["require","../module"],function(e){function n(e){function n(){e.$emit("loadingbar:start:event")}function o(n){e.$emit("loadingbar:progress:event",100*n)}function a(){e.$emit("loadingbar:complete:event")}var r={start:n,progress:o,complete:a};return r}var o=e("../module");o.factory("ProgressStatus",n),n.$inject=["$rootScope"]}),define("shared/fend/progressbar-loading/factories/progress.interceptor",["require","../module"],function(e){function n(e,n,o){function a(e){l=e.defaults}function r(){o.start()}function t(){o.progress(u/p)}function i(){o.complete(),u=0,p=0}function s(e){var o,a=l;if("GET"!==e.method||e.cache===!1)return e.cached=!1,!1;o=e.cache===!0&&void 0===a.cache?n.get("$http"):void 0!==a.cache?a.cache:e.cache;var r=void 0!==o?void 0!==o.get(e.url):!1;return void 0!==e.cached&&r!==e.cached?e.cached:(e.cached=r,r)}function c(e){return s(e)||(0===p&&r(),p++),e}function d(n){return angular.isDefined(n)?(s(n.config)||(u++,u>=p?i():t()),n):(i(),e.reject(n))}function m(n){return s(n.config)||(u++,u>=p?i():t()),e.reject(n)}var l,p=0,u=0,v={setHttpProviderDefaults:a,request:c,response:d,responseError:m};return v}var o=e("../module");o.factory("ProgressInterceptor",n),n.$inject=["$q","$cacheFactory","ProgressStatus"]}),define("shared/fend/progressbar-loading/interceptors/http.config",["require","../module"],function(e){function n(e,n){function o(n){return n.setHttpProviderDefaults(e),n}n.factory("ProgressInterceptorDefined",o),e.interceptors.push("ProgressInterceptorDefined"),o.$inject=["ProgressInterceptor"]}var o=e("../module");o.config(n),n.$inject=["$httpProvider","$provide"]}),define("shared/fend/progressbar-loading/package",["require","./module","./factories/progress.config","./factories/progress.status","./factories/progress.interceptor","./interceptors/http.config"],function(e){var n=e("./module");return e("./factories/progress.config"),e("./factories/progress.status"),e("./factories/progress.interceptor"),e("./interceptors/http.config"),n}),define("shared/fend/navbar/module",["require","angular"],function(e){var n=e("angular");return n.module("fend.navbar",[])}),define("shared/fend/navbar/factories/menu.config",["require","../module"],function(e){function n(e,n){function o(e,n,o){return{label:e,location:"/"+n,url:"#"+n,css:o||""}}function a(e,n,a){a=a||"left";var r=o(e,n);switch(s[r.location]=r,a){case"left":c.left.push(r);break;case"right":c.right.push(r)}}function r(e){e!==i&&(null!==i&&(i.css=""),e.css="active",i=e)}function t(){var e,o,a;e=n.path(),o=e.split("/"),o.length>2&&(e="/"+o[1],o=null),a=s[e],a?r(a):null!==i&&(i.css="",i=null)}var i=null,s={},c={left:[],right:[]},d={addMenuItem:a};return e.menuItems=c,e.location=n,e.$watch("location.path()",t,!0),d}var o=e("../module");o.factory("MenuConfig",n),n.$inject=["$rootScope","$location"]}),define("shared/fend/navbar/package",["require","./module","./factories/menu.config"],function(e){var n=e("./module");return e("./factories/menu.config"),n}),define("shared/fend/input-utils/module",["require","angular"],function(e){var n=e("angular");return n.module("fend.input.utils",[])}),define("shared/fend/input-utils/factories/input.focus",["require","../module"],function(e){function n(e){function n(e){var n=a[e];return n?n:(n=new o(e),a[e]=n,n)}var o=function(){function n(e){return"string"==typeof e||e instanceof String}function o(){s=null,c=null,a()}function a(){for(var e=0,n=i.length;n>e;e++)t[i[e]]=!1}function r(){a(),t[c]=!0,s=c}var t,i,s=null,c=null,d=function(e){this.classInfo="InputFocus for: "+e},m=d;return m.prototype.config=function(e,n){t=e,i=n,o()},m.prototype.setFocus=function(o,a){n(o)&&(a=a||100,s!==o&&(c=o,e(r,a)))},m.prototype.focusReset=function(){o()},m}(),a={},r={get:n};return r}var o=e("../module");o.factory("InputFocusFactory",n),n.$inject=["$timeout"]}),define("shared/fend/input-utils/directives/input.focus",["require","../module"],function(e){function n(){function e(e,n,o){e.$watch(o.fendFocus,function(e){0!==e&&e&&n[0].focus()})}var n={restrict:"A",link:e};return n}var o=e("../module");o.directive("fendFocus",n)}),define("shared/fend/input-utils/package",["require","./module","./factories/input.focus","./directives/input.focus"],function(e){var n=e("./module");return e("./factories/input.focus"),e("./directives/input.focus"),n}),define("app/directors/module",["require","angular","angularResource","angularMessages","uiRouter","uiBootstrap","toaster","shared/fend/input-utils/package"],function(e){var n=e("angular");return e("angularResource"),e("angularMessages"),e("uiRouter"),e("uiBootstrap"),e("toaster"),n.module("directors",["ngResource","ngMessages","ui.router","ui.bootstrap","toaster",e("shared/fend/input-utils/package").name])}),define("app/directors/directives/directors.list",["require","../module"],function(e){function n(){var e={restrict:"E",templateUrl:"app/directors/templates/directors-list.html",controller:"DirectorsListCtrl"};return e}var o=e("../module");o.directive("directorsList",n)}),define("app/directors/directives/directors.new",["require","../module"],function(e){function n(){var e={restrict:"E",templateUrl:"app/directors/templates/directors-new.html",controller:"DirectorsNewCtrl"};return e}var o=e("../module");o.directive("directorsNew",n)}),define("app/directors/controllers/directorsList.controller",["require","../module"],function(e){function n(e,n,o,a){function r(){a.get(t.company,{id:t.company},function(e){t.directors=e.directors,n.vm.directors=t.directors},function(){})}var t=n;t.directors=n.vm.directors,t.company=n.vm.company,t.company.id&&r()}var o=e("../module");o.controller("DirectorsListCtrl",n),n.$inject=["$rootScope","$scope","$state","CompaniesResource","$stateParams","InputFocusFactory","toaster"]}),define("app/directors/controllers/directorsNew.controller",["require","../module"],function(e){function n(e,n){function o(){r.newDirectorAdding=!0}function a(){n.vm.directors.push(n.newDirector),r.newDirectorAdding=!1,n.newDirector=void 0}var r=n;r.addNew=o,r.newDirectorAdding=!1,r.newDirector={},r.saveDirector=a,r.directors=n.vm.directors}var o=e("../module");o.controller("DirectorsNewCtrl",n),n.$inject=["$rootScope","$scope","$state","CompaniesResource","$stateParams","InputFocusFactory","toaster"]}),define("app/directors/package",["require","./module","./directives/directors.list","./directives/directors.new","./controllers/directorsList.controller","./controllers/directorsNew.controller"],function(e){var n=e("./module");return e("./directives/directors.list"),e("./directives/directors.new"),e("./controllers/directorsList.controller"),e("./controllers/directorsNew.controller"),n}),define("app/companies/module",["require","angular","angularResource","angularMessages","uiRouter","uiBootstrap","toaster","shared/fend/input-utils/package","app/directors/package"],function(e){var n=e("angular");return e("angularResource"),e("angularMessages"),e("uiRouter"),e("uiBootstrap"),e("toaster"),n.module("companies",["ngResource","ngMessages","ui.router","ui.bootstrap","toaster",e("shared/fend/input-utils/package").name,e("app/directors/package").name])}),define("app/companies/resources/rest",["require","../module"],function(e){function n(e){var n=e("https://lipenco-company-api.herokuapp.com/api/v1/companies/:id",{id:""},{update:{method:"PUT"}});return n}var o=e("../module");o.factory("CompaniesResource",n),n.$inject=["$resource"]}),define("app/companies/controllers/list",["require","../module","../resources/rest"],function(e){function n(e,n,o,a,r,t,i,s){function c(){r.query(function(e){d.companies=e})}var d=this;d.companies=void 0,e.$on("company:updated:event",function(e,n){e.preventDefault(),e.stopPropagation();var o=s("filter")(d.companies,{id:n.id})[0];d.companies[d.companies.indexOf(o)]=n}),e.$on("company:deleted:event",function(e,n){e.preventDefault(),e.stopPropagation(),d.companies.splice(n,1)}),e.$on("company:added:event",function(e,n){e.preventDefault(),e.stopPropagation(),d.companies.splice(0,0,n)}),c()}var o=e("../module");e("../resources/rest"),o.controller("CompaniesListCtrl",n),n.$inject=["$rootScope","$state","$scope","$location","CompaniesResource","InputFocusFactory","$log","$filter"]}),define("app/companies/controllers/show",["require","../module","../resources/rest"],function(e){function n(e,n,o,a,r,t,i){function s(){l.editing=!0,t.focusReset(),t.setFocus("focusNameInput")}function c(){var n=l.company;n.directors=angular.toJson(l.directors),a.update(n,{id:l.company.id},function(n){e.$emit("company:updated:event",n),i.pop("success","You updated company",l.company.name),l.editing=!1},function(){i.pop("error","Something went wrong","Correct the form")})}function d(){a["delete"](l.company,{id:l.company.id},function(){e.$emit("company:deleted:event",l.company.$index),i.pop("success","You deleted company",l.company.name),m(!1),o.go("companies.list")},function(){i.pop("error","Something went wrong","Correct the form")})}function m(e){e?($("body").addClass("overflow-hidden"),$(".cd-folding-panel").addClass("is-open"),$(".cd-main").addClass("fold-is-open")):($("body").removeClass("overflow-hidden"),$(".cd-folding-panel").removeClass("is-open"),$(".cd-main").removeClass("fold-is-open"),o.go("companies.list"))}var l=this;l.toggleContent=m,l.company=r,l.directors=[],l.editing=!1,l.edit=s,l.update=c,l["delete"]=d;var p="CompaniesShowCtrl";t=t.get(p),t.config(n,["focusNameInput"]),m(!0)}var o=e("../module");e("../resources/rest"),o.controller("CompaniesShowCtrl",n),n.$inject=["$rootScope","$scope","$state","CompaniesResource","$stateParams","InputFocusFactory","toaster"]}),define("app/companies/controllers/new",["require","../module","../resources/rest"],function(e){function n(e,n,o,a,r,t){function i(){c.company.directors=angular.toJson(c.directors),a.save(c.company,{id:c.company.id},function(n){e.$emit("company:added:event",n),t.pop("success","You added new Company",c.company.name),s(!1),o.go("companies.list")},function(){t.pop("error","Something went wrong","Correct the form")})}function s(e){e?($("body").addClass("overflow-hidden"),$(".cd-folding-panel").addClass("is-open"),$(".cd-main").addClass("fold-is-open")):($("body").removeClass("overflow-hidden"),$(".cd-folding-panel").removeClass("is-open"),$(".cd-main").removeClass("fold-is-open"),o.go("companies.list"))}var c=this;c.toggleContent=s,c.company={},c.save=i,c.directors=[];var d="CompaniesNewCtrl";r=r.get(d),r.config(n,["focusNameInput"]),s(!0),r.setFocus("focusNameInput")}var o=e("../module");e("../resources/rest"),o.controller("CompaniesNewCtrl",n),n.$inject=["$rootScope","$scope","$state","CompaniesResource","InputFocusFactory","toaster"]}),define("app/companies/states",["require","./module"],function(e){function n(e,n){n.when("/companies","/companies/list"),e.state("companies",{"abstract":!0,url:"/companies",views:{master:{templateUrl:"app/main/templates/layout.html"}}}).state("companies.list",{url:"/list",views:{"content@companies":{templateUrl:"app/companies/templates/list.html",controller:"CompaniesListCtrl",controllerAs:"vm"}}}).state("companies.show",{url:"/show/:id?name?address?email?city?country",parent:"companies.list",views:{"readCompany@companies":{templateUrl:"app/companies/templates/show.html",controller:"CompaniesShowCtrl",controllerAs:"vm"}}}).state("companies.new",{url:"/new",parent:"companies.list",views:{"readCompany@companies":{templateUrl:"app/companies/templates/new.html",controller:"CompaniesNewCtrl",controllerAs:"vm"}}})}var o=e("./module");o.config(n),n.$inject=["$stateProvider","$urlRouterProvider"]}),define("app/companies/package",["require","./module","./controllers/list","./controllers/show","./controllers/new","./resources/rest","./states"],function(e){var n=e("./module");return e("./controllers/list"),e("./controllers/show"),e("./controllers/new"),e("./resources/rest"),e("./states"),n}),define("app/main/module",["require","angular","uiRouter","uiBootstrap","./templates/cache","shared/fend/progressbar-loading/package","shared/fend/navbar/package","app/companies/package"],function(e){var n=e("angular");return e("uiRouter"),e("uiBootstrap"),n.module("main",["ui.router","ui.bootstrap",e("./templates/cache").name,e("shared/fend/progressbar-loading/package").name,e("shared/fend/navbar/package").name,e("app/companies/package").name])}),define("app/main/controller",["require","./module"],function(e){function n(e){e.eventListeners(),e.color("#428bca"),e.height("3px")}var o=e("./module");o.controller("MainCtrl",n),n.$inject=["ProgressConfig","MenuConfig"]}),define("app/main/states",["require","./module"],function(e){function n(e,n){n.when("","/companies").when("/","/companies").otherwise("/404"),e.state("404",{url:"/404",views:{master:{templateUrl:"app/main/templates/layout.html"},"content@404":{templateUrl:"app/main/templates/404.html"}}})}var o=e("./module");o.config(n),n.$inject=["$stateProvider","$urlRouterProvider","$httpProvider"]}),define("app/main/package",["require","./module","./controller","./states"],function(e){var n=e("./module");return e("./controller"),e("./states"),n}),define("ng.app",["require","angular","app/main/package"],function(e){function n(){var n=o.module("run",[e("app/main/package").name]);o.bootstrap(document,[n.name])}var o=e("angular");o.element(document).ready(n)})}();
require({paths:{jquery:["vendor/jquery/2.1.3/jquery.min"],bootstrap:["vendor/bootstrap/3.3.2/js/bootstrap.min"],angular:["vendor/angular.js/1.3.11/angular.min"],angularResource:["vendor/angular.js/1.3.11/angular-resource.min"],angularAnimate:["vendor/angular.js/1.3.11/angular-animate.min"],angularMessages:["vendor/angular.js/1.3.11/angular-messages.min"],uiBootstrap:["vendor/angular-ui/bootstrap/0.12.0/ui-bootstrap-tpls.min"],uiRouter:["vendor/angular-ui/ui-router/0.2.13/angular-ui-router.min"],toaster:["vendor/toaster/0.3.0/toaster"],ngProgress:["vendor/ngProgress/1.0.3/ngProgress.min"],angularMocks:["vendor/angular.js/1.3.11/angular-mocks"],angularMocksBackend:["vendor/angular-mocks-backend/0.1.7/angular-mocks-backend"],lokijs:["vendor/lokijs/1.0.1/lokijs.min"]},shim:{bootstrap:{deps:["jquery"]},angular:{deps:["bootstrap"],exports:"angular"},angularResource:{deps:["angular"]},angularAnimate:{deps:["angular"]},angularMessages:{deps:["angular"]},uiBootstrap:{deps:["bootstrap","angular"]},uiRouter:{deps:["angular"]},ngProgress:{deps:["angular"]},toaster:{deps:["angularAnimate"]},angularMocks:{deps:["angular"]},angularMocksBackend:{deps:["angularMocks"]}},priority:["angular"],deps:["./ng.app"]});