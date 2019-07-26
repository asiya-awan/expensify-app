
const add = (a,b) => a+ b;
const generateGreeting = (name = 'Anonymous') =>  `Hello ${name}`;

test('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
   });

test('should genearte greeting form name: ', () => {
    const result = generateGreeting('asiya');
    console.log("Result", result);
    expect(result).toBe("Hello asiya"); 
});

test('should genearte greeting form name: ', () => {
    const result = generateGreeting();
    console.log("Result", result);
    expect(result).toBe("Hello Anonymous"); 
});