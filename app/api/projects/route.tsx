import {NextResponse} from "next/server";
export  async function GET(req:any){
    
    return NextResponse.json({
        name:"sagar",
        message: "Hello World",
        quote:"This is a test",
        book:{
            bookname:"The Alchemist",

        }
    })
}
export async function POST(req:any){
    return NextResponse.json({
        name:"sagar",
        message: "Hello World",
        quote:"This is a test",
        book:{
            bookname:"The Alchemist",
        },
        post:"sucess"
    })
}
