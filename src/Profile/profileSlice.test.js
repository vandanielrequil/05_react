import reducer from './profileSlice';

test('initial profile state', () => {
    expect(reducer(undefined, {})).toEqual(
        {
            isAuthenticated: false,
            username: 'anonymous',
            email: '',
            password: ''
        }
    )
})