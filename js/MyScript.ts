console.log("Hello world!");
class SignIn{
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
let SignInobj=new SignIn();
interface baseFunc{
    (): boolean;
}
let baseFunction=function(): boolean{
    SignInobj.setEmail=(document.getElementById("exampleInputEmail1") as HTMLInputElement).value;
    SignInobj.setPassword=(document.getElementById("exampleInputPassword1") as HTMLInputElement).value;
    SignInobj.setTandC=(document.getElementById("exampleCheck1") as HTMLInputElement).checked;
    let JsonObj: any={};
    if(SignInobj.getTandC){
        JsonObj.email=SignInobj.getEmail;
        JsonObj.password=SignInobj.getPassword;
    }
    console.log(JsonObj);
    return true;
}