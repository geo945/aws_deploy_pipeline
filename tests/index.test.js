
describe('index.js', () => {
    test('string with a single number should result in the number itself', () => {
        const justForFun = 'Just for fun'

        expect(justForFun).toEqual('Just for fun')
    });
})