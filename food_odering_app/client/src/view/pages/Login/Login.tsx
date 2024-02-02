import React, {Component} from 'react';

export class Login extends Component {
    render() {
        return (
            <section className={"p-20 pt-10 border m-96 mt-20 rounded-xl shadow"}>
                <div>
                    <h1 className={"text-3xl font-agbalumo w-full text-center text-[var(--secondary-color)]"}>Sign In</h1>
                </div>
                <div className={"flex justify-evenly mt-5"}>
                    <div>
                        <Input placeholder={"Username"} name={"username"} type={"text"} handleEvent={handleInput}/>
                        <Input placeholder={"Password"} name={"password"} type={"password"} handleEvent={handleInput}/>
                    </div>
                </div>
                <div className={"w-full text-center "}>
                    <Button  name={"Sing In"} bgColor={"bg-blue-600"} bgColorHover={"bg-blue-800"} onClickEvent={singIn}/>
                    <Link to={'/sign-up'}><h1 className={"text-blue-700 cursor-pointer"}>sign up</h1></Link>
                </div>
            </section>
        )
        );
    }
}
