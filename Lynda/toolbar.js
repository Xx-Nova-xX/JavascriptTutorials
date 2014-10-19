var oojs = (function(oojs) { //uses an immedietly invoced function where the single parameter is the oojs variable then when we invoce the function we pass ,oojs to it, 
      
      var createToolbarItems = function (itemElements) {
          var items = []; //array of items
          
          [].forEach.call(itemElements, function (el, index, array) { //loop through the elements and create objects. .call method, item elements is a node list, not array, use call method and specifiy the items elements for context and will use it for node list
          
          var item = {
              el: el,
              disable: function() {
                  this.el.classList.add("disabled");
              },
              enable: function() {
                  this.el.classList.remove("disabled");
              },
              isDisabled: function() {
                  return this.el.classList.contains("disabled");
              },
              activate : function() {
                  if (this.isDisabled()){
                      return;
                  }
                  this.el.classList.add("active");
              },
              isActive: function() {
                  return this.el.classList.contains("active");
              }
              toggleActiveState : function() {
                  if (this.isActive()) {
                      this.deactivate();
                  } else {
                      this.activate();
                  }
              }
            };
          
            items.push(item);
      });
            
         
          
          return items;
      };
                             
    oojs.createToolbar = function (elementId) { //add createToolbar function because we modify it, if not it would be undefined
        var element = document.getByID(elementId); // element that is supposed to represent the toolbar, call the elementById method and pass the elementID paramenter to it
        var items = element.query.selectorAll("it.toolbar-item"); //create the toolbar object with an item's propert, an array that will contain buttons inside the element. 
       
       
       
       return {
           items : createToolbarItems(items), //local function that will create a toolbar and add items to it
       };
    };
    
    return oojs;
 }(oojs || {})); //if it doesnt exist you add an object literal
 
 
 
 








 
// var toolbar = oojs.createToolbar("myToolbar");
 
 //var toolbarItem = toolbar.items[0];
 
 
 
 
/* if (!element) {
            element = document.createElement("DIV"); //pass "DIV" through .createElement
            element.id = elementID; //set the id to the specified element ID
            
        
    }; //you can check to see if the element doesn't exist & if it doesn't we can create it */