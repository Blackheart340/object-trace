# Object-trace

`object-trace` helps you to find way to your property deep inside your nested object.
For example, you know the property name but don't know where it's placed. `object-tracer` going to find it for you.

## Usage:
```js
import tract from 'object-trace';

const testObject = {
    a: 1,
    b: 2,
    c: 'a',
    d: null,
    e: {
        a: 'a',
        d: '123',
        gotcha: {
            ab: '123',
            z: function() {
                return 1;
            }
        },
        z: 333
    }
};

console.log(trace(testObject, 'a'));
console.log(trace(testObject, 'gotcha'));
console.log(trace(testObject, 'd'));
console.log(trace(testObject, 'e'));
console.log(trace(testObject, 'd', '123'));
console.log(trace(testObject, 'ab', '123'));
console.log(trace(testObject, 'ab'));
console.log(trace(testObject, 'z'));
```

## License

MIT © [Nikitin Ivan](mailto://dvekopeiki@gmail.com)