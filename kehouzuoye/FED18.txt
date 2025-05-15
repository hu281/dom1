<!DOCTYPE html>\n<html>
  <head>
    <meta charset=utf-8>
  </head>
  <body>
  <script >
    // 补全代码      
    function Human(name) {
      this.name = name
      this.kingdom = 'animal'
      this.color = ['yellow', 'white', 'brown', 'black']
    }
    Human.prototype.getName = function (){
      return this.name;
    }
    function Chinese(name,age) {
      Human.call(this,name)
      this.color = 'yellow'
      this.age = age;
    }
    function extend (child , parent){
      child.prototype =Object.assign(child.prototype , parent.prototype)
    }        
    Chinese.prototype.getAge = function(){
      return this.age;          
    }
    extend(Chinese , Human)
    
    </script>
  </body>
</html>