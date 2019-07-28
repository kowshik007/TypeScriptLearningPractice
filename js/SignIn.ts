export default class SignIn{
    private email: string;
    private password: string;
    private TandC: boolean;
    constructor(){
    }
    get getEmail(): string{
        return this.email;
    }
    get getPassword(): string{
        return this.password
    }
    get getTandC(): boolean{
        return this.TandC;
    }
    set setEmail(email: string){
        this.email=email;
    }
    set setPassword(password: string){
        this.password=password;
    }
    set setTandC(TandC: boolean){
        this.TandC=TandC;
    }
}