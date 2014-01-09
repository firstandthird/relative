//A global var of relative is set in the test's html before avascript is included.

// Format Date Function
function leadingZero(number) {
  return ('0' + number).slice(-2);
}
function formatDate(date){
  // MM/DD/YYYY
  return [leadingZero(date.getMonth()+1), leadingZero(date.getDate()), date.getFullYear()].join('/');
}

suite('relative', function() {
  suite('#relative()',function(){
    test('noConflict should reset original value',function(){
      var rel = relative.noConflict();
      assert.equal(relative, 'global var');
      window.relative = rel;
    }),
    test('should say just now if date is less than one minute ago',function(){
      assert.equal(relative(new Date()),'just now');
    });
    test('should say 1 minute ago if date is one minute ago',function(){
      var mochaDate = new Date();
      mochaDate.setMinutes(mochaDate.getMinutes()-1);
      assert.equal(relative(mochaDate),'1 minute ago');
    });
    test('should say 2 minutes ago if date is two minutes ago',function(){
      var mochaDate = new Date();
      mochaDate.setMinutes(mochaDate.getMinutes()-2);
      assert.equal(relative(mochaDate),'2 minutes ago');
    });
    test('should say 1 day ago if date is one day ago',function(){
      var mochaDate = new Date();
      mochaDate.setDate(mochaDate.getDate()-1);
      assert.equal(relative(mochaDate),'1 day ago');
    });
    test('should say 2 days ago if date is two day ago',function(){
      var mochaDate = new Date();
      mochaDate.setDate(mochaDate.getDate()-2);
      assert.equal(relative(mochaDate),'2 days ago');
    });
    test('should say 1 month ago if date is one month ago',function(){
      var mochaDate = new Date();
      mochaDate.setMonth(mochaDate.getMonth()-1);
      assert.equal(relative(mochaDate),'1 month ago');
    });
    test('should return normal format date if date is greater than one month ago',function(){
      var mochaDate = new Date();
      mochaDate.setMonth(mochaDate.getMonth()-2);
      assert.equal(relative(mochaDate),formatDate(mochaDate));
    });
  });
});