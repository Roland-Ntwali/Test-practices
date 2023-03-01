const reverseString = require('./reverseString')

test('reversing a string', function(){
    expect(reverseString('hello')).toBe('olleh')
    expect(reverseString('omo')).toBe('omo')
});

