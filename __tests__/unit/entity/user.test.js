import { 
    expect,
    describe,
    test,
    jest,
    beforeEach
} from '@jest/globals'


describe('#UserEntity UnitTesting', ()=>{
    it('should instantiate a user entity & display correct string representation', () => {
        const user = new User({id: 'some-id'})

        expect(user).toBeDefined()
        expect(user.id).toStrictEqual('some-id')
        expect(user.toString()).toStrictEqual('')

    })
})